export interface EspecialidadFormativa {
  name: string;
  title: string;
  codigo: string;
  area_profesional: string;
}

const baseURL   = "https://erp.grupoatu.com";
const apiKey    = "b101b81e006bcf8";
const apiSecret = "ec08bbcb0c7c7b0";

export async function getEspecialidadesByArea(areaProfesional: string): Promise<EspecialidadFormativa[]> {
  const filters = JSON.stringify([
    ["Área Profesional", "=", areaProfesional]
  ]);

  const fields = JSON.stringify([
    "name",
    "nombre",          // Ajusta según el campo de título que uses
    "código",          // Idem
    "Área Profesional"
  ]);

  const params = new URLSearchParams({
    filters,
    fields,
    limit_page_length: "100"
  });

  const doctype = encodeURIComponent("Especialidad Formativa");
  const url = `${baseURL}/api/resource/${doctype}?${params.toString()}`;

  const res = await fetch(url, {
    headers: {
      'Authorization': `token ${apiKey}:${apiSecret}`,
      'Content-Type': 'application/json'
    }
  });

  if (!res.ok) {
    throw new Error(`Error fetching especialidades: ${res.status}`);
  }

  const { data } = await res.json();

  return data.map((item: any) => ({
    name: item.name,
    title: item["nombre"] || item.name,
    codigo: item["código"] || "",
    area_profesional: item["Área Profesional"]
  }));
}
