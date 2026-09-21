"use client";

import React, { useState } from "react";

export default function MobileContentToggle({ children }: { children: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      <div 
        className={`overflow-hidden transition-all duration-700 ${
          isExpanded ? "max-h-[20000px]" : "max-h-[800px] md:max-h-none"
        }`}
      >
        {children}
      </div>
      
      {!isExpanded && (
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#f7f4f1] via-[#f7f4f1]/90 to-transparent flex items-end justify-center pb-2 md:hidden">
          <button 
            onClick={() => setIsExpanded(true)}
            className="group flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-[#251a23] uppercase border-b border-[#251a23] pb-1 hover:text-[#e36f2d] hover:border-[#e36f2d] transition-all duration-300"
          >
            Read More
            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </button>
        </div>
      )}
    </div>
  );
}
