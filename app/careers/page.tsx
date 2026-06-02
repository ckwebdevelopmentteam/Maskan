import React from 'react';
import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import NavBar from '@/components/Client/NavBar';
import Footer from '@/sections/Footer/Server';
import CareersHero from './components/CareersHero';
import JobListings from './components/JobListings';
import { Job } from '@/types/job';

export const metadata: Metadata = {
  title: 'Careers | Maskan Architecture',
  description: 'Join Maskan Architecture and build your career. Explore our open positions and find the perfect role for you.',
};

async function getJobs(): Promise<Job[]> {
  try {
    const filePath = path.join(process.cwd(), 'data', 'jobs.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const jobs = JSON.parse(fileContents);
    return jobs;
  } catch (error) {
    console.error('Error reading jobs:', error);
    return [];
  }
}

export default async function CareersPage() {
  const jobs = await getJobs();

  return (
    <main className="bg-white min-h-screen text-black">
      <NavBar />
      
      <CareersHero />
      <JobListings jobs={jobs} />

      <Footer />
    </main>
  );
}
