
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const TrainingPage = () => {
  const trainingPrograms = [
    {
      id: 1,
      title: 'Desarrollo Web Fullstack',
      description: 'Aprende HTML, CSS, JavaScript, React y Node.js para convertirte en un desarrollador web completo.',
      duration: '12 semanas',
      modality: 'Online / Presencial',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      id: 2,
      title: 'Marketing Digital',
      description: 'Domina las estrategias de SEO, SEM, redes sociales y email marketing para impulsar negocios en línea.',
      duration: '8 semanas',
      modality: 'Online',
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      id: 3,
      title: 'Administración de Empresas',
      description: 'Desarrolla habilidades en gestión financiera, recursos humanos y planificación estratégica.',
      duration: '16 semanas',
      modality: 'Presencial',
      image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      id: 4,
      title: 'Atención al Cliente',
      description: 'Mejora tus habilidades de comunicación y servicio para destacar en roles de atención al cliente.',
      duration: '4 semanas',
      modality: 'Online / Presencial',
      image: 'https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-4">Programas de Formación</h1>
        <p className="text-lg mb-8">
          Desarrolla nuevas habilidades y mejora tu perfil profesional con nuestros programas de formación especializada.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Nuestros Programas</h2>
            <div className="space-y-8">
              {trainingPrograms.map((program) => (
                <div 
                  key={program.id} 
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={program.image} 
                        alt={program.title} 
                        className="h-48 w-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                      <p className="text-gray-600 mb-4">{program.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm mb-4">
                        <span className="bg-gray-100 px-3 py-1 rounded-full">
                          ⏱️ {program.duration}
                        </span>
                        <span className="bg-gray-100 px-3 py-1 rounded-full">
                          🏫 {program.modality}
                        </span>
                      </div>
                      <Button>Más información</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-semibold mb-4">¿Por qué formarte con nosotros?</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Programas diseñados según las necesidades del mercado laboral</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Instructores con amplia experiencia profesional</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Formación práctica orientada a resultados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Bolsa de empleo exclusiva para nuestros alumnos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Certificaciones reconocidas por empresas colaboradoras</span>
                </li>
              </ul>
            </div>

            <div className="bg-job-blue text-white p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Solicita información</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded border-white focus:border-white text-black"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded border-white focus:border-white text-black"
                  />
                </div>
                <div>
                  <label htmlFor="program" className="block text-sm font-medium mb-1">Programa</label>
                  <select
                    id="program"
                    className="w-full rounded border-white focus:border-white text-black"
                  >
                    <option value="">Selecciona un programa</option>
                    {trainingPrograms.map(program => (
                      <option key={program.id} value={program.id}>{program.title}</option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="bg-white text-job-blue hover:bg-gray-100 px-4 py-2 rounded font-medium"
                >
                  Solicitar información
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TrainingPage;
