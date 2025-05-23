// services/trainingService.ts
export interface TrainingAction {
  name: string;
  title: string;
  duration: number;
  level: string;
  pdf: string;
}

const baseURL   = "https://erp.grupoatu.com";
const apiKey    = "b101b81e006bcf8";
const apiSecret = "ec08bbcb0c7c7b0";

export async function getTrainingActions(areaProfesional: string, page = 1, pageSize = 20): Promise<TrainingAction[]> {
  const offset = (page - 1) * pageSize;

  const filters = JSON.stringify([
    ["Área Profesional", "=", areaProfesional]
  ]);

  const params = new URLSearchParams({
    filters,
    fields: JSON.stringify(["name", "Nombre Acción Formativa", "Duración Horas", "Nivel", "PDF SEPE"]),
    limit_start: String(offset),
    limit_page_length: String(pageSize),
  });

  const doctype = encodeURIComponent("Training Specialty"); // o el nombre real exacto
const url = `${baseURL}/api/resource/${doctype}?${params.toString()}`;


  const res = await fetch(url, {
    headers: {
      'Authorization': `token ${apiKey}:${apiSecret}`,
      'Content-Type': 'application/json',
    }
  });

  if (!res.ok) {
    throw new Error(`Error fetching training actions: ${res.status}`);
  }

  const { data } = await res.json();

  return data.map((item: any) => ({
    name: item.name,
    title: item["Nombre Acción Formativa"],
    duration: item["Duración Horas"],
    level: item["Nivel"],
    pdf: item["PDF SEPE"]
  }));
}

