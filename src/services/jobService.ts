
import { Job } from '../types/job';

// Ejemplo de datos de empleos
const jobs: Job[] = [
  {
    id: 1,
    title: 'Desarrollador Frontend React',
    company: 'TechCorp',
    location: 'Madrid',
    description: 'Buscamos un desarrollador frontend con experiencia en React para unirse a nuestro equipo.',
    salary: '30,000€ - 45,000€',
    type: 'Tiempo completo',
    date: '2025-05-01',
    category: 'Tecnología',
    companyLogo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=128&h=128&fit=crop'
  },
  {
    id: 2,
    title: 'Diseñador UX/UI',
    company: 'Creative Studios',
    location: 'Barcelona',
    description: 'Se busca diseñador UX/UI con capacidad para crear interfaces de usuario innovadoras y atractivas.',
    salary: '28,000€ - 40,000€',
    type: 'Tiempo completo',
    date: '2025-05-02',
    category: 'Diseño',
    companyLogo: 'https://images.unsplash.com/photo-1599305446603-530436241e18?w=128&h=128&fit=crop'
  },
  {
    id: 3,
    title: 'Especialista en Marketing Digital',
    company: 'Growth Agency',
    location: 'Valencia',
    description: 'Buscamos especialista en marketing digital con experiencia en campañas SEM y redes sociales.',
    salary: '25,000€ - 35,000€',
    type: 'Tiempo completo',
    date: '2025-05-03',
    category: 'Marketing',
    companyLogo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=128&h=128&fit=crop'
  },
  {
    id: 4,
    title: 'Representante de Ventas',
    company: 'Sales Pro',
    location: 'Madrid',
    description: 'Se busca representante de ventas para desarrollar relaciones con clientes y aumentar la cartera de negocio.',
    salary: '24,000€ - 38,000€ + Comisiones',
    type: 'Tiempo completo',
    date: '2025-05-04',
    category: 'Ventas',
    companyLogo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=128&h=128&fit=crop'
  },
  {
    id: 5,
    title: 'Desarrollador Backend Node.js',
    company: 'WebSolutions',
    location: 'Sevilla',
    description: 'Buscamos desarrollador backend con experiencia en Node.js, Express y MongoDB.',
    salary: '32,000€ - 48,000€',
    type: 'Remoto',
    date: '2025-05-05',
    category: 'Tecnología',
    companyLogo: 'https://images.unsplash.com/photo-1599305446603-530436241e18?w=128&h=128&fit=crop'
  },
  {
    id: 6,
    title: 'Asistente Administrativo',
    company: 'Business Center',
    location: 'Barcelona',
    description: 'Se busca asistente administrativo para gestionar documentación y atender clientes.',
    salary: '18,000€ - 24,000€',
    type: 'Media jornada',
    date: '2025-05-06',
    category: 'Administración',
    companyLogo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=128&h=128&fit=crop'
  }
];

// Función para obtener todos los trabajos
export const getAllJobs = (): Job[] => {
  return jobs;
};

// Función para obtener un trabajo por ID
export const getJobById = (id: number): Job | undefined => {
  return jobs.find(job => job.id === id);
};

// Función para obtener trabajos destacados
export const getFeaturedJobs = (): Job[] => {
  // Simular trabajos destacados (en un caso real, podría haber una propiedad 'featured')
  return jobs.slice(0, 3);
};

// Función para filtrar trabajos
export const filterJobs = (
  query: string = '',
  location: string = '',
  jobType: string = '',
  category: string = '',
): Job[] => {
  return jobs.filter(job => {
    const matchQuery = query === '' || 
      job.title.toLowerCase().includes(query.toLowerCase()) || 
      job.company.toLowerCase().includes(query.toLowerCase()) ||
      job.description.toLowerCase().includes(query.toLowerCase());
    
    const matchLocation = location === '' || 
      job.location.toLowerCase().includes(location.toLowerCase());
    
    const matchType = jobType === '' || job.type === jobType;
    
    const matchCategory = category === '' || job.category === category;
    
    return matchQuery && matchLocation && matchType && matchCategory;
  });
};
