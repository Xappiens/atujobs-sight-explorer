
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeaturedJobs from '@/components/jobs/FeaturedJobs';
import CategorySection from '@/components/home/CategorySection';
import StepsSection from '@/components/home/StepsSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedJobs />
      <CategorySection />
      <StepsSection />
      
      <section className="py-16 bg-job-blue text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">¿Estás listo para iniciar tu próxima aventura profesional?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Miles de empresas están buscando talento como el tuyo. 
            No esperes más y encuentra tu próximo reto profesional.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/jobs">
              <Button size="lg" variant="secondary" className="font-semibold">
                Explorar Empleos
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-job-blue">
              Publicar Empleo
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
