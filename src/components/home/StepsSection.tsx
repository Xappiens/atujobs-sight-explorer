
import React from 'react';
import { Search, FileText, Send, Check } from 'lucide-react';

const StepsSection = () => {
  const steps = [
    {
      icon: <Search className="h-12 w-12" />,
      title: 'Buscar',
      description: 'Encuentra el trabajo perfecto entre miles de ofertas disponibles.',
    },
    {
      icon: <FileText className="h-12 w-12" />,
      title: 'Aplicar',
      description: 'Completa tu perfil y envía tu solicitud con un solo clic.',
    },
    {
      icon: <Send className="h-12 w-12" />,
      title: 'Entrevistar',
      description: 'Prepárate y destaca en el proceso de entrevistas.',
    },
    {
      icon: <Check className="h-12 w-12" />,
      title: 'Conseguir',
      description: 'Acepta la oferta y comienza tu nueva etapa profesional.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Cómo Funciona</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Encontrar tu próximo empleo ideal es fácil con estos simples pasos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-job-lightBlue p-4 rounded-full text-job-blue mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
