"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import NavBar from "@/components/Client/NavBar";

export interface BlogItem {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  cardImage?: string;
  category: string;
  author: {
    name: string;
    role?: string;
    avatar?: string;
  };
  readingTime: string;
  tags?: string[];
  createdAt: string;
  featured?: boolean;
}

interface BlogListingClientProps {
  initialBlogs: BlogItem[];
  categories: string[];
}

export default function BlogListingClient({
  initialBlogs,
  categories,
}: BlogListingClientProps) {
  const filterCategories = ["All Posts", ...categories.filter((category) => category !== "All")];
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [visibleCount, setVisibleCount] = useState(4);

  const filteredBlogs = initialBlogs.filter(
    (blog) => activeCategory === "All Posts" || blog.category.toLowerCase() === activeCategory.toLowerCase(),
  );
  const visibleBlogs = filteredBlogs.slice(0, visibleCount);
  const hasMoreBlogs = visibleCount < filteredBlogs.length;

  return (
    <>
      <NavBar />
      <main className="overflow-hidden bg-[#f7f4f1] text-[#251a23]">
        <section className="bg-[#24151f] px-5 pb-20 pt-32 text-white sm:px-8 md:pb-28 md:pt-40 lg:px-12">
          <div className="mx-auto grid max-w-[1400px] items-end gap-12 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-[#e36f2d]">Our blog</p>
              <h1 className="max-w-[700px] text-5xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[86px]">
                Ideas for building better spaces.
              </h1>
            </div>
            <div className="flex items-center gap-4 border-t border-white/20 pt-5 md:mb-2 md:border-t-0 md:border-l md:pl-8">
              <span className="text-4xl font-medium tracking-[-0.05em] text-[#e36f2d]">{filteredBlogs.length}</span>
              <span className="max-w-[180px] text-sm leading-6 text-white/70">Stories and insights from the Maskan team</span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-6 py-20 md:py-28 md:px-12">
          <div className="mb-12 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#e36f2d]">Journal</p>
              <h2 className="text-4xl font-medium tracking-[-0.05em] md:text-5xl">Latest updates</h2>
            </div>
            <p className="max-w-[460px] text-base leading-7 text-[#766d70] md:justify-self-end">
              Perspectives on architecture, sustainable construction, and the considered details behind the places we make.
            </p>
          </div>

          {filterCategories.length > 1 && (
            <div className="mb-10 flex flex-wrap gap-2 border-b border-[#ded7d2] pb-5">
              {filterCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category);
                    setVisibleCount(4);
                  }}
                  className={`border-b px-1 pb-2 text-xs font-semibold uppercase tracking-[0.16em] transition-colors ${activeCategory === category ? "border-[#e36f2d] text-[#251a23]" : "border-transparent text-[#938a8b] hover:text-[#251a23]"}`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          <div className="flex flex-col gap-12">
            {visibleBlogs.map((blog, index) => (
              <BlogEditorialCard key={blog._id} blog={blog} index={index} />
            ))}
          </div>

          {hasMoreBlogs && (
            <div className="mt-14 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount(filteredBlogs.length)}
                className="group inline-flex items-center gap-3 border border-[#251a23] px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#251a23] transition-colors hover:bg-[#251a23] hover:text-white"
              >
                View all blogs
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          )}

          {filteredBlogs.length === 0 && (
            <p className="border-t border-[#ded7d2] pt-8 text-[#766d70]">No stories found in this category.</p>
          )}
        </section>


      </main>
    </>
  );
}



function BlogEditorialCard({ blog, index }: { blog: BlogItem; index: number }) {
  const date = new Date(blog.createdAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link
      href={`/blog/${blog.slug}`}
      style={{ animationDelay: `${Math.min(index, 8) * 70}ms` }}
      className="group flex flex-col lg:flex-row bg-[#faf8f5] rounded-[24px] p-3 shadow-sm hover:shadow-lg transition-all duration-500 w-full animate-blog-card"
    >
      {/* Left side: Image */}
      <div className="relative aspect-[4/3] lg:aspect-auto lg:w-[45%] min-h-[300px] lg:min-h-[400px] rounded-[20px] overflow-hidden shrink-0">
        <Image
          src={blog.cardImage ?? blog.coverImage}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
        
        {/* Pill at top left */}
        <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-5 py-2 rounded-full shadow-sm">
          <span className="text-[10px] font-semibold tracking-[0.2em] text-[#3b3034] uppercase">
            {blog.category}
          </span>
        </div>

        {/* Text at bottom left */}
        <div className="absolute bottom-6 left-6 flex items-stretch">
          <div className="w-[1.5px] bg-white/70 mr-4 rounded-full"></div>
          <p className="text-white text-[10px] font-medium tracking-[0.15em] uppercase leading-relaxed max-w-[120px]">
            A better<br/>tomorrow<br/>begins at home
          </p>
        </div>


      </div>

      {/* Right side: Content */}
      <div className="relative flex flex-col justify-center p-8 lg:p-12 lg:w-[55%] overflow-hidden rounded-r-[20px]">
        {/* Background decorative circles */}
        <div className="absolute -bottom-32 -right-16 w-80 h-80 border-[1.5px] border-[#e8dcd0] rounded-full pointer-events-none opacity-60"></div>
        <div className="absolute -bottom-16 -right-12 w-56 h-56 bg-[#eaddcf] rounded-full pointer-events-none opacity-50"></div>

        {/* Meta line */}
        <div className="flex items-center gap-4 mb-8 relative z-10">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#e36f2d] uppercase whitespace-nowrap">
            {blog.category}
          </span>
          <div className="h-[1px] flex-grow bg-[#dcd3cb]"></div>
          <span className="text-[10px] font-semibold tracking-[0.15em] text-[#9c9192] uppercase whitespace-nowrap">
            {date}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-3xl lg:text-[40px] font-serif text-[#251a23] leading-[1.2] mb-6 relative z-10 tracking-tight">
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p className="text-[#685e60] text-sm lg:text-[15px] leading-[1.7] mb-10 line-clamp-4 relative z-10 font-light">
          {blog.excerpt}
        </p>

        {/* Read story */}
        <div className="mt-auto flex items-center gap-4 relative z-10">
          <span className="text-[11px] font-bold tracking-[0.15em] text-[#251a23] uppercase border-b border-[#251a23] pb-1">
            Read story
          </span>
          <ArrowRight className="w-4 h-4 text-[#251a23] transition-transform duration-500 group-hover:translate-x-2" />
        </div>
      </div>
    </Link>
  );
}

