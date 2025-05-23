

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import JobsPage from "./pages/JobsPage";
import JobDetailPage from "./pages/JobDetailPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import ContactPage from "./pages/ContactPage";
import JobCategoriesPage from "./pages/JobCategoriesPage";
import ServiceTrainingPage from "./pages/services/TrainingPage";
import ServiceRecruitmentPage from "./pages/services/RecruitmentPage";
import ServiceCareersPage from "./pages/services/CareersPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import CategoriesPage from "./pages/jobs/CategoriesPage";
import SearchPage from "./pages/jobs/SearchPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import CompanyDetailPage from "./components/companies/CompanyDetailPage";
import TrainingActionsPage from "./pages/SpecialitiesPage";
import EspecialidadesPage from "./pages/EspecialidadesPage";
import SpecialtiesPage from "./pages/SpecialitiesPage";
import { Job } from "./types/job";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Rutas de empleos */}
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/jobs/:jobId" element={<JobDetailPage />} />
          <Route path="/jobs/categories" element={<JobCategoriesPage />} />
          <Route path="/jobs/search" element={<SearchPage />} />
          <Route path="/jobs/categories/list" element={<CategoriesPage />} />

          {/*Ruta de la página de la compañía que ofrece el empleo */}
          <Route path="/companies/:companyId" element={<CompanyDetailPage />} />
          {/* Rutas principales */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Rutas de servicios */}
          <Route path="/services/training" element={<ServiceTrainingPage />} />
          <Route path="/services/recruitment" element={<ServiceRecruitmentPage />} />
          <Route path="/services/careers" element={<ServiceCareersPage />} />
          
          {/* Rutas de autenticación */}
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          
          {/* Ruta del dashboard de usuario */}
          <Route path="/dashboard" element={<DashboardPage />} />

          {/* Ruta de caformaciones */}
          <Route path="/especialidades" element={<SpecialtiesPage />} />

          
          {/* Ruta 404 - siempre debe estar al final */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

