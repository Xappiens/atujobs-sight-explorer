
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <Layout>
      <section className="bg-job-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Sobre AtuJobs</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Conectando talento con oportunidades laborales en toda España
          </p>
        </div>
      </section>
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Nuestra Misión</h2>
            <p className="text-lg text-gray-700 mb-8">
              En AtuJobs, nuestra misión es conectar a las personas con oportunidades laborales que les permitan desarrollar todo su potencial. Creemos que el trabajo adecuado puede transformar vidas, y nos comprometemos a facilitar ese proceso tanto para los candidatos como para las empresas.
            </p>
            
            <h2 className="text-2xl font-bold mb-6">Nuestra Historia</h2>
            <p className="text-lg text-gray-700 mb-4">
              Fundada en 2018, AtuJobs nació con la visión de revolucionar el mercado laboral en España. Identificamos una brecha entre el talento disponible y las empresas que buscaban perfiles cualificados, y creamos una plataforma que simplifica el proceso de búsqueda y contratación.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Desde entonces, hemos crecido hasta convertirnos en una de las principales plataformas de empleo en España, ayudando a miles de profesionales a encontrar su próximo desafío laboral y a las empresas a encontrar el talento que necesitan para crecer.
            </p>
            
            <h2 className="text-2xl font-bold mb-6">Por qué elegirnos</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-3">Para Candidatos</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-job-blue mr-2">✓</span>
                    <span>Acceso a miles de ofertas verificadas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-job-blue mr-2">✓</span>
                    <span>Herramientas para destacar tu perfil profesional</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-job-blue mr-2">✓</span>
                    <span>Notificaciones personalizadas de ofertas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-job-blue mr-2">✓</span>
                    <span>Recursos para mejorar tu desarrollo profesional</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Para Empresas</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-job-blue mr-2">✓</span>
                    <span>Acceso a una amplia base de talento cualificado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-job-blue mr-2">✓</span>
                    <span>Herramientas de filtrado avanzadas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-job-blue mr-2">✓</span>
                    <span>Gestión integral del proceso de selección</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-job-blue mr-2">✓</span>
                    <span>Asesoramiento personalizado por expertos en RRHH</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-6">¿Listo para comenzar?</h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/jobs">
                  <Button size="lg">Explorar Empleos</Button>
                </Link>
                <Button variant="outline" size="lg">Publicar Empleo</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
