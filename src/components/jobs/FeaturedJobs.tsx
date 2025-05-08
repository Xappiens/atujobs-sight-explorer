
import React from 'react';
import { Link } from 'react-router-dom';
import JobCard from './JobCard';
import { getFeaturedJobs } from '@/services/jobService';
import { Button } from '@/components/ui/button';

const FeaturedJobs = () => {
  const featuredJobs = getFeaturedJobs();

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-job-text">Empleos Destacados</h2>
          <Link to="/jobs">
            <Button variant="outline">Ver Todos</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {featuredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
