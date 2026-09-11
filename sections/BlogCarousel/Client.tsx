"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export interface BlogCarouselItem {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  category: string;
  author: {
    name: string;
    role?: string;
    avatar?: string;
  };
  readingTime: string;
  createdAt: string;
}

interface BlogCarouselClientProps {
  blogs: BlogCarouselItem[];
}

export default function BlogCarouselClient({ blogs }: BlogCarouselClientProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth * 0.75 : clientWidth * 0.75;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return "Recent";
    }
  };

  return (
    <section className="w-full bg-[#FFFFFF] py-20 md:py-28 overflow-hidden border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-10">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-normal text-gray-900 tracking-tight leading-[1.1]">
              Architectural Insights & News
            </h2>
            <p className="text-base text-gray-600 font-light max-w-xl">
              Discover perspectives on bespoke villa design, sustainable engineering, and commercial developments shaping Kerala.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-[#245171] hover:text-[#183a54] transition-colors mr-2"
            >
              <span>View All Articles</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-[#245171] hover:text-white hover:border-[#245171] transition-all cursor-pointer shadow-sm active:scale-95"
              aria-label="Previous Stories"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-[#245171] hover:text-white hover:border-[#245171] transition-all cursor-pointer shadow-sm active:scale-95"
              aria-label="Next Stories"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-6 -mx-6 px-6 md:-mx-12 md:px-12 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {blogs.map((blog) => (
            <article
              key={blog._id || blog.slug}
              className="w-[300px] sm:w-[360px] md:w-[400px] shrink-0 snap-start bg-[#F9FAFB] rounded-2xl overflow-hidden border border-gray-100 flex flex-col justify-between group hover:shadow-xl hover:bg-white hover:-translate-y-1 transition-all duration-300"
            >
              {/* Cover Image */}
              <Link
                href={`/blog/${blog.slug}`}
                className="relative aspect-[16/10] overflow-hidden bg-gray-100 block"
              >
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(min-width: 768px) 400px, 300px"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-normal uppercase tracking-wider">
                  {blog.category}
                </span>
              </Link>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2.5 font-normal">
                    <span>{formatDate(blog.createdAt)}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-gray-400" />
                      {blog.readingTime}
                    </span>
                  </div>

                  <Link href={`/blog/${blog.slug}`}>
                    <h3 className="text-lg md:text-xl font-normal text-gray-900 group-hover:text-[#245171] transition-colors leading-snug line-clamp-2 mb-3">
                      {blog.title}
                    </h3>
                  </Link>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4 font-light">
                    {blog.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between mt-auto">
                  <div>
                    <span className="font-normal text-xs text-gray-900 block">{blog.author.name}</span>
                    {blog.author.role && (
                      <span className="text-gray-400 text-[11px] block">{blog.author.role}</span>
                    )}
                  </div>

                  <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-normal text-[#245171] group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="sm:hidden text-center pt-2">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#245171] text-white text-xs font-normal uppercase tracking-wider shadow-md"
          >
            <span>Explore All Blog Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
