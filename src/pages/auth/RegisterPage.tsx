
import React from 'react';
import Layout from '@/components/layout/Layout';
import RegisterForm from '@/components/auth/RegisterForm';

const RegisterPage = () => {
  return (
    <Layout>
      <div className="py-16 bg-gray-50 min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4">
          <RegisterForm />
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Al registrarte, aceptas nuestros términos de servicio y política de privacidad.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;
