
import { Job, Company } from "../types/job";

// Mock data for jobs
const jobsData: Job[] = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "TechCorp",
    logo: "https://via.placeholder.com/100",
    location: "Madrid, España",
    type: "Full-time",
    salary: "€45,000 - €60,000",
    postedDate: "2025-05-01",
    description: "We are looking for an experienced frontend developer to join our team. You will be responsible for building user interfaces using React and TypeScript.",
    requirements: [
      "3+ years of experience with React",
      "Strong knowledge of TypeScript",
      "Experience with responsive design",
      "Strong problem-solving skills"
    ],
    responsibilities: [
      "Develop new user-facing features",
      "Build reusable components and libraries",
      "Optimize applications for performance",
      "Collaborate with other team members"
    ],
    featured: true
  },
  {
    id: "2",
    title: "Backend Developer",
    company: "DataSystems",
    logo: "https://via.placeholder.com/100",
    location: "Barcelona, España",
    type: "Full-time",
    salary: "€50,000 - €70,000",
    postedDate: "2025-05-03",
    description: "We're looking for a skilled backend developer to join our growing team. You will design and implement server-side applications using Node.js and PostgreSQL.",
    requirements: [
      "4+ years of experience with Node.js",
      "Strong knowledge of SQL and PostgreSQL",
      "Experience with RESTful APIs",
      "Understanding of server architecture"
    ],
    responsibilities: [
      "Design and implement backend services",
      "Optimize database performance",
      "Implement security and data protection",
      "Collaborate with frontend developers"
    ],
    featured: true
  },
  {
    id: "3",
    title: "UX/UI Designer",
    company: "CreativeMinds",
    logo: "https://via.placeholder.com/100",
    location: "Valencia, España",
    type: "Full-time",
    salary: "€40,000 - €55,000",
    postedDate: "2025-04-28",
    description: "We are seeking a talented UX/UI Designer to create amazing user experiences. The ideal candidate has a strong portfolio demonstrating their design skills.",
    requirements: [
      "3+ years of experience in UX/UI design",
      "Proficiency with design tools like Figma and Adobe XD",
      "Understanding of user research methodologies",
      "Strong portfolio of previous work"
    ],
    responsibilities: [
      "Create wireframes, prototypes, and user flows",
      "Conduct user research and testing",
      "Collaborate with developers to implement designs",
      "Iterate on designs based on feedback"
    ]
  },
  {
    id: "4",
    title: "DevOps Engineer",
    company: "CloudSolutions",
    logo: "https://via.placeholder.com/100",
    location: "Sevilla, España",
    type: "Remote",
    salary: "€55,000 - €75,000",
    postedDate: "2025-05-05",
    description: "We're looking for a DevOps engineer to help us build and maintain our cloud infrastructure. Experience with AWS, Docker, and CI/CD pipelines is required.",
    requirements: [
      "4+ years of experience in DevOps",
      "Strong knowledge of AWS or Azure",
      "Experience with Docker and Kubernetes",
      "Understanding of CI/CD pipelines"
    ],
    responsibilities: [
      "Manage cloud infrastructure",
      "Implement CI/CD pipelines",
      "Monitor system performance",
      "Automate deployment processes"
    ]
  },
  {
    id: "5",
    title: "Data Scientist",
    company: "AnalyticsPro",
    logo: "https://via.placeholder.com/100",
    location: "Madrid, España",
    type: "Full-time",
    salary: "€60,000 - €80,000",
    postedDate: "2025-04-29",
    description: "We are looking for a data scientist to join our team. You will analyze complex datasets and develop machine learning models to solve business problems.",
    requirements: [
      "Advanced degree in Statistics, Mathematics, or Computer Science",
      "Experience with Python and data analysis libraries",
      "Knowledge of machine learning algorithms",
      "Strong analytical and problem-solving skills"
    ],
    responsibilities: [
      "Analyze large datasets to extract insights",
      "Develop machine learning models",
      "Present findings to stakeholders",
      "Collaborate with cross-functional teams"
    ]
  },
  {
    id: "6",
    title: "Product Manager",
    company: "InnovateTech",
    logo: "https://via.placeholder.com/100",
    location: "Barcelona, España",
    type: "Full-time",
    salary: "€60,000 - €85,000",
    postedDate: "2025-05-02",
    description: "We're looking for an experienced product manager to lead our product development efforts. You will work closely with engineering, design, and marketing teams.",
    requirements: [
      "5+ years of experience in product management",
      "Strong understanding of software development lifecycle",
      "Excellent communication and leadership skills",
      "Experience with agile methodologies"
    ],
    responsibilities: [
      "Define product vision and strategy",
      "Gather and prioritize requirements",
      "Work with cross-functional teams",
      "Analyze market and competitive data"
    ],
    featured: true
  }
];

