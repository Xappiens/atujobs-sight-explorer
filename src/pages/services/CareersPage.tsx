
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const CareersPage = () => {
  const benefits = [
    {
      icon: "💼",
      title: "Desarrollo profesional",
      description: "Plan de carrera personalizado y formación continua"
    },
    {
      icon: "🏆",
      title: "Reconocimiento",
      description: "Valoramos tu esfuerzo y celebramos tus logros"
    },
    {
      icon: "🔄",
      title: "Flexibilidad",
      description: "Horario flexible y posibilidad de teletrabajo"
    },
    {
      icon: "👥",
      title: "Equipo increíble",
      description: "Forma parte de un equipo diverso y colaborativo"
    },
    {
      icon: "🎯",
      title: "Impacto real",
      description: "Tu trabajo ayuda a transformar la vida de las personas"
    },
    {
      icon: "⚖️",
      title: "Equilibrio",
      description: "Promovemos el balance entre vida laboral y personal"
    },
  ];

  const openPositions = [
    {
      id: 1,
      title: "Consultor/a de Selección Senior",
      location: "Madrid",
      type: "Tiempo completo",
      department: "Reclutamiento"
    },
    {
      id: 2,
      title: "Especialista en Marketing Digital",
      location: "Remoto",
      type: "Tiempo completo",
      department: "Marketing"
    },
    {
      id: 3,
      title: "Desarrollador/a Full Stack",
      location: "Barcelona",
      type: "Tiempo completo",
      department: "Tecnología"
    },
    {
      id: 4,
      title: "Atención al cliente",
      location: "Madrid",
      type: "Media jornada",
      department: "Operaciones"
    },
  ];

  const departments = [
    {
      name: "Reclutamiento",
      description: "Ayudamos a conectar el talento con las oportunidades adecuadas.",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      name: "Tecnología",
      description: "Construimos herramientas digitales que transforman el mercado laboral.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      name: "Marketing",
      description: "Comunicamos nuestra misión y conectamos con candidatos y empresas.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4">Trabaja con nosotros</h1>
          <p className="text-lg text-gray-600">
            Únete a nuestro equipo y ayuda a transformar la forma en que las personas encuentran empleo.
            Estamos construyendo el futuro del trabajo.
          </p>
        </div>

        {/* Beneficios */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">¿Por qué unirte a nuestro equipo?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Departamentos */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Conoce nuestros departamentos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <div 
                key={index}
                className="relative group overflow-hidden rounded-lg h-64"
              >
                <img 
                  src={dept.image} 
                  alt={dept.name} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 transition-opacity duration-300">
                  <h3 className="text-xl font-semibold text-white mb-2">{dept.name}</h3>
                  <p className="text-white/80 text-sm">{dept.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Posiciones abiertas */}
        <section className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-semibold mb-8">Posiciones disponibles</h2>
          
          {openPositions.length > 0 ? (
            <div className="space-y-4">
              {openPositions.map((position) => (
                <div 
                  key={position.id}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:border-job-blue transition-colors"
                >
                  <div className="md:flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                        <span>📍 {position.location}</span>
                        <span>• {position.type}</span>
                        <span>• {position.department}</span>
                      </div>
                    </div>
                    <Button className="mt-4 md:mt-0">
                      Ver detalles
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-8">
              Actualmente no hay posiciones abiertas. ¡Vuelve a revisar pronto!
            </p>
          )}
          
          <div className="text-center mt-8">
            <p className="mb-4">¿No encuentras la posición perfecta pero quieres unirte a nuestro equipo?</p>
            <Button variant="outline">
              Envíanos tu CV
            </Button>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-job-blue text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">¿Listo para dar el siguiente paso en tu carrera?</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Forma parte de un equipo apasionado por transformar el mundo del empleo.
            Buscamos personas talentosas, motivadas y con ganas de marcar la diferencia.
          </p>
          <Button variant="secondary" size="lg">
            Explora nuestras oportunidades
          </Button>
        </section>
      </div>
    </Layout>
  );
};

export default CareersPage;
