
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Briefcase, PenTool, Database, BarChart, Heart } from 'lucide-react';

const categories = [
  {
    id: 'tech',
    title: 'Tecnología',
    count: 1200,
    icon: <Code className="h-10 w-10" />,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: 'business',
    title: 'Negocios',
    count: 840,
    icon: <Briefcase className="h-10 w-10" />,
    color: 'bg-green-100 text-green-600',
  },
  {
    id: 'design',
    title: 'Diseño',
    count: 530,
    icon: <PenTool className="h-10 w-10" />,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    id: 'data',
    title: 'Datos',
    count: 320,
    icon: <Database className="h-10 w-10" />,
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    id: 'marketing',
    title: 'Marketing',
    count: 640,
    icon: <BarChart className="h-10 w-10" />,
    color: 'bg-red-100 text-red-600',
  },
  {
    id: 'healthcare',
    title: 'Salud',
    count: 410,
    icon: <Heart className="h-10 w-10" />,
    color: 'bg-pink-100 text-pink-600',
  },
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Explorar por Categoría</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre oportunidades laborales en las principales categorías profesionales
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(category => (
            <Link to={`/jobs?category=${category.id}`} key={category.id}>
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${category.color}`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{category.title}</h3>
                      <p className="text-gray-500">{category.count} ofertas disponibles</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
