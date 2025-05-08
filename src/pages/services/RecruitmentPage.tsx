
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const RecruitmentPage = () => {
  const services = [
    {
      id: 1,
      title: 'Selección especializada',
      description: 'Encontramos talentos específicos para roles técnicos y directivos.',
      icon: '🔍'
    },
    {
      id: 2,
      title: 'Evaluación de candidatos',
      description: 'Analizamos competencias y habilidades mediante pruebas específicas.',
      icon: '📊'
    },
    {
      id: 3,
      title: 'Entrevistas personalizadas',
      description: 'Realizamos entrevistas adaptadas a cada posición y empresa.',
      icon: '🗣️'
    },
    {
      id: 4,
      title: 'Verificación de referencias',
      description: 'Comprobamos la trayectoria profesional de los candidatos.',
      icon: '📝'
    },
    {
      id: 5,
      title: 'Onboarding',
      description: 'Facilitamos la incorporación de nuevos talentos a tu empresa.',
      icon: '🚀'
    },
    {
      id: 6,
      title: 'Headhunting',
      description: 'Búsqueda proactiva de profesionales de alto rendimiento.',
      icon: '🎯'
    },
  ];

  const steps = [
    {
      number: 1,
      title: 'Análisis de necesidades',
      description: 'Entendemos tu empresa y los requisitos específicos del puesto.'
    },
    {
      number: 2,
      title: 'Búsqueda y selección',
      description: 'Identificamos candidatos que cumplen con el perfil requerido.'
    },
    {
      number: 3,
      title: 'Evaluación y entrevistas',
      description: 'Realizamos un proceso riguroso de evaluación de competencias.'
    },
    {
      number: 4,
      title: 'Presentación de candidatos',
      description: 'Te presentamos a los mejores candidatos para la posición.'
    },
    {
      number: 5,
      title: 'Acompañamiento',
      description: 'Facilitamos el proceso de contratación e incorporación.'
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-4">Servicios de Selección de Personal</h1>
        <p className="text-lg mb-8">
          Ayudamos a las empresas a encontrar el talento adecuado para impulsar su crecimiento.
        </p>

        {/* Servicios principales */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Nuestros servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Proceso de selección */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-8 text-center">Nuestro proceso</h2>
          <div className="relative">
            {/* Línea de tiempo */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-job-blue/30"></div>
            
            {/* Pasos */}
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  <div className={`md:flex items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    {/* Número */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                      <div className="bg-job-blue text-white w-10 h-10 rounded-full flex items-center justify-center font-bold z-10">
                        {step.number}
                      </div>
                    </div>
                    
                    {/* Contenido */}
                    <div className="md:w-1/2 p-4">
                      <div className={`bg-white p-6 rounded-lg shadow-sm ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                        <div className="md:hidden bg-job-blue text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-4">
                          {step.number}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    
                    {/* Espacio para mantener el diseño */}
                    <div className="md:w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-job-blue text-white p-8 rounded-lg">
          <div className="md:flex items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-2xl font-semibold mb-4">¿Necesitas encontrar el talento ideal?</h2>
              <p className="text-white/90">
                Nuestros expertos en selección te ayudarán a encontrar a los profesionales que tu empresa necesita.
                Contamos con una amplia base de candidatos cualificados y los mejores procesos de evaluación.
              </p>
            </div>
            <div>
              <Button variant="secondary" size="lg">
                Solicitar asesoramiento
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default RecruitmentPage;
