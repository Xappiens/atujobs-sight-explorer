import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin } from 'lucide-react';

interface JobSearchProps {
  className?: string;
  compact?: boolean;
  initialQuery?: string;
  initialLocation?: string;
  onSearch?: (query: string, location: string) => void;
}

const JobSearch: React.FC<JobSearchProps> = ({
  className = '',
  compact = false,
  initialQuery = '',
  initialLocation = '',
  onSearch,
}) => {
  const [query, setQuery] = useState(initialQuery);
  const [location, setLocation] = useState(initialLocation);

  // Sincroniza el estado interno si cambian los props iniciales
  useEffect(() => {
    setQuery(initialQuery);
    setLocation(initialLocation);
  }, [initialQuery, initialLocation]);

  // Dispara el filtrado en tiempo real al cambiar el término
  const handleQueryChange = (q: string) => {
    setQuery(q);
    onSearch?.(q, location);
  };

  // Dispara el filtrado en tiempo real al cambiar la ubicación
  const handleLocationChange = (loc: string) => {
    setLocation(loc);
    onSearch?.(query, loc);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Siempre delegamos al padre; ya no navegamos aquí
    onSearch?.(query, location);
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div
        className={`flex flex-col md:flex-row gap-3 ${
          compact ? 'max-w-2xl mx-auto' : ''
        }`}
      >
        <div className="relative flex-grow">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
          <Input
            type="text"
            placeholder="Buscar trabajo, palabras clave o empresa"
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="relative flex-grow">
          <MapPin
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
          <Input
            type="text"
            placeholder="Ciudad o provincia"
            value={location}
            onChange={(e) => handleLocationChange(e.target.value)}
            className="pl-10"
          />
        </div>

        <Button type="submit" className="whitespace-nowrap">
          Buscar Trabajos
        </Button>
      </div>
    </form>
  );
};

export default JobSearch;
