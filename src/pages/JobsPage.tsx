
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import JobCard from '@/components/jobs/JobCard';
import JobSearch from '@/components/jobs/JobSearch';
import JobFilter, { FilterParams } from '@/components/jobs/JobFilter';
import { filterJobs } from '@/services/jobService';
import { Job } from '@/types/job';

const JobsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);

  // Get initial filters from URL
  const initialFilters: FilterParams = {
    query: searchParams.get('q') || '',
    location: searchParams.get('location') || '',
    jobTypes: searchParams.getAll('type'),
  };

  // Apply filters from URL params
  useEffect(() => {
    setLoading(true);
    
    const query = searchParams.get('q') || '';
    const location = searchParams.get('location') || '';
    const types = searchParams.getAll('type');
    
    // In a real app, this would be an API call with params
    const results = filterJobs(
      query,
      location,
      types.length > 0 ? types[0] : ''
    );
    
    setJobs(results);
    setLoading(false);
  }, [searchParams]);

  const handleFilter = (filters: FilterParams) => {
    const params = new URLSearchParams();
    
    if (filters.query) params.set('q', filters.query);
    if (filters.location) params.set('location', filters.location);
    
    if (filters.jobTypes && filters.jobTypes.length > 0) {
      filters.jobTypes.forEach(type => {
        params.append('type', type);
      });
    }
    
    setSearchParams(params);
  };

  return (
    <Layout>
      <section className="bg-job-lightBlue py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 text-job-text">Buscar Empleo</h1>
          <JobSearch compact={true} />
        </div>
      </section>
      
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4">
              <JobFilter onFilter={handleFilter} initialFilters={initialFilters} />
            </div>
            
            <div className="md:w-3/4">
              <div className="bg-white p-4 rounded-lg border mb-4">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    {jobs.length} {jobs.length === 1 ? 'empleo encontrado' : 'empleos encontrados'}
                  </h2>
                  <div className="text-sm text-gray-500">
                    Ordenar por: Más recientes
                  </div>
                </div>
              </div>
              
              {loading ? (
                <div className="text-center py-10">Cargando...</div>
              ) : (
                <div className="space-y-4">
                  {jobs.length > 0 ? (
                    jobs.map((job) => <JobCard key={job.id} job={job} />)
                  ) : (
                    <div className="text-center py-10 bg-white rounded-lg border">
                      <h3 className="text-lg font-semibold mb-2">No se encontraron resultados</h3>
                      <p className="text-gray-500">Intenta con otros términos de búsqueda o filtros.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default JobsPage;
