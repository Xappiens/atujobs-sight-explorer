// src/utils/api.ts
export interface LoginResponse {
  message: string;
  // Frappe devuelve algo así como "Logged In"
}

export async function loginUser(
  email: string,
  password: string
): Promise<LoginResponse> {
  const url = "https://erp.grupoatu.com/api/method/login";

  const body = new URLSearchParams({
    usr: email,
    pwd: password,
  });

  const res = await fetch(url, {
    method: "POST",
    credentials: "include", // para que guarde las cookies de sesión
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  if (!res.ok) {
    // 401 / 403 viene aquí
    const err = await res.json().catch(() => null);
    throw new Error(
      err?.message || `Error de autenticación (${res.status})`
    );
  }

  const payload = await res.json();
  return payload; // { message: "Logged In" }
}
