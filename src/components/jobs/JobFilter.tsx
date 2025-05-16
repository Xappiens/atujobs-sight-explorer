// src/components/jobs/JobFilter.tsx
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

export interface FilterParams {
  query?: string;
  location?: string;
  jobTypes?: string[];
  category?: string;
  experience?: string;  // <-- añadido
  salary?: string;      // <-- añadido
}

interface JobFilterProps {
  onFilter: (filters: FilterParams) => void;
  initialFilters?: FilterParams;
}

const JobFilter: React.FC<JobFilterProps> = ({
  onFilter,
  initialFilters = {},
}) => {
  const [jobTypes,   setJobTypes]   = useState<string[]>(initialFilters.jobTypes || []);
  const [category,   setCategory]   = useState<string>(initialFilters.category   || '');
  const [experience, setExperience] = useState<string>(initialFilters.experience || '');
  const [salary,     setSalary]     = useState<string>(initialFilters.salary     || '');

  // 2. Auto-aplicar filtros en cada cambio de estado
  useEffect(() => {
    onFilter({
      ...initialFilters,
      jobTypes,
      category,
      experience,
      salary,
    });
  }, [jobTypes, category, experience, salary]);

  const toggleJobType = (type: string) => {
    setJobTypes(prev =>
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  return (
    <div className="space-y-4">
      {/* Tipo de empleo */}
      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold mb-3">Tipo de empleo</h3>
          {[
            ['Fijo discontinuo','FIJO DISCONTINUO'],
            ['Media jornada','Media jornada'],
            ['Remoto','REMOTO'],
            ['Freelance','FREELANCE'],
          ].map(([label, value]) => (
            <div key={value} className="flex items-center space-x-2">
              <Checkbox
                checked={jobTypes.includes(value)}
                onCheckedChange={() => toggleJobType(value)}
              />
              <Label className="cursor-pointer">{label}</Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Categoría */}
      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold mb-3">Categoría</h3>
          <RadioGroup
            value={category || 'all'}
            onValueChange={v => setCategory(v === 'all' ? '' : v)}
          >
            {[
              ['Todas','all'],
              ['Tecnología','Tecnología'],
              ['Marketing','Marketing'],
              ['Ventas','Ventas'],
              ['Diseño','Diseño'],
              ['Administración','Administración'],
            ].map(([label, value]) => (
              <div key={value} className="flex items-center space-x-2">
                <RadioGroupItem value={value} />
                <Label className="cursor-pointer">{label}</Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Experiencia */}
      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold mb-3">Experiencia</h3>
          <RadioGroup
            value={experience || 'all'}
            onValueChange={v => setExperience(v === 'all' ? '' : v)}
          >
            {[
              ['Cualquier nivel',''],
              ['Sin experiencia',''],
              ['1-3 años','1-3 años'],
              ['3+ años','3+ años'],
            ].map(([label, value]) => (
              <div key={value} className="flex items-center space-x-2">
                <RadioGroupItem value={value} />
                <Label className="cursor-pointer">{label}</Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Salario */}
      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold mb-3">Salario</h3>
          <RadioGroup
            value={salary || 'all'}
            onValueChange={v => setSalary(v === 'all' ? '' : v)}
          >
            {[
              ['Todos',''],
              ['< 20k','lt-20k'],
              ['20k – 30k','20-30k'],
              ['30k – 50k','30-50k'],
              ['> 50k','gt-50k'],
            ].map(([label, value]) => (
              <div key={value} className="flex items-center space-x-2">
                <RadioGroupItem value={value} />
                <Label className="cursor-pointer">{label}</Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobFilter;
