
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';
import { Toggle } from '@/components/ui/toggle';
import { toast } from "sonner";

const JobPreferences = () => {
  const [preferences, setPreferences] = useState({
    jobTypes: {
      fullTime: true,
      partTime: false,
      contract: false,
      freelance: false,
      internship: false
    },
    salaryRange: {
      min: 30000,
      max: 60000
    },
    receiveNotifications: true,
    remoteOnly: false,
    categories: ['Desarrollo Web', 'Diseño UX/UI']
  });

  const availableCategories = [
    'Desarrollo Web', 
    'Diseño UX/UI', 
    'Marketing Digital', 
    'Análisis de Datos', 
    'Gestión de Proyectos',
    'Recursos Humanos',
    'Ventas',
    'Atención al Cliente'
  ];

  const handleJobTypeChange = (type: keyof typeof preferences.jobTypes) => {
    setPreferences(prev => ({
      ...prev,
      jobTypes: {
        ...prev.jobTypes,
        [type]: !prev.jobTypes[type]
      }
    }));
  };

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPreferences(prev => ({
      ...prev,
      salaryRange: {
        ...prev.salaryRange,
        [name]: parseInt(value) || 0
      }
    }));
  };

  const handleToggleNotifications = () => {
    setPreferences(prev => ({
      ...prev,
      receiveNotifications: !prev.receiveNotifications
    }));
  };

  const handleToggleRemote = () => {
    setPreferences(prev => ({
      ...prev,
      remoteOnly: !prev.remoteOnly
    }));
  };

  const handleCategoryToggle = (category: string) => {
    setPreferences(prev => {
      const updatedCategories = prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category];
      
      return {
        ...prev,
        categories: updatedCategories
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar las preferencias
    toast.success("Preferencias guardadas correctamente");
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Preferencias Laborales</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Tipo de empleo</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="fullTime" 
                  checked={preferences.jobTypes.fullTime}
                  onCheckedChange={() => handleJobTypeChange('fullTime')}
                />
                <label htmlFor="fullTime" className="text-sm font-medium">
                  Tiempo completo
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="partTime" 
                  checked={preferences.jobTypes.partTime}
                  onCheckedChange={() => handleJobTypeChange('partTime')}
                />
                <label htmlFor="partTime" className="text-sm font-medium">
                  Tiempo parcial
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="contract" 
                  checked={preferences.jobTypes.contract}
                  onCheckedChange={() => handleJobTypeChange('contract')}
                />
                <label htmlFor="contract" className="text-sm font-medium">
                  Contrato
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="freelance" 
                  checked={preferences.jobTypes.freelance}
                  onCheckedChange={() => handleJobTypeChange('freelance')}
                />
                <label htmlFor="freelance" className="text-sm font-medium">
                  Freelance
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="internship" 
                  checked={preferences.jobTypes.internship}
                  onCheckedChange={() => handleJobTypeChange('internship')}
                />
                <label htmlFor="internship" className="text-sm font-medium">
                  Prácticas
                </label>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Rango salarial (€/año)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="min">Mínimo</Label>
                <Input 
                  id="min"
                  name="min"
                  type="number"
                  value={preferences.salaryRange.min}
                  onChange={handleSalaryChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="max">Máximo</Label>
                <Input 
                  id="max"
                  name="max"
                  type="number"
                  value={preferences.salaryRange.max}
                  onChange={handleSalaryChange}
                />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Categorías de interés</h3>
            <div className="flex flex-wrap gap-2">
              {availableCategories.map(category => (
                <Toggle
                  key={category}
                  pressed={preferences.categories.includes(category)}
                  onPressedChange={() => handleCategoryToggle(category)}
                  variant="outline"
                  className="text-sm"
                >
                  {category}
                </Toggle>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Opciones adicionales</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch
                  id="receiveNotifications" 
                  checked={preferences.receiveNotifications}
                  onCheckedChange={handleToggleNotifications}
                />
                <Label htmlFor="receiveNotifications">
                  Recibir notificaciones de nuevas ofertas
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch 
                  id="remoteOnly" 
                  checked={preferences.remoteOnly}
                  onCheckedChange={handleToggleRemote}
                />
                <Label htmlFor="remoteOnly">
                  Solo empleos en remoto
                </Label>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <Button type="submit">Guardar preferencias</Button>
        </div>
      </form>
    </div>
  );
};

export default JobPreferences;
