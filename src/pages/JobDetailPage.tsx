
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarIcon, MapPinIcon, BuildingIcon, GlobeIcon, BriefcaseIcon } from 'lucide-react';
import { getJobById, getCompanyById } from '@/services/jobService';
import NotFound from './NotFound';

const JobDetailPage = () => {
  const { jobId } = useParams<{ jobId: string }>();
  
  const job = jobId ? getJobById(jobId) : undefined;
  const company = job ? getCompanyById("1") : undefined; // In a real app we'd use job.companyId
  
  if (!job) {
    return <NotFound />;
  }

  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  return (
    <Layout>
      <section className="bg-job-lightBlue py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img 
                src={job.logo} 
                alt={`${job.company} logo`} 
                className="w-16 h-16 object-contain bg-white rounded-lg border p-1"
              />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-job-text">{job.title}</h1>
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
        </div>
      </section>
      
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main content */}
            <div className="lg:w-2/3">
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Información del Empleo</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="flex items-center gap-3">
                      <BriefcaseIcon className="text-job-blue" />
                      <div>
                        <div className="text-sm text-gray-500">Tipo de Empleo</div>
                        <div className="font-medium">{job.type}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <CalendarIcon className="text-job-blue" />
                      <div>
                        <div className="text-sm text-gray-500">Fecha de Publicación</div>
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
                    <h3 className="text-lg font-semibold mb-4">Descripción del Empleo</h3>
                    <p className="text-gray-700 mb-6 whitespace-pre-line">{job.description}</p>
                    
                    <h3 className="text-lg font-semibold mb-4">Requisitos</h3>
                    <ul className="list-disc pl-5 mb-6 space-y-2">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="text-gray-700">{req}</li>
                      ))}
                    </ul>
                    
                    <h3 className="text-lg font-semibold mb-4">Responsabilidades</h3>
                    <ul className="list-disc pl-5 mb-6 space-y-2">
                      {job.responsibilities.map((resp, index) => (
                        <li key={index} className="text-gray-700">{resp}</li>
                      ))}
                    </ul>
                    
                    <div className="mt-8">
                      <Button size="lg">Postular Ahora</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              <Card className="mb-6 sticky top-20">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Información de la Empresa</h2>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={job.logo} 
                      alt={`${job.company} logo`} 
                      className="w-16 h-16 object-contain rounded border p-1"
                    />
                    <div>
                      <h3 className="font-medium text-lg">{job.company}</h3>
                      <Link to={`/companies/${company?.id}`} className="text-job-blue text-sm">
                        Ver perfil de la empresa
                      </Link>
                    </div>
                  </div>
                  
                  {company && (
                    <>
                      <p className="text-gray-700 mb-4">{company.description}</p>
                      
                      <div className="space-y-3 text-sm">
                        <div className="flex gap-2">
                          <GlobeIcon size={18} className="text-gray-500" />
                          <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-job-blue">
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
        </div>
      </section>
    </Layout>
  );
};

export default JobDetailPage;
