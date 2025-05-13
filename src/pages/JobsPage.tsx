// src/pages/JobsPage.tsx
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import JobCard from '@/components/jobs/JobCard';
import JobSearch from '@/components/jobs/JobSearch';
import JobFilter, { FilterParams } from '@/components/jobs/JobFilter';
import { filterJobs, getAllJobs } from '@/services/jobService';
import { Job } from '@/types/job';

const JobsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [allJobs, setAllJobs] = useState<Job[]>([]);
  const [jobs,    setJobs]    = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  // Lee filtros iniciales de la URL
  const initialFilters: FilterParams = {
    query:      searchParams.get('q')        || '',
    location:   searchParams.get('location') || '',
    jobTypes:   searchParams.getAll('type'),
    category:   searchParams.get('category') || '',
    experience: searchParams.get('experience') || '',
    salary:     searchParams.get('salary')   || ''
  };

  // 1) Al montar, fetch de todos los trabajos
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = await getAllJobs();
        setAllJobs(data);
        console.log(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // 2) Cada vez que cambian filtros o allJobs, reaplicamos filterJobs
  useEffect(() => {
    setLoading(true);

    const q           = searchParams.get('q')        || '';
    const loc         = searchParams.get('location') || '';
    const types       = searchParams.getAll('type');
    const category    = searchParams.get('category') || '';
    const experience  = searchParams.get('experience') || '';
    const salary      = searchParams.get('salary')   || '';

    const filtered = filterJobs(
      allJobs,
      q,
      loc,
      types,
      category,
      experience,
      salary
    );
    setJobs(filtered);
    setLoading(false);
  }, [searchParams, allJobs]);

  return (
    <Layout>
            {/* Buscador */}
      <section className="bg-job-lightBlue py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 text-job-text">Buscar Empleo</h1>
          <JobSearch
            compact
            initialQuery={initialFilters.query}
            initialLocation={initialFilters.location}
            onSearch={(query, location) => {
              const params = new URLSearchParams();
              if (query)    params.set('q', query);
              if (location) params.set('location', location);
              setSearchParams(params);
            }}
          />
        </div>
      </section>

      {/* Filtros + Resultados */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6">
            <aside className="md:w-1/4">
              <JobFilter
                initialFilters={initialFilters}
                onFilter={(filters) => {
                  const params = new URLSearchParams();
                  if (filters.query)      params.set('q', filters.query);
                  if (filters.location)   params.set('location', filters.location);
                  filters.jobTypes.forEach(type => params.append('type', type));
                  if (filters.category)    params.set('category', filters.category);
                  if (filters.experience)  params.set('experience', filters.experience);
                  if (filters.salary)      params.set('salary', filters.salary);
                  setSearchParams(params);
                }}
              />
            </aside>

            <main className="md:w-3/4">
              <div className="bg-white p-4 rounded-lg border mb-4">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    {jobs.length}{' '}
                    {jobs.length === 1 ? 'empleo encontrado' : 'empleos encontrados'}
                  </h2>
                  <div className="text-sm text-gray-500">Ordenar por: Más recientes</div>
                </div>
              </div>

              {loading ? (
                <div className="text-center py-10">Cargando...</div>
              ) : (
                <div className="space-y-4">
                  {jobs.length > 0 ? (
                    jobs.map(job => <JobCard key={job.id} job={job} />)
                  ) : (
                    <div className="text-center py-10 bg-white rounded-lg border">
                      <h3 className="text-lg font-semibold mb-2">
                        No se encontraron resultados
                      </h3>
                      <p className="text-gray-500">
                        Intenta con otros términos de búsqueda o filtros.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </main>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default JobsPage;
