export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
  salary: string;
  type: string;
  date: string;
  category: string;
  companyLogo?: string;
  experience?: string
  // Added missing properties
  featured?: boolean;
  logo?: string;
  postedDate?: string;
  requirements?: string[];
  responsibilities?: string[];
}
