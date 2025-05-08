
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Bookmark, Calendar, MapPin, Briefcase, Eye, X } from 'lucide-react';
import { Link } from 'react-router-dom';

// Datos simulados para mostrar empleos guardados
const savedJobs = [
  {
    id: 1,
    title: 'Desarrollador Frontend React',
    company: 'Tech Solutions',
    location: 'Madrid',
    salary: '35.000€ - 45.000€',
    type: 'Tiempo completo',
    postedDate: '2025-05-01',
    logo: 'https://github.com/shadcn.png'
  },
  {
    id: 2,
    title: 'Diseñador UX/UI Senior',
    company: 'Creative Studio',
    location: 'Barcelona',
    salary: '40.000€ - 50.000€',
    type: 'Tiempo completo',
    postedDate: '2025-05-03',
    logo: 'https://github.com/shadcn.png'
  },
  {
    id: 3,
    title: 'Product Manager',
    company: 'Innovate Inc',
    location: 'Remoto',
    salary: '45.000€ - 60.000€',
    type: 'Tiempo completo',
    postedDate: '2025-05-04',
    logo: 'https://github.com/shadcn.png'
  }
];

// Datos simulados para mostrar empleos a los que se ha aplicado
const appliedJobs = [
  {
    id: 4,
    title: 'Desarrollador Fullstack',
    company: 'Global Tech',
    location: 'Valencia',
    salary: '38.000€ - 48.000€',
    type: 'Tiempo completo',
    appliedDate: '2025-05-02',
    status: 'En revisión',
    logo: 'https://github.com/shadcn.png'
  },
  {
    id: 5,
    title: 'Analista de Datos',
    company: 'Data Solutions',
    location: 'Madrid',
    salary: '42.000€ - 55.000€',
    type: 'Tiempo completo',
    appliedDate: '2025-05-01',
    status: 'Entrevista programada',
    logo: 'https://github.com/shadcn.png'
  }
];

const SavedJobs = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Mis Empleos</h2>
      
      <Tabs defaultValue="saved" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="saved">Guardados</TabsTrigger>
          <TabsTrigger value="applied">Aplicados</TabsTrigger>
        </TabsList>
        
        <TabsContent value="saved">
          <div className="space-y-4">
            {savedJobs.length > 0 ? (
              savedJobs.map(job => (
                <Card key={job.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="p-6">
                      <div className="flex justify-between">
                        <div className="flex space-x-4">
                          <div className="flex-shrink-0">
                            <img 
                              src={job.logo} 
                              alt={job.company} 
                              className="h-12 w-12 rounded-md object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{job.title}</h3>
                            <p className="text-gray-600 text-sm">{job.company}</p>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-sm text-gray-500">
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {job.location}
                              </div>
                              <div className="flex items-center">
                                <Briefcase className="h-4 w-4 mr-1" />
                                {job.type}
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {formatDate(job.postedDate)}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link to={`/jobs/${job.id}`}>
                              <Eye className="h-4 w-4 mr-2" />
                              Ver
                            </Link>
                          </Button>
                          <Button variant="ghost" size="sm">
                            <X className="h-4 w-4 mr-2" />
                            Eliminar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-8">
                <Bookmark className="h-12 w-12 mx-auto text-gray-400" />
                <h3 className="mt-4 text-lg font-medium">No hay empleos guardados</h3>
                <p className="mt-1 text-gray-500">Cuando guardes empleos aparecerán aquí</p>
                <Button className="mt-4" asChild>
                  <Link to="/jobs">Explorar empleos</Link>
                </Button>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="applied">
          <div className="space-y-4">
            {appliedJobs.length > 0 ? (
              appliedJobs.map(job => (
                <Card key={job.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="p-6">
                      <div className="flex justify-between">
                        <div className="flex space-x-4">
                          <div className="flex-shrink-0">
                            <img 
                              src={job.logo} 
                              alt={job.company} 
                              className="h-12 w-12 rounded-md object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{job.title}</h3>
                            <p className="text-gray-600 text-sm">{job.company}</p>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-sm text-gray-500">
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {job.location}
                              </div>
                              <div className="flex items-center">
                                <Briefcase className="h-4 w-4 mr-1" />
                                {job.type}
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                Aplicado el {formatDate(job.appliedDate)}
                              </div>
                            </div>
                            <div className="mt-2">
                              <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                                {job.status}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link to={`/jobs/${job.id}`}>
                              <Eye className="h-4 w-4 mr-2" />
                              Ver
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-8">
                <Briefcase className="h-12 w-12 mx-auto text-gray-400" />
                <h3 className="mt-4 text-lg font-medium">No has aplicado a ningún empleo</h3>
                <p className="mt-1 text-gray-500">Cuando postules a empleos aparecerán aquí</p>
                <Button className="mt-4" asChild>
                  <Link to="/jobs">Explorar empleos</Link>
                </Button>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SavedJobs;
