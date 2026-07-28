"use client";

import React, { useState } from "react";
import Image, { ImageProps, StaticImageData } from "next/image";
import { LucideIcon, Building2, Compass, Layers } from "lucide-react";

interface ImageWithFallbackProps extends Omit<ImageProps, "src"> {
  src: string | StaticImageData | undefined | null;
  fallbackTitle?: string;
  fallbackSubtitle?: string;
  icon?: LucideIcon;
  category?: string;
  containerClassName?: string;
}

export default function ImageWithFallback({
  src,
  alt,
  fallbackTitle,
  fallbackSubtitle,
  icon: Icon = Building2,
  category = "Maskan Architecture",
  containerClassName = "",
  className = "",
  ...props
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  const isInvalidSrc = !src || (typeof src === "string" && src.trim() === "");

  if (hasError || isInvalidSrc) {
    return (
      <div
        className={`relative w-full h-full min-h-[220px] overflow-hidden bg-white flex flex-col justify-between p-6 md:p-8 select-none border border-slate-200/80 shadow-sm ${containerClassName}`}
      >
        {/* Subtle Light Accent Glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-slate-100 blur-3xl pointer-events-none" />

        {/* Crisp Architectural Grid Pattern (Light Theme) */}
        <svg
          className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="blueprint-grid-light"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(31, 80, 113, 0.08)"
                strokeWidth="0.75"
              />
              <circle cx="0" cy="0" r="1.5" fill="rgba(31, 80, 113, 0.15)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint-grid-light)" />
          {/* Accent Draft Lines */}
          <line
            x1="10%"
            y1="20%"
            x2="90%"
            y2="20%"
            stroke="rgba(31, 80, 113, 0.06)"
            strokeDasharray="4 4"
          />
          <line
            x1="80%"
            y1="10%"
            x2="80%"
            y2="90%"
            stroke="rgba(31, 80, 113, 0.06)"
            strokeDasharray="4 4"
          />
          <circle
            cx="80%"
            cy="20%"
            r="12"
            fill="none"
            stroke="rgba(31, 80, 113, 0.12)"
            strokeWidth="1"
          />
        </svg>

        {/* Top Header Row */}
        <div className="relative z-10 flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-slate-100 border border-slate-200 text-slate-700 font-medium">
            <Compass className="w-3.5 h-3.5 text-slate-600" />
            {category}
          </span>
          <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500">
            <Layers className="w-4 h-4" />
          </div>
        </div>

        {/* Center/Bottom Visual Elements */}
        <div className="relative z-10 flex flex-col gap-3 my-auto pt-6">
          <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-800 shadow-md">
            <Icon className="w-7 h-7 text-slate-800" />
          </div>

          <div>
            <h4 className="text-xl md:text-2xl font-medium text-slate-900 tracking-tight leading-snug">
              {fallbackTitle || alt || "Architectural Excellence"}
            </h4>
            {fallbackSubtitle && (
              <p className="text-xs md:text-sm text-slate-600 font-light mt-1 max-w-md line-clamp-2">
                {fallbackSubtitle}
              </p>
            )}
          </div>
        </div>

        {/* Bottom Technical Scale Indicator */}
        <div className="relative z-10 flex items-center justify-between pt-4 border-t border-slate-200/80 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
          <span>Maskan Engineering</span>
          <span>1:100 Scale</span>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src!}
      alt={alt || "Maskan Image"}
      className={className}
      onError={() => setHasError(true)}
      {...props}
    />
  );
}
