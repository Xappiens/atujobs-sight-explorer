
import React from 'react';
import Layout from '@/components/layout/Layout';

const ContactPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">Contacto</h1>
        <p className="text-lg mb-8">
          Estamos aquí para ayudarte. Ponte en contacto con nosotros para cualquier consulta relacionada con el empleo.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Información de contacto</h2>
            <div className="space-y-4">
              <p><strong>Dirección:</strong> Calle Principal 123, Madrid, España</p>
              <p><strong>Teléfono:</strong> +34 91 123 4567</p>
              <p><strong>Email:</strong> info@atujobs.com</p>
              <p><strong>Horario:</strong> Lunes a Viernes, 9:00 - 18:00</p>
            </div>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Envíanos un mensaje</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Nombre</label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded border-gray-300 focus:border-job-blue focus:ring-job-blue"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded border-gray-300 focus:border-job-blue focus:ring-job-blue"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Asunto</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full rounded border-gray-300 focus:border-job-blue focus:ring-job-blue"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Mensaje</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded border-gray-300 focus:border-job-blue focus:ring-job-blue"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-job-blue hover:bg-job-blue/80 text-white px-4 py-2 rounded"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
