
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
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
                    <ListItem href="/jobs/search" title="Buscador">
                      Busca ofertas de trabajo por categoría, ubicación o palabra clave
                    </ListItem>
                    <ListItem href="/jobs/categories/list" title="Bolsa de oficios">
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
                    <ListItem href="/services/training" title="Formación">
                      Programas de capacitación y desarrollo profesional
                    </ListItem>
                    <ListItem href="/services/recruitment" title="Selección de Personal">
                      Servicios de reclutamiento para empresas
                    </ListItem>
                    <ListItem href="/services/careers" title="Trabaja con nosotros">
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
                  onLoginSuccess={() => setIsLoginOpen(false)} 
                />
              </div>
            </PopoverContent>
          </Popover>
          
          <Link to="/auth/register">
            <Button size="sm">
              Publicar Empleo
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
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
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default Navbar;
