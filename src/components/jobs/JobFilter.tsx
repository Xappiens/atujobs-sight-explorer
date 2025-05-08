
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { getJobTypes, getLocations } from '@/services/jobService';

interface JobFilterProps {
  onFilter: (filters: FilterParams) => void;
  initialFilters?: FilterParams;
}

export interface FilterParams {
  query?: string;
  location?: string;
  jobTypes?: string[];
}

const JobFilter: React.FC<JobFilterProps> = ({ onFilter, initialFilters = {} }) => {
  const [filters, setFilters] = useState<FilterParams>({
    query: initialFilters.query || '',
    location: initialFilters.location || '',
    jobTypes: initialFilters.jobTypes || [],
  });

  const jobTypes = getJobTypes();
  const locations = getLocations();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter(filters);
  };

  const handleJobTypeChange = (jobType: string, checked: boolean) => {
    if (checked) {
      setFilters(prev => ({
        ...prev,
        jobTypes: [...(prev.jobTypes || []), jobType],
      }));
    } else {
      setFilters(prev => ({
        ...prev,
        jobTypes: (prev.jobTypes || []).filter(type => type !== jobType),
      }));
    }
  };

  const resetFilters = () => {
    setFilters({
      query: '',
      location: '',
      jobTypes: [],
    });
    onFilter({
      query: '',
      location: '',
      jobTypes: [],
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg border p-4">
      <h3 className="text-lg font-semibold mb-4">Filtrar Resultados</h3>
      
      <div className="space-y-4 mb-6">
        <div>
          <Label htmlFor="query">Palabras clave</Label>
          <Input
            id="query"
            type="text"
            placeholder="Título, empresa, habilidades..."
            value={filters.query}
            onChange={(e) => setFilters(prev => ({ ...prev, query: e.target.value }))}
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="location">Ubicación</Label>
          <Input
            id="location"
            type="text"
            placeholder="Ciudad o provincia"
            value={filters.location}
            onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
            className="mt-1"
          />
        </div>
        
        <div>
          <Label className="mb-2 block">Tipo de trabajo</Label>
          <div className="space-y-2">
            {jobTypes.map((jobType) => (
              <div key={jobType} className="flex items-center space-x-2">
                <Checkbox
                  id={`job-type-${jobType}`}
                  checked={(filters.jobTypes || []).includes(jobType)}
                  onCheckedChange={(checked) => 
                    handleJobTypeChange(jobType, checked === true)
                  }
                />
                <Label htmlFor={`job-type-${jobType}`} className="cursor-pointer">
                  {jobType}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-2">
        <Button type="submit" className="w-full">
          Aplicar Filtros
        </Button>
        <Button type="button" variant="outline" className="w-full" onClick={resetFilters}>
          Limpiar Filtros
        </Button>
      </div>
    </form>
  );
};

export default JobFilter;
