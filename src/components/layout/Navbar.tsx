
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-job-blue">AtuJobs</span>
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/jobs" className="text-gray-600 hover:text-job-blue font-medium">
              Buscar Trabajos
            </Link>
            <Link to="/companies" className="text-gray-600 hover:text-job-blue font-medium">
              Empresas
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-job-blue font-medium">
              Sobre Nosotros
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden md:flex items-center">
            <Search className="h-4 w-4 mr-2" />
            Buscar
          </Button>
          <Button variant="outline" size="sm">
            Iniciar Sesión
          </Button>
          <Button size="sm">
            Publicar Empleo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
