
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { toast } from "sonner";

const ProfileSettings = () => {
  const [formData, setFormData] = useState({
    name: 'Usuario Demo',
    email: 'usuario@ejemplo.com',
    phone: '+34 612 345 678',
    bio: 'Profesional con experiencia en desarrollo web y diseño UX/UI.',
    location: 'Madrid, España'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar los cambios del perfil
    toast.success("Perfil actualizado correctamente");
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Información del Perfil</h2>
      
      <div className="flex items-center mb-8">
        <Avatar className="h-24 w-24 mr-6">
          <AvatarImage src="https://github.com/shadcn.png" alt="Usuario Demo" />
          <AvatarFallback>UD</AvatarFallback>
        </Avatar>
        <div>
          <Button size="sm" variant="outline">Cambiar foto</Button>
          <p className="text-sm text-gray-500 mt-2">JPG o PNG. Máximo 1MB</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre completo</Label>
            <Input 
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input 
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono</Label>
            <Input 
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="location">Ubicación</Label>
            <Input 
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="bio">Biografía</Label>
            <Textarea 
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={5}
            />
          </div>
        </div>
        
        <Button type="submit">Guardar cambios</Button>
      </form>
    </div>
  );
};

export default ProfileSettings;
