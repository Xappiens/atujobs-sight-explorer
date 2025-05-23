import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

const PAGE_SIZE = 60;

interface Specialty {
  id: string;
  code: string;
  title: string;
  area: string;
  duration: string;
  nivel: string;
  objetivos: string;
  pdf: string | null;
}

const SpecialtiesPage: React.FC = () => {
  const [specialties, setSpecialties] = useState<Specialty[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
  const family = searchParams.get('category') || '';

  const getSpecialties = async (
    page = 1,
    pageSize = PAGE_SIZE,
    family?: string
  ): Promise<Specialty[]> => {
    const baseURL = 'https://erp.grupoatu.com';
    const apiKey = 'b101b81e006bcf8';
    const apiSecret = 'ec08bbcb0c7c7b0';

    const offset = (page - 1) * pageSize;
    const filters = family
      ? JSON.stringify([['familia', 'like', `%${family}%`]])
      : undefined;

    const qs = new URLSearchParams({
      fields: JSON.stringify(['*']),
      limit_start: String(offset),
      limit_page_length: String(pageSize),
    });

    if (filters) qs.set('filters', filters);

    const url = `${baseURL}/api/resource/Especialidades Formativas?${qs.toString()}`;

    const res = await fetch(url, {
      headers: {
        Authorization: `token ${apiKey}:${apiSecret}`,
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw new Error(`Error fetching specialties: ${res.status}`);

    const { data } = await res.json();

    return data.map((item: any) => ({
      id: item.name,
      code: item.codigo_especialidad,
      title: item.nombre_accion,
      area: item.area_profesional,
      duration: item.duracion,
      nivel: item.nivel,
      objetivos: item.objetivos,
      pdf: item.pdf_sepe,
    }));
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = await getSpecialties(page, PAGE_SIZE, family);
        setSpecialties(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [page, family]);

  const goToPage = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', String(newPage));
    setSearchParams(params);
  };

  return (
    <Layout>
      <section className="bg-job-lightBlue py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 text-job-text">
            Especialidades Formativas
          </h1>
          {family && (
            <p className="text-lg text-job-text">
              Área Profesional: <strong>{family}</strong>
            </p>
          )}
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-10">Cargando...</div>
          ) : (
            <>
              <div className="bg-white p-4 rounded-lg border mb-4">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    {specialties.length}{' '}
                    {specialties.length === 1
                      ? 'especialidad encontrada'
                      : 'especialidades encontradas'}
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {specialties.length > 0 ? (
                  specialties.map((spec) => (
                    <div
                      key={spec.id}
                      className="p-4 bg-white rounded-lg shadow border"
                    >
                      <h3 className="text-lg font-bold mb-2">{spec.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        <strong>Código:</strong> {spec.code}<br />
                        <strong>Área:</strong> {spec.area}<br />
                        <strong>Nivel:</strong> {spec.nivel}<br />
                        <strong>Duración:</strong> {spec.duration} horas
                      </p>
                      <div
                        className="text-gray-800 text-sm mb-2"
                        dangerouslySetInnerHTML={{ __html: spec.objetivos }}
                      />
                      {spec.pdf && (
                        <a
                          href={`https://erp.grupoatu.com${spec.pdf}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-blue-600 underline text-sm"
                        >
                          Ver ficha PDF
                        </a>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-10 bg-white rounded-lg border">
                    <h3 className="text-lg font-semibold mb-2">
                      No se encontraron resultados
                    </h3>
                    <p className="text-gray-500">
                      Intenta con otros filtros o prueba ver todas las especialidades.
                    </p>
                  </div>
                )}
              </div>

              {/* Paginación */}
              <div className="flex justify-center items-center mt-10 gap-4">
                <button
                  disabled={page <= 1 || loading}
                  onClick={() => goToPage(page - 1)}
                  className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                >
                  Anterior
                </button>
                <span>Página {page}</span>
                <button
                  disabled={specialties.length < PAGE_SIZE || loading}
                  onClick={() => goToPage(page + 1)}
                  className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                >
                  Siguiente
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default SpecialtiesPage;
