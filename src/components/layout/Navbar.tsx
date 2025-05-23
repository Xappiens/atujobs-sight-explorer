
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Search, User } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import LoginForm from "@/components/auth/LoginForm";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  // Esto simularía un estado de autenticación - en una app real vendría de un contexto de autenticación
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-job-blue">AtuJobs</span>
          </Link>
          
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Inicio
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Empleos</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 bg-white">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-job-blue/50 to-job-blue p-6 no-underline outline-none focus:shadow-md"
                          to="/jobs"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium text-white">
                            Encuentra tu Empleo
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Explora miles de ofertas de empleo y encuentra la posición ideal para tu carrera
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem to="/jobs/search" title="Buscador">
                      Busca ofertas de trabajo por categoría, ubicación o palabra clave
                    </ListItem>
                    <ListItem to="/jobs/categories/list" title="Bolsa de oficios">
                      Explora empleos por profesión o sector específico
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/about">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Conócenos
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Servicio</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 bg-white">
                    <ListItem to="/services/training" title="Formación">
                      Programas de capacitación y desarrollo profesional
                    </ListItem>
                    <ListItem to="/services/recruitment" title="Selección de Personal">
                      Servicios de reclutamiento para empresas
                    </ListItem>
                    <ListItem to="/services/careers" title="Trabaja con nosotros">
                      Únete a nuestro equipo de profesionales
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/contact">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contacto
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link to="/jobs/search">
            <Button variant="ghost" size="sm" className="hidden md:flex items-center">
              <Search className="h-4 w-4 mr-2" />
              Buscar
            </Button>
          </Link>
          
          {isLoggedIn ? (
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>Mi cuenta</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-56" align="end">
                <div className="grid gap-3">
                  <div className="font-medium">Usuario Demo</div>
                  <div className="grid grid-cols-1 gap-1">
                    <Link to="/dashboard">
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        Dashboard
                      </Button>
                    </Link>
                    <Link to="/dashboard">
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        Mi perfil
                      </Button>
                    </Link>
                    <Link to="/dashboard">
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        Empleos guardados
                      </Button>
                    </Link>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full justify-start text-red-500 hover:text-red-600"
                      onClick={() => setIsLoggedIn(false)} // En una app real sería una función de logout
                    >
                      Cerrar sesión
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <>
              <Popover open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm">
                    Iniciar Sesión
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-0" align="end" sideOffset={8}>
                  <div className="bg-white rounded-md shadow">
                    <LoginForm 
                      isPopover={true}
                      onLoginSuccess={() => {
                        setIsLoginOpen(false);
                        setIsLoggedIn(true); // En una app real esto se manejaría a través de un contexto de autenticación
                      }} 
                    />
                  </div>
                </PopoverContent>
              </Popover>
              
              <Link to="/auth/register">
                <Button size="sm">
                  Publicar Empleo
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default Navbar;
