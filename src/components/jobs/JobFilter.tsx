
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export interface FilterParams {
  query?: string;
  location?: string;
  jobTypes?: string[];
  category?: string;
}

interface JobFilterProps {
  onFilter: (filters: FilterParams) => void;
  initialFilters?: FilterParams;
}

const JobFilter: React.FC<JobFilterProps> = ({ onFilter, initialFilters = {} }) => {
  const [jobTypes, setJobTypes] = useState<string[]>(initialFilters.jobTypes || []);
  const [experience, setExperience] = useState<string>('');
  const [salary, setSalary] = useState<string>('');
  const [category, setCategory] = useState<string>(initialFilters.category || '');

  // Aplicar los filtros cuando cambian
  useEffect(() => {
    handleApplyFilter();
  }, []);

  const handleJobTypeChange = (type: string) => {
    setJobTypes(prevTypes => {
      if (prevTypes.includes(type)) {
        return prevTypes.filter(t => t !== type);
      } else {
        return [...prevTypes, type];
      }
    });
  };

  const handleCategoryChange = (category: string) => {
    setCategory(category === "all" ? '' : category);
  };

  const handleApplyFilter = () => {
    onFilter({
      jobTypes,
      category,
      ...initialFilters
    });
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold mb-3">Tipo de empleo</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <Checkbox 
                id="jobtype-fulltime" 
                checked={jobTypes.includes('Tiempo completo')}
                onCheckedChange={() => handleJobTypeChange('Tiempo completo')}
              />
              <Label htmlFor="jobtype-fulltime" className="ml-2 cursor-pointer">
                Tiempo completo
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox 
                id="jobtype-parttime"
                checked={jobTypes.includes('Media jornada')}
                onCheckedChange={() => handleJobTypeChange('Media jornada')}
              />
              <Label htmlFor="jobtype-parttime" className="ml-2 cursor-pointer">
                Media jornada
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox 
                id="jobtype-remote"
                checked={jobTypes.includes('Remoto')}
                onCheckedChange={() => handleJobTypeChange('Remoto')}
              />
              <Label htmlFor="jobtype-remote" className="ml-2 cursor-pointer">
                Remoto
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox 
                id="jobtype-freelance"
                checked={jobTypes.includes('Freelance')}
                onCheckedChange={() => handleJobTypeChange('Freelance')}
              />
              <Label htmlFor="jobtype-freelance" className="ml-2 cursor-pointer">
                Freelance
              </Label>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold mb-3">Categoría</h3>
          <RadioGroup defaultValue={category} onValueChange={handleCategoryChange}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="category-all" />
              <Label htmlFor="category-all">Todas</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Tecnología" id="category-tech" />
              <Label htmlFor="category-tech">Tecnología</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Marketing" id="category-marketing" />
              <Label htmlFor="category-marketing">Marketing</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Ventas" id="category-sales" />
              <Label htmlFor="category-sales">Ventas</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Diseño" id="category-design" />
              <Label htmlFor="category-design">Diseño</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Administración" id="category-admin" />
              <Label htmlFor="category-admin">Administración</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold mb-3">Experiencia</h3>
          <RadioGroup defaultValue={experience} onValueChange={setExperience}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="exp-all" />
              <Label htmlFor="exp-all">Cualquier nivel</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="entry" id="exp-entry" />
              <Label htmlFor="exp-entry">Sin experiencia</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="mid" id="exp-mid" />
              <Label htmlFor="exp-mid">1-3 años</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="senior" id="exp-senior" />
              <Label htmlFor="exp-senior">3+ años</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold mb-3">Salario</h3>
          <RadioGroup defaultValue={salary} onValueChange={setSalary}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="salary-all" />
              <Label htmlFor="salary-all">Todos</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="salary1" id="salary1" />
              <Label htmlFor="salary1">Menos de 20.000€</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="salary2" id="salary2" />
              <Label htmlFor="salary2">20.000€ - 30.000€</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="salary3" id="salary3" />
              <Label htmlFor="salary3">30.000€ - 50.000€</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="salary4" id="salary4" />
              <Label htmlFor="salary4">Más de 50.000€</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Button className="w-full" onClick={handleApplyFilter}>
        Aplicar filtros
      </Button>
    </div>
  );
};

export default JobFilter;
