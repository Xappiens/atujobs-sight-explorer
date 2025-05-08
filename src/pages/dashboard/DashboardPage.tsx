
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import Layout from '@/components/layout/Layout';
import ProfileSettings from '@/components/dashboard/ProfileSettings';
import JobPreferences from '@/components/dashboard/JobPreferences';
import SavedJobs from '@/components/dashboard/SavedJobs';
import { Card } from '@/components/ui/card';

const DashboardPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Mi Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Gestiona tus preferencias y configuraciones de cuenta
          </p>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="profile">Perfil</TabsTrigger>
            <TabsTrigger value="preferences">Preferencias Laborales</TabsTrigger>
            <TabsTrigger value="saved">Empleos Guardados</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="space-y-4">
            <Card className="p-6">
              <ProfileSettings />
            </Card>
          </TabsContent>
          
          <TabsContent value="preferences" className="space-y-4">
            <Card className="p-6">
              <JobPreferences />
            </Card>
          </TabsContent>
          
          <TabsContent value="saved" className="space-y-4">
            <Card className="p-6">
              <SavedJobs />
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default DashboardPage;
