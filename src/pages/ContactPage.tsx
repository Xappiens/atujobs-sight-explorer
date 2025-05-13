// src/pages/ContactPage.tsx
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';

const baseURL   = "https://erp.grupoatu.com";
const apiKey    = "b101b81e006bcf8";
const apiSecret = "ec08bbcb0c7c7b0";

const ContactPage: React.FC = () => {
  const [name,    setName]    = useState('');
  const [email,   setEmail]   = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        data: {
          lead_name:   name,
          email_id:    email,
          subject,               // mapea al campo que tengas en Lead
          description: message
        }
      };

      const res = await fetch(`${baseURL}/api/resource/Lead`, {
        method: 'POST',
        headers: {
          'Authorization': `token ${apiKey}:${apiSecret}`,
          'Content-Type':  'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err?.message || res.statusText);
      }

      alert('✅ Tu mensaje se ha enviado correctamente.');
      // Limpia el formulario
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (err: any) {
      console.error('Error creando Lead:', err);
      alert('❌ Error al enviar el mensaje: ' + (err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">Contacto</h1>
        <p className="text-lg mb-8">
          Estamos aquí para ayudarte. Ponte en contacto con nosotros para cualquier consulta.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Información de contacto */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Información de contacto</h2>
            <div className="space-y-4">
              <p><strong>Dirección:</strong> Calle Principal 123, Madrid, España</p>
              <p><strong>Teléfono:</strong> +34 91 123 4567</p>
              <p><strong>Email:</strong> info@atujobs.com</p>
              <p><strong>Horario:</strong> Lunes a Viernes, 9:00 - 18:00</p>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Envíanos un mensaje</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Nombre</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  className="w-full rounded border-gray-300 focus:border-job-blue focus:ring-job-blue"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="w-full rounded border-gray-300 focus:border-job-blue focus:ring-job-blue"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Asunto</label>
                <input
                  id="subject"
                  type="text"
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                  className="w-full rounded border-gray-300 focus:border-job-blue focus:ring-job-blue"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Mensaje</label>
                <textarea
                  id="message"
                  rows={5}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  required
                  className="w-full rounded border-gray-300 focus:border-job-blue focus:ring-job-blue"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`px-4 py-2 rounded text-white ${
                  loading ? 'bg-gray-400' : 'bg-job-blue hover:bg-job-blue/80'
                }`}
              >
                {loading ? 'Enviando…' : 'Enviar mensaje'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
