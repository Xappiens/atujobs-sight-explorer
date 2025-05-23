import { Job } from '../types/job';

export interface Company {
  id: string;
  name: string;
  description: string;
  location: string;
  website: string;
  size: string;
  logo: string;
}

const baseURL   = "https://erp.grupoatu.com";
const apiKey    = "b101b81e006bcf8";
const apiSecret = "ec08bbcb0c7c7b0";

// Campos que pediremos siempre
const JOB_FIELDS = [
  'name',
  'job_title',
  'company',
  'description',
  'location',
  'salary_per',
  'lower_range',
  'upper_range',
  'currency',
  'employment_type',
  'department',
  'posted_on'
];

/**
 * Extrae experiencia y salario de la descripción HTML.
 */
function parseExtrasFromDescription(html: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const extras = { experience: '', salary: '' };

  const lis = Array.from(doc.body.querySelectorAll('li')).map(
    li => li.textContent?.trim() || ''
  );

  for (const text of lis) {
    const lower = text.toLowerCase();
    if (!extras.experience && lower.startsWith('experiencia')) {
      extras.experience = text;
    }
    if (!extras.salary && lower.includes('salario')) {
      extras.salary = text;
    }
  }
  return extras;
}

/**
 * Extrae categoría/departamento de la descripción HTML si no existe en el Doctype.
 */
function parseCategoryFromDescription(html: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const elements = Array.from(doc.body.querySelectorAll('p, li, div'));
  for (const el of elements) {
    const txt = el.textContent?.trim() || '';
    const m = txt.match(/^(?:Categor[ií]a|Departamento)\s*[:\-]\s*(.+)$/i);
    if (m) {
      return m[1].trim();
    }
  }
  return '';
}

/**
 * Trae todos los Job Opening desde ERPNext, paginado, y opcionalmente filtrado por categoría.
 */
export async function getJobs(
  page = 1,
  pageSize = 20,
  category?: string
): Promise<Job[]> {
  const offset = (page - 1) * pageSize;
  const qs = new URLSearchParams({
    fields: JSON.stringify(JOB_FIELDS),
    limit_page_length: String(pageSize),
    limit_start: String(offset),
  });

  // Si se pide category y existe como field, lo filtramos en el backend
  if (category) {
    const filters = JSON.stringify([
      ['Job Opening', 'department', '=', category]
    ]);
    qs.set('filters', filters);
  }

  const url = `${baseURL}/api/resource/Job%20Opening?${qs.toString()}`;
  const res = await fetch(url, {
    headers: {
      'Authorization': `token ${apiKey}:${apiSecret}`,
      'Content-Type': 'application/json'
    }
  });

  if (!res.ok) {
    throw new Error(`Error fetching jobs: ${res.status}`);
  }

  const { data } = await res.json();
  return data.map((item: any) => {
    const { experience, salary: extraSalary } =
      parseExtrasFromDescription(item.description || '');
    const salary =
      extraSalary ||
      (item.salary_per != null
        ? `${item.lower_range || 0}-${item.upper_range || 0} ${item.currency || ''}`
        : '');

    // 1) Tomamos department si existe
    let jobCategory = item.department || '';
    // 2) Si viene vacío, lo extraemos de la descripción
    if (!jobCategory) {
      jobCategory = parseCategoryFromDescription(item.description || '');
    }

    return {
      id: item.name,
      slug: item.name,
      title: item.job_title,
      company: item.company,
      description: item.description,
      location: item.location || '',
      salary,
      type: item.employment_type || '',
      date: item.posted_on,
      category: jobCategory,
      companyLogo: '',
      featured: false,
      logo: '',
      postedDate: item.posted_on,
      requirements: [],
      responsibilities: [],
      logoUrl: '',
      experience
    } as Job;
  });
}

/**
 * Trae 5 ofertas destacadas (limit_page_length=5).
 */
