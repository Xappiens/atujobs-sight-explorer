import React from 'react';
import { Link } from 'react-router-dom';
import { Job } from '@/types/job';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, MapPinIcon } from 'lucide-react';
import DOMPurify from 'dompurify';

export interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const formatDate = (dateString: string) => {
    const postedDate = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - postedDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Hoy';
    if (diffDays === 1) return 'Ayer';
    return `Hace ${diffDays} días`;
  };

  return (
    <Card
      className={`hover:border-job-blue transition-all ${job.featured ? 'border-l-4 border-l-job-blue' : ''
        }`}
    >
      <Link to={`/jobs/${encodeURIComponent(job.slug)}`} className="block">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 hidden sm:block">
              {/* <img
                src={job.companyLogo || "/placeholder.png"}
                alt={`${job.company} logo`}
                className="w-16 h-16 object-contain rounded border p-1"
              /> */}
            </div>

            <div className="flex-grow">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-job-text hover:text-job-blue transition-colors">
                  {job.title}
                </h3>
                <div className="flex items-center gap-2">
                  {job.featured && (
                    <Badge
                      variant="secondary"
                      className="bg-job-lightBlue text-job-blue border-none"
                    >
                      Destacado
                    </Badge>
                  )}
                  <Badge variant="outline">{job.type}</Badge>
                </div>
              </div>

              <div className="mt-1 text-gray-500">{job.company}</div>

              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <MapPinIcon size={16} />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <CalendarIcon size={16} />
                  <span>{formatDate(job.postedDate)}</span>
                </div>
                <div className="font-medium">{job.salary}</div>
              </div>
              <div
                className="mt-2 line-clamp-2 text-sm text-gray-600"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(job.description)
                }}
              />
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default JobCard;
