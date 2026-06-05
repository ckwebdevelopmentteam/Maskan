import React from 'react';
import type { Metadata } from 'next';
import dbConnect from '@/utils/dbConnect';
import Career from '@/models/Career';
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
    await dbConnect();
    const careers = await Career.find({ isActive: true })
      .populate('category', 'name')
      .populate('location', 'name')
      .lean();

    return careers.map((c: {
      _id: { toString: () => string };
      title: string;
      category?: { name: string };
      location?: { name: string };
      description: string;
      requirements?: string[];
    }) => ({
      id: c._id.toString(),
      _id: c._id.toString(),
      title: c.title,
      category: c.category?.name || 'Uncategorized',
      location: c.location?.name || 'Not Specified',
      description: c.description,
      requirements: c.requirements || [],
    })) as Job[];
  } catch (error) {
    console.error('Error fetching jobs:', error);
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
