"use client";

import React, { useState, useMemo } from 'react';
import { Job } from '@/types/job';
import JobFilters from './JobFilters';
import ApplicationForm from './ApplicationForm';

interface JobListingsProps {
  jobs: Job[];
}

export default function JobListings({ jobs }: JobListingsProps) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJobTitle, setSelectedJobTitle] = useState('');

  const handleApplyClick = (jobTitle: string) => {
    setSelectedJobTitle(jobTitle);
    setIsModalOpen(true);
  };

  // Extract unique filter options
  const categories = useMemo(() => Array.from(new Set(jobs.map(job => job.category))), [jobs]);
  const locations = useMemo(() => Array.from(new Set(jobs.map(job => job.location))), [jobs]);

  // Filter jobs based on selections
  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchCategory = selectedCategory ? job.category === selectedCategory : true;
      const matchLocation = selectedLocation ? job.location === selectedLocation : true;
      return matchCategory && matchLocation;
    });
  }, [jobs, selectedCategory, selectedLocation]);

  // Group filtered jobs by category
  const groupedJobs = useMemo(() => {
    const groups: { [key: string]: Job[] } = {};
    filteredJobs.forEach(job => {
      if (!groups[job.category]) {
        groups[job.category] = [];
      }
      groups[job.category].push(job);
    });
    return groups;
  }, [filteredJobs]);

  return (
    <section className="w-full bg-white pb-24">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <JobFilters 
          categories={categories}
          locations={locations}
          selectedCategory={selectedCategory}
          selectedLocation={selectedLocation}
          onCategoryChange={setSelectedCategory}
          onLocationChange={setSelectedLocation}
        />

        {Object.keys(groupedJobs).length > 0 ? (
          <div className="space-y-16">
            {Object.keys(groupedJobs).map((category) => (
              <div key={category} className="border-t border-black/10 pt-8">
                <div className="flex items-center gap-2 mb-8">
                  <h2 className="text-xl font-normal text-[#C52026]">{category}</h2>
                  <span className="text-black/50 text-sm">
                    ({groupedJobs[category].length.toString().padStart(2, '0')})
                  </span>
                </div>

                <div className="space-y-12">
                  {groupedJobs[category].map((job) => (
                    <div key={job.id} className="flex flex-col md:flex-row gap-8 md:gap-16 border-b border-black/10 pb-12 last:border-0 last:pb-0">
                      
                      {/* Job Title */}
                      <div className="md:w-1/4 flex-shrink-0">
                        <h3 className="text-lg font-normal text-black">{job.title}</h3>
                      </div>

                      {/* Job Description (Middle) */}
                      <div className="md:w-1/2">
                        <div className="prose prose-sm max-w-none text-black/70 prose-headings:text-black prose-headings:font-normal prose-h3:text-sm prose-h3:mt-0 prose-h3:mb-2 prose-p:mb-4 prose-p:leading-relaxed prose-ul:list-disc prose-ul:pl-5 prose-li:mb-1">
                          <div dangerouslySetInnerHTML={{ __html: job.description }} />
                        </div>
                      </div>

                      {/* Meta & Apply */}
                      <div className="md:w-1/4 flex flex-row md:flex-row justify-between items-start text-sm text-black/70 font-light gap-4">
                        <span className="whitespace-nowrap">{job.location}</span>
                        <span className="whitespace-nowrap hidden lg:block">Open Role</span>
                        <button 
                          onClick={() => handleApplyClick(job.title)}
                          className="text-[#C52026] hover:text-black font-normal transition-colors whitespace-nowrap flex items-center gap-1"
                        >
                          Apply Now <span>&gt;</span>
                        </button>
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border-t border-black/10">
            <h3 className="text-xl text-black font-normal mb-2">No jobs found</h3>
            <p className="text-black/50">Try adjusting your filters to find more opportunities.</p>
          </div>
        )}

        <ApplicationForm 
          isOpen={isModalOpen} 
          jobTitle={selectedJobTitle} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>
    </section>
  );
}
