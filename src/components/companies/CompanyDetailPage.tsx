// src/pages/CompanyDetailPage.tsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { GlobeIcon, MapPinIcon, BuildingIcon } from 'lucide-react';
import { getCompanyById, Company } from '@/services/jobService';
import NotFound from '@/pages/NotFound';

const CompanyDetailPage: React.FC = () => {
  const { companyId } = useParams<{ companyId: string }>();
  const [company, setCompany] = useState<Company | null>(null);

  useEffect(() => {
    if (!companyId) return;
    const c = getCompanyById(companyId);
    setCompany(c || null);
  }, [companyId]);

  if (!company) return <NotFound />;

  return (
    <Layout>
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <Card>
            <CardContent className="p-6">
              <h1 className="text-3xl font-bold mb-4">{company.name}</h1>
              <p className="mb-4">{company.description}</p>
              <div className="flex flex-col sm:flex-row gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <GlobeIcon />  
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {company.website.replace(/^https?:\/\//, '')}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPinIcon /> 
                  <span>{company.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BuildingIcon />  
                  <span>{company.size}</span>
                </div>
              </div>

              <div className="mt-6">
                <Link to="/jobs" className="text-blue-600 hover:underline">
                  ← Volver a empleos
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default CompanyDetailPage;
