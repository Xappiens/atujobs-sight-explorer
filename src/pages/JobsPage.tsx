import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import JobCard from '@/components/jobs/JobCard';
import JobSearch from '@/components/jobs/JobSearch';
import JobFilter, { FilterParams } from '@/components/jobs/JobFilter';
import { filterJobs, getJobs } from '@/services/jobService';
import { Job } from '@/types/job';
 
const PAGE_SIZE = 20;
 
const JobsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [jobs, setJobs]         = useState<Job[]>([]);
  const [loading, setLoading]   = useState(true);
 
  // Página actual (1-indexed)
  const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
 
  // Lectura de filtros desde la URL
  const initialFilters: FilterParams = {
    query:      searchParams.get('q')        || '',
    location:   searchParams.get('location') || '',
    jobTypes:   searchParams.getAll('type'),
    category:   searchParams.get('category') || '',
    experience: searchParams.get('experience') || '',
    salary:     searchParams.get('salary')   || ''
  };
 
  // Cuando cambian filtros o página, recargamos la lista
// en JobsPage.tsx
useEffect(() => {
  (async () => {
    setLoading(true);
    try {
      // Pasamos initialFilters.category como 3er argumento
      const data = await getJobs(page, PAGE_SIZE, initialFilters.category);
      // Solo aplicamos client-side los demás filtros (q, location, type, experience, salary)
      const filtered = filterJobs(
        data,
        initialFilters.query,
        initialFilters.location,
        initialFilters.jobTypes,
        "",          // category ya filtrado en backend
        initialFilters.experience,
        initialFilters.salary
      );
      setJobs(filtered);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  })();
}, [
  page,
  initialFilters.query,
  initialFilters.location,
  JSON.stringify(initialFilters.jobTypes),
  initialFilters.category,    // si cambia la categoría, recargamos
  initialFilters.experience,
  initialFilters.salary,
]);

 
  // Helpers para actualizar URL (manteniendo filtros)
  const updateParams = (overrides: Record<string, string | string[] | number>) => {
    const params = new URLSearchParams();
 
    // Filtros existentes (o anulación)
    if (overrides.q !== undefined)
      params.set('q', String(overrides.q));
    else if (initialFilters.query)
      params.set('q', initialFilters.query);
 
    if (overrides.location !== undefined)
      params.set('location', String(overrides.location));
    else if (initialFilters.location)
      params.set('location', initialFilters.location);
 
    const types = Array.isArray(overrides.type)
      ? overrides.type
      : overrides.type !== undefined
        ? [String(overrides.type)]
        : initialFilters.jobTypes;
    types.forEach(t => params.append('type', t));
 
    if (overrides.category !== undefined)
      params.set('category', String(overrides.category));
    else if (initialFilters.category)
      params.set('category', initialFilters.category);
 
    if (overrides.experience !== undefined)
      params.set('experience', String(overrides.experience));
    else if (initialFilters.experience)
      params.set('experience', initialFilters.experience);
 
    if (overrides.salary !== undefined)
      params.set('salary', String(overrides.salary));
    else if (initialFilters.salary)
      params.set('salary', initialFilters.salary);
 
    // Página: si no se pasa, mantenemos la existente
    if (overrides.page !== undefined) {
      params.set('page', String(overrides.page));
    } else if (page > 1) {
      params.set('page', String(page));
    }
 
    setSearchParams(params);
  };
 
  const goToPage = (newPage: number) => {
    updateParams({ page: newPage });
  };
 
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
            onSearch={(q, loc) => updateParams({ q, location: loc, page: 1 })}
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
                onFilter={(filters) => updateParams({
                  q: filters.query,
                  location: filters.location,
                  type: filters.jobTypes,
                  category: filters.category,
                  experience: filters.experience,
                  salary: filters.salary,
                  page: 1
                })}
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
<>
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
 
                  {/* Controles de paginación */}
<div className="flex justify-center items-center mt-6 gap-4">
<button
                      disabled={page <= 1 || loading}
                      onClick={() => goToPage(page - 1)}
                      className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
>
                      Anterior
</button>
<span>Página {page}</span>
<button
                      disabled={jobs.length < PAGE_SIZE || loading}
                      onClick={() => goToPage(page + 1)}
                      className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
>
                      Siguiente
</button>
</div>
</>
              )}
</main>
</div>
</div>
</section>
</Layout>
  );
};
 
export default JobsPage;