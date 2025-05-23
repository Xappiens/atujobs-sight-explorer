import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// src/utils/api.ts
export interface Applicant {
  name: string;
  email: string;
  // añade aquí más campos según tu Doctype
}

const API_BASE = "https://erp.grupoatu.com";

export async function loginApplicant(
  email: string,
  password: string
): Promise<Applicant> {
  // construimos el filtro para el Doctype "Solicitante de empleo"
  const filters = JSON.stringify([
    ["email", "=", email],
    ["password", "=", password],
  ]);

  const url = `${API_BASE}/api/resource/Solicitante de empleo?filters=${encodeURIComponent(
    filters
  )}&limit_page_length=1`;

  const res = await fetch(url, {
    method: "GET",
    credentials: "include", // en caso de que tu ERP maneje sesión con cookies
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`Error al conectar con el servidor (${res.status})`);
  }

  const payload = await res.json();

  if (!payload.data || payload.data.length === 0) {
    throw new Error("Email o contraseña incorrectos");
  }

  // devolvemos el primer registro
  return payload.data[0] as Applicant;
}
