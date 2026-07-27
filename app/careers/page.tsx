export const dynamic = 'force-dynamic';
import React from 'react';
import type { Metadata } from 'next';
import dbConnect from '@/utils/dbConnect';
import Career from '@/models/Career';
import CareerCategory from '@/models/CareerCategory';
import CareerLocation from '@/models/CareerLocation';
import NavBar from '@/components/Client/NavBar';
import Footer from '@/sections/Footer/Server';
import CareersHero from './components/CareersHero';
import JobListings from './components/JobListings';
import { Job } from '@/types/job';

interface MongoCareer {
  _id: { toString(): string };
  title: string;
  category?: { name: string } | null;
  location?: { name: string } | null;
  description: string;
  requirements?: string[];
}

interface MongoLookup {
  name: string;
}

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

    return (careers as unknown as MongoCareer[]).map((c) => ({
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

async function getCategoriesAndLocations() {
  try {
    await dbConnect();
    const categories = await CareerCategory.find().lean();
    const locations = await CareerLocation.find().lean();
    return {
      categories: (categories as unknown as MongoLookup[]).map((c) => c.name),
      locations: (locations as unknown as MongoLookup[]).map((l) => l.name),
    };
  } catch (error) {
    console.error('Error fetching categories/locations:', error);
    return { categories: [], locations: [] };
  }
}

export default async function CareersPage() {
  const [jobs, filterData] = await Promise.all([
    getJobs(),
    getCategoriesAndLocations(),
  ]);

  return (
    <main className="bg-[var(--bg-primary)] min-h-screen text-[var(--fg-primary)]">
      <NavBar />
      
      <CareersHero />
      <JobListings 
        jobs={jobs} 
        categories={filterData.categories} 
        locations={filterData.locations} 
      />

      <Footer />
    </main>
  );
}
