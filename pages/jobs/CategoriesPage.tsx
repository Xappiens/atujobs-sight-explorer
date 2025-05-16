
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CategoriesPage = () => {
  // Categorías de empleos
  const categories = [
    { id: 1, name: 'Tecnología', icon: '💻', count: 420 },
    { id: 2, name: 'Marketing', icon: '📊', count: 215 },
    { id: 3, name: 'Ventas', icon: '🤝', count: 318 },
    { id: 4, name: 'Administración', icon: '📁', count: 156 },
    { id: 5, name: 'Finanzas', icon: '💰', count: 132 },
    { id: 6, name: 'Medicina', icon: '🩺', count: 97 },
    { id: 7, name: 'Educación', icon: '📚', count: 83 },
    { id: 8, name: 'Hostelería', icon: '🍽️', count: 124 },
    { id: 9, name: 'Construcción', icon: '🏗️', count: 75 },
    { id: 10, name: 'Logística', icon: '🚚', count: 91 },
    { id: 11, name: 'Diseño', icon: '🎨', count: 67 },
    { id: 12, name: 'Legal', icon: '⚖️', count: 42 },
  ];

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-4">Bolsa de oficios</h1>
        <p className="text-lg mb-8">
          Explora todas nuestras categorías de empleo y encuentra oportunidades en tu sector profesional.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              to={`/jobs/search?category=${category.name}`} 
              key={category.id}
              className="group"
            >
              <div className="bg-white border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:shadow-md hover:border-job-blue">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{category.icon}</div>
                  <div className="bg-gray-100 text-gray-700 text-sm px-2 py-1 rounded-full">
                    {category.count} ofertas
                  </div>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-job-blue">
                  {category.name}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Explora {category.count} oportunidades disponibles
                </p>
                <Button variant="link" className="mt-3 p-0 h-auto text-job-blue">
                  Ver empleos →
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CategoriesPage;