export const getFeaturedJobs = async (): Promise<Job[]> => {
  const url =
    `${baseURL}/api/resource/Job%20Opening` +
    `?fields=${encodeURIComponent(JSON.stringify(JOB_FIELDS))}` +
    `&limit_page_length=5`;

  const res = await fetch(url, {
    headers: {
      'Authorization': `token ${apiKey}:${apiSecret}`,
      'Content-Type': 'application/json'
    }
  });
  if (!res.ok) throw new Error(`Error ${res.status}`);

  const { data } = await res.json();
  return data.map((item: any) => {
    const { experience, salary: extraSalary } =
      parseExtrasFromDescription(item.description || '');
    const salary =
      extraSalary ||
      (item.salary_per != null
        ? `${item.lower_range || 0}-${item.upper_range || 0} ${item.currency || ''}`
        : '');

    let jobCategory = item.department || '';
    if (!jobCategory) {
      jobCategory = parseCategoryFromDescription(item.description || '');
    }

    return {
      id: item.name,
      slug: item.name,
      title: item.job_title,
      company: item.company,
      description: item.description,
      location: item.location || '',
      salary,
      type: item.employment_type || '',
      date: item.posted_on,
      category: jobCategory,
      companyLogo: '',
      featured: true,
      logo: '',
      postedDate: item.posted_on,
      requirements: [],
      responsibilities: [],
      logoUrl: '',
      experience
    } as Job;
  });
};

/**
 * Trae un único Job por su ID (name), incluyendo experiencia y categoría extraída.
 */
export const getJobById = async (id: string): Promise<Job> => {
  const url =
    `${baseURL}/api/resource/Job%20Opening/${encodeURIComponent(id)}` +
    `?fields=${encodeURIComponent(JSON.stringify(JOB_FIELDS))}`;

  const res = await fetch(url, {
    headers: {
      'Authorization': `token ${apiKey}:${apiSecret}`,
      'Content-Type': 'application/json'
    }
  });
  if (!res.ok) throw new Error(`Error ${res.status}`);

  const { data } = await res.json();
  const { experience, salary: extraSalary } =
    parseExtrasFromDescription(data.description || '');
  const salary =
    extraSalary ||
    (data.salary_per != null
      ? `${data.lower_range || 0}-${data.upper_range || 0} ${data.currency || ''}`
      : '');

  let jobCategory = data.department || '';
  if (!jobCategory) {
    jobCategory = parseCategoryFromDescription(data.description || '');
  }

  return {
    id: data.name,
    slug: data.name,
    title: data.job_title,
    company: data.company,
    description: data.description,
    location: data.location || '',
    salary,
    type: data.employment_type || '',
    date: data.posted_on,
    category: jobCategory,
    companyLogo: '',
    featured: true,
    logo: '',
    postedDate: data.posted_on,
    requirements: [],
    responsibilities: [],
    logoUrl: '',
    experience
  } as Job;
};

/**
 * Empresas estáticas de ejemplo.
 */
const companies: Company[] = [
  {
    id: "1",
    name: "TechCorp",
    description: "Una empresa líder en el sector tecnológico con más de 10 años de experiencia.",
    location: "Madrid",
    website: "https://techcorp.com",
    size: "50-100 empleados",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=128&h=128&fit=crop"
  }
];

/**
 * Consulta empresa estática por ID.
 */
export const getCompanyById = (id: string): Company | undefined => {
  return companies.find(c => c.id === id);
};

/**
 * Filtra un array de `Job[]` por parámetros.
 */
export const filterJobs = (
  allJobs: Job[],
  query: string = '',
  location: string = '',
  jobTypes: string[] = [],
  category: string = '',
  experience: string = '',
  salary: string = ''
): Job[] => {
  return allJobs
    // 1) Texto libre
    .filter(job => {
      const q = query.toLowerCase();
      if (
        q &&
        !(job.title.toLowerCase().includes(q) ||
          job.company.toLowerCase().includes(q) ||
          job.description.toLowerCase().includes(q))
      ) {
        return false;
      }
      if (
        location &&
        !job.location.toLowerCase().includes(location.toLowerCase())
      ) {
        return false;
      }
      return true;
    })
    // 2) Tipo
    .filter(job =>
      jobTypes.length === 0 || jobTypes.includes(job.type)
    )
    // 3) Categoría
    .filter(job => !category || job.category === category)
    // 4) Experiencia
    .filter(job => !experience || job.experience === experience)
    // 5) Salario
    .filter(job => {
      if (!salary || salary === 'all') return true;
      const [minS, maxS] = (job.salary || '')
        .split('-')
        .map(s => s.replace(/[^\d]/g, ''));
      const min = parseInt(minS, 10) || 0;
      const max = maxS ? parseInt(maxS, 10) : Infinity;
      switch (salary) {
        case 'lt-20k':
          return max < 20000;
        case '20-30k':
          return min >= 20000 && max <= 30000;
        case '30-50k':
          return min >= 30000 && max <= 50000;
        case 'gt-50k':
          return min > 50000;
        default:
          return true;
      }
    });
};
