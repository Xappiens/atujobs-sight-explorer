
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Link } from "react-router-dom";

const formSchema = z.object({
  email: z.string().email("Introduce un email válido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

interface LoginFormProps {
  isPopover?: boolean;
  onLoginSuccess?: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ 
  isPopover = false,
  onLoginSuccess = () => {} 
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Login form submitted:", values);
    // Aquí iría la lógica de autenticación
    onLoginSuccess();
  }

  return (
    <div className={`${isPopover ? "w-80" : "w-full max-w-md mx-auto p-8 bg-white rounded-lg shadow-md"}`}>
      {!isPopover && <h2 className="text-2xl font-bold mb-6 text-center">Iniciar sesión</h2>}
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="tu@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" className="w-full">
            Iniciar sesión
          </Button>
          
          {isPopover ? (
            <div className="text-center mt-3">
              <Link to="/auth/login" className="text-sm text-job-blue hover:underline">
                ¿No tienes cuenta? Regístrate
              </Link>
            </div>
          ) : (
            <div className="text-center mt-3">
              <Link to="/auth/register" className="text-sm text-job-blue hover:underline">
                ¿No tienes cuenta? Regístrate
              </Link>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
