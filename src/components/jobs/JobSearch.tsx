
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin } from 'lucide-react';

interface JobSearchProps {
  className?: string;
  compact?: boolean;
}

const JobSearch: React.FC<JobSearchProps> = ({ className = '', compact = false }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    
    if (query) params.set('q', query);
    if (location) params.set('location', location);
    
    navigate({
      pathname: '/jobs',
      search: params.toString()
    });
  };

  return (
    <form onSubmit={handleSubmit} className={`${className}`}>
      <div className={`flex flex-col md:flex-row gap-3 ${compact ? 'max-w-2xl mx-auto' : ''}`}>
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="Buscar trabajo, palabras clave o empresa"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="relative flex-grow">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="Ciudad o provincia"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
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