// Mock data for companies
const companiesData: Company[] = [
  {
    id: "1",
    name: "TechCorp",
    logo: "https://via.placeholder.com/100",
    description: "TechCorp is a leading technology company specializing in innovative solutions for businesses.",
    website: "https://techcorp.example.com",
    location: "Madrid, España",
    industry: "Software Development",
    size: "50-200 employees",
    founded: "2010"
  },
  {
    id: "2",
    name: "DataSystems",
    logo: "https://via.placeholder.com/100",
    description: "DataSystems provides cutting-edge data management solutions for enterprises.",
    website: "https://datasystems.example.com",
    location: "Barcelona, España",
    industry: "Information Technology",
    size: "200-500 employees",
    founded: "2008"
  },
  {
    id: "3",
    name: "CreativeMinds",
    logo: "https://via.placeholder.com/100",
    description: "CreativeMinds is a design agency focused on creating exceptional digital experiences.",
    website: "https://creativeminds.example.com",
    location: "Valencia, España",
    industry: "Design",
    size: "10-50 employees",
    founded: "2015"
  },
  {
    id: "4",
    name: "CloudSolutions",
    logo: "https://via.placeholder.com/100",
    description: "CloudSolutions helps businesses migrate and optimize their infrastructure in the cloud.",
    website: "https://cloudsolutions.example.com",
    location: "Sevilla, España",
    industry: "Cloud Computing",
    size: "50-200 employees",
    founded: "2012"
  },
  {
    id: "5",
    name: "AnalyticsPro",
    logo: "https://via.placeholder.com/100",
    description: "AnalyticsPro specializes in data analytics and business intelligence solutions.",
    website: "https://analyticspro.example.com",
    location: "Madrid, España",
    industry: "Data Analytics",
    size: "50-200 employees",
    founded: "2014"
  },
  {
    id: "6",
    name: "InnovateTech",
    logo: "https://via.placeholder.com/100",
    description: "InnovateTech creates innovative products that transform industries.",
    website: "https://innovatetech.example.com",
    location: "Barcelona, España",
    industry: "Product Development",
    size: "200-500 employees",
    founded: "2009"
  }
];

// Service functions
export const getAllJobs = (): Job[] => {
  return jobsData;
};

export const getFeaturedJobs = (): Job[] => {
  return jobsData.filter(job => job.featured);
};

export const getJobById = (id: string): Job | undefined => {
  return jobsData.find(job => job.id === id);
};

export const getCompanyById = (id: string): Company | undefined => {
  return companiesData.find(company => company.id === id);
};

export const searchJobs = (query: string, location?: string): Job[] => {
  const lowercaseQuery = query.toLowerCase();
  const lowercaseLocation = location?.toLowerCase() || '';
  
  return jobsData.filter(job => {
    const matchesQuery = job.title.toLowerCase().includes(lowercaseQuery) || 
                        job.company.toLowerCase().includes(lowercaseQuery) ||
                        job.description.toLowerCase().includes(lowercaseQuery);
                        
    const matchesLocation = !location || job.location.toLowerCase().includes(lowercaseLocation);
    
    return matchesQuery && matchesLocation;
  });
};

export const filterJobs = (
  query: string = '', 
  location: string = '', 
  jobType: string = ''
): Job[] => {
  return jobsData.filter(job => {
    const matchesQuery = !query || 
      job.title.toLowerCase().includes(query.toLowerCase()) || 
      job.company.toLowerCase().includes(query.toLowerCase()) ||
      job.description.toLowerCase().includes(query.toLowerCase());
    
    const matchesLocation = !location || 
      job.location.toLowerCase().includes(location.toLowerCase());
    
    const matchesType = !jobType || job.type === jobType;
    
    return matchesQuery && matchesLocation && matchesType;
  });
};

export const getJobTypes = (): string[] => {
  const types = jobsData.map(job => job.type);
  return Array.from(new Set(types));
};

export const getLocations = (): string[] => {
  const locations = jobsData.map(job => job.location);
  return Array.from(new Set(locations));
};
