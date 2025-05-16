// src/components/jobs/JobSearch.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin } from 'lucide-react';

interface JobSearchProps {
  className?: string;
  compact?: boolean;
  initialQuery?: string;
  initialLocation?: string;
}

const JobSearch: React.FC<JobSearchProps> = ({
  className = '',
  compact = false,
  initialQuery = '',
  initialLocation = '',
}) => {
  const [query, setQuery] = useState(initialQuery);
  const [location, setLocation] = useState(initialLocation);
  const navigate = useNavigate();

  useEffect(() => {
    setQuery(initialQuery);
    setLocation(initialLocation);
  }, [initialQuery, initialLocation]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navega a /search con los params
    navigate({
      pathname: '/jobs',
      search: `?q=${encodeURIComponent(query)}&location=${encodeURIComponent(location)}`,
    });
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className={`flex flex-col md:flex-row gap-3 ${compact ? 'max-w-2xl mx-auto' : ''}`}>
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="Buscar trabajo, palabras clave o empresa"
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="pl-10 bg-white text-black"
          />
        </div>
        <div className="relative flex-grow">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="Ciudad o provincia"
            value={location}
            onChange={e => setLocation(e.target.value)}
            className="pl-10 bg-white text-black"
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
