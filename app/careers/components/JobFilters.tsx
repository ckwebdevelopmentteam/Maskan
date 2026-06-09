"use client";

import React from 'react';

interface JobFiltersProps {
  categories: string[];
  locations: string[];
  selectedCategory: string;
  selectedLocation: string;
  onCategoryChange: (val: string) => void;
  onLocationChange: (val: string) => void;
}

export default function JobFilters({
  categories,
  locations,
  selectedCategory,
  selectedLocation,
  onCategoryChange,
  onLocationChange,
}: JobFiltersProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 mb-16 max-w-2xl">
      
      {/* Location Filter */}
      <div className="relative flex-1">
        <select 
          value={selectedLocation}
          onChange={(e) => onLocationChange(e.target.value)}
          className="w-full bg-transparent border border-[var(--fg-primary)]/20 text-[var(--fg-primary)] rounded p-4 outline-none focus:border-[var(--fg-primary)] transition-colors duration-300 appearance-none cursor-pointer"
        >
          <option value="">All Locations</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[var(--fg-primary)]/50">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"></path></svg>
        </div>
      </div>

      {/* Category Filter */}
      <div className="relative flex-1">
        <select 
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full bg-transparent border border-[var(--fg-primary)]/20 text-[var(--fg-primary)] rounded p-4 outline-none focus:border-[var(--fg-primary)] transition-colors duration-300 appearance-none cursor-pointer"
        >
          <option value="">All Departments</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[var(--fg-primary)]/50">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"></path></svg>
        </div>
      </div>

    </div>
  );
}
