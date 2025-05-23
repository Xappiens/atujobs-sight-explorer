import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { getEspecialidadesByArea, EspecialidadFormativa } from '@/services/especialidadesService';

const EspecialidadesPage: React.FC = () => {
  const { area } = useParams<{ area: string }>();
  const [especialidades, setEspecialidades] = useState<EspecialidadFormativa[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await getEspecialidadesByArea(decodeURIComponent(area || ""));
        setEspecialidades(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [area]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Especialidades Formativas</h1>
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <div className="space-y-4">
            {especialidades.length > 0 ? (
              especialidades.map((e) => (
                <div key={e.name} className="bg-white border rounded p-4 shadow-sm">
                  <h2 className="text-xl font-semibold">{e.title}</h2>
                  <p className="text-gray-600">Código: {e.codigo}</p>
                  <p className="text-sm text-gray-500">Área Profesional: {e.area_profesional}</p>
                </div>
              ))
            ) : (
              <p>No se encontraron especialidades para esta área profesional.</p>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default EspecialidadesPage;
