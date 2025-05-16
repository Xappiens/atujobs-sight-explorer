// src/pages/JobDetailPage.tsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import DOMPurify from 'dompurify';
import {
  CalendarIcon,
  MapPinIcon,
  BuildingIcon,
  GlobeIcon,
  BriefcaseIcon
} from 'lucide-react';
import { getJobById, getCompanyById } from '@/services/jobService';
import { Job } from '@/types/job';
import { Company } from '@/services/jobService';
// <- Asegúrate de tener este tipo
import NotFound from './NotFound';

const JobDetailPage: React.FC = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [company, setCompany] = useState<Company | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!jobId) {
      setLoading(false);
      return;
    }
    (async () => {
      try {
        // 1) cargar el empleo
        const fetchedJob = await getJobById(jobId);
        setJob(fetchedJob);

        // 2) cargar la empresa asociada (suponiendo que fetchedJob.company sea el ID)
        const fetchedCompany = await getCompanyById(fetchedJob.company);
        setCompany(fetchedCompany);
      } catch (err: any) {
        setError(err.message || 'No se pudo cargar el empleo');
      } finally {
        setLoading(false);
      }
    })();
  }, [jobId]);

  const formatDate = (dateString: string) => {
    const opts: Intl.DateTimeFormatOptions = {
      year: 'numeric', month: 'long', day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('es-ES', opts);
  };

  if (loading) return <p>Cargando detalle…</p>;
  if (error) return <p className="text-red-500">¡Oops! {error}</p>;
  if (!job) return <NotFound />;

  return (
    <Layout>
      {/* Header */}
      <section className="bg-job-lightBlue py-10">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* <img
              src={job.logo}
              alt={`${job.company} logo`}
              className="w-16 h-16 object-contain bg-white rounded-lg border p-1"
            /> */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-job-text">
                {job.title}
              </h1>
              <div className="flex items-center gap-2 text-gray-600">
                <Link to={`/companies/${company?.id}`} className="hover:text-job-blue">
                  {job.company}
                </Link>
                <span>·</span>
                <span>{job.location}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button>Postular Ahora</Button>
            <Button variant="outline">Guardar Empleo</Button>
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-8">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
          {/* Detalle del Empleo */}
          <div className="lg:w-2/3">
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Información del Empleo</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex items-center gap-3">
                    <BriefcaseIcon className="text-job-blue" />
                    <div>
                      <div className="text-sm text-gray-500">Tipo</div>
                      <div className="font-medium">{job.type}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CalendarIcon className="text-job-blue" />
                    <div>
                      <div className="text-sm text-gray-500">Publicado</div>
                      <div className="font-medium">{formatDate(job.postedDate)}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPinIcon className="text-job-blue" />
                    <div>
                      <div className="text-sm text-gray-500">Ubicación</div>
                      <div className="font-medium">{job.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <BuildingIcon className="text-job-blue" />
                    <div>
                      <div className="text-sm text-gray-500">Salario</div>
                      <div className="font-medium">{job.salary}</div>
                    </div>
                  </div>
                </div>
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4">Descripción</h3>
                  <div
                    className="text-gray-700 mb-6"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(job.description)
                    }}
                  />
                  <div className="mt-8">
                    <Button size="lg">Postular Ahora</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar de Empresa */}
          <div className="lg:w-1/3">
            <Card className="mb-6 sticky top-20">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Empresa</h2>
                <div className="flex items-center gap-3 mb-4">
                  {/* <img
                    src={job.logo}
                    alt={`${job.company} logo`}
                    className="w-16 h-16 object-contain rounded border p-1"
                  /> */}
                  <div>
                    <h3 className="font-medium text-lg">{job.company}</h3>
                    {/* <Link to={`/companies/${company?.id}`} className="text-job-blue text-sm">
                      Ver perfil
                    </Link> */}
                  </div>
                </div>
                {company && (
                  <>
                    <p className="text-gray-700 mb-4">{company.description}</p>
                    <div className="space-y-3 text-sm">
                      <div className="flex gap-2">
                        <GlobeIcon size={18} className="text-gray-500" />
                        <a
                          href={company.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-job-blue"
                        >
                          {company.website.replace(/^https?:\/\//, '')}
                        </a>
                      </div>
                      <div className="flex gap-2">
                        <MapPinIcon size={18} className="text-gray-500" />
                        <span>{company.location}</span>
                      </div>
                      <div className="flex gap-2">
                        <BuildingIcon size={18} className="text-gray-500" />
                        <span>{company.size}</span>
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default JobDetailPage;
