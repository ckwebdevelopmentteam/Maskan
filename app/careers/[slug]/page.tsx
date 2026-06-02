import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { MapPin, Clock, Briefcase, ArrowLeft, Banknote } from 'lucide-react';
import NavBar from '@/components/Client/NavBar';
import Footer from '@/sections/Footer/Server';
import ApplicationForm from '../components/ApplicationForm';
import { Job } from '@/types/job';

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

async function getJobBySlug(slug: string): Promise<Job | null> {
  const jobs = await getJobs();
  const job = jobs.find((j) => j.slug === slug);
  return job || null;
}

export async function generateStaticParams() {
  const jobs = await getJobs();
  return jobs.map((job) => ({
    slug: job.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const job = await getJobBySlug(resolvedParams.slug);
  if (!job) return { title: 'Job Not Found | Maskan Architecture' };

  return {
    title: `${job.title} - Careers | Maskan Architecture`,
    description: job.shortDescription,
  };
}

export default async function JobDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const job = await getJobBySlug(resolvedParams.slug);

  if (!job) {
    notFound();
  }

  return (
    <main className="bg-[var(--bg-primary)] min-h-screen pt-24 md:pt-32">
      <NavBar />

      <section className="container mx-auto px-6 max-w-5xl pb-24">
        <div className="mb-10">
          <Link href="/careers" className="inline-flex items-center gap-2 text-[var(--fg-primary)]/70 hover:text-[var(--accent)] transition-colors duration-300">
            <ArrowLeft className="w-4 h-4" /> Back to Careers
          </Link>
        </div>

        <div className="bg-[var(--bg-card)] border border-[var(--border-white-5)] rounded-[1.5rem] p-8 md:p-12 shadow-lg mb-16">
          <div className="border-b border-[var(--border-white-10)] pb-10 mb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <span className="inline-block px-4 py-1.5 bg-[var(--bg-dark)] border border-[var(--border-white-5)] text-[var(--accent)] text-xs font-medium rounded-full mb-6 tracking-wider uppercase">
                  {job.category}
                </span>
                <h1 className="text-3xl md:text-5xl font-bold text-[var(--fg-primary)] mb-4 tracking-tight">
                  {job.title}
                </h1>
              </div>
              <a href="#apply" className="bg-[var(--fg-primary)] text-[var(--bg-primary)] font-bold px-10 py-4 rounded-full hover:opacity-90 transition-all duration-300 shadow-lg text-center whitespace-nowrap text-lg">
                Apply Now
              </a>
            </div>

            <div className="flex flex-wrap gap-8 text-sm md:text-base text-[var(--fg-primary)]/80">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--bg-dark)] flex items-center justify-center border border-[var(--border-white-5)]">
                  <MapPin className="text-[var(--accent)] w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[var(--fg-primary)]/50 uppercase tracking-widest font-medium mb-1">Location</p>
                  <p className="font-semibold text-[var(--fg-primary)]">{job.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--bg-dark)] flex items-center justify-center border border-[var(--border-white-5)]">
                  <Briefcase className="text-[var(--accent)] w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[var(--fg-primary)]/50 uppercase tracking-widest font-medium mb-1">Experience</p>
                  <p className="font-semibold text-[var(--fg-primary)]">{job.experience}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--bg-dark)] flex items-center justify-center border border-[var(--border-white-5)]">
                  <Clock className="text-[var(--accent)] w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[var(--fg-primary)]/50 uppercase tracking-widest font-medium mb-1">Type</p>
                  <p className="font-semibold text-[var(--fg-primary)]">{job.employmentType}</p>
                </div>
              </div>

              {job.salary && (
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--bg-dark)] flex items-center justify-center border border-[var(--border-white-5)]">
                    <Banknote className="text-[var(--accent)] w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--fg-primary)]/50 uppercase tracking-widest font-medium mb-1">Salary</p>
                    <p className="font-semibold text-[var(--fg-primary)]">{job.salary}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none text-[var(--fg-primary)]/80 prose-headings:text-[var(--fg-primary)] prose-headings:font-bold prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-6 prose-p:mb-6 prose-p:leading-relaxed prose-ul:list-disc prose-ul:pl-6 prose-li:mb-3 prose-a:text-[var(--accent)] hover:prose-a:opacity-80 marker:text-[var(--accent)]">
            <div dangerouslySetInnerHTML={{ __html: job.description }} />
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <ApplicationForm jobTitle={job.title} isInline={true} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
