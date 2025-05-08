
import React from 'react';
import JobSearch from '../jobs/JobSearch';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-job-blue to-job-darkBlue text-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Encuentra tu próximo empleo ideal
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90">
          Miles de ofertas de trabajo de las mejores empresas en España te están esperando
        </p>
        
        <JobSearch className="max-w-4xl mx-auto" />
        
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-4 py-6">
            <div className="font-bold text-2xl mb-1">10,000+</div>
            <div className="text-sm">Ofertas de empleo</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-4 py-6">
            <div className="font-bold text-2xl mb-1">5,000+</div>
            <div className="text-sm">Empresas</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-4 py-6">
            <div className="font-bold text-2xl mb-1">1M+</div>
            <div className="text-sm">Candidatos</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-4 py-6">
            <div className="font-bold text-2xl mb-1">200+</div>
            <div className="text-sm">Empleos diarios</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
