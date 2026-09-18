"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
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

          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
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

        <section className="bg-[#ece5df] px-5 py-20 sm:px-8 md:py-28 lg:px-12">
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-10">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#e36f2d]">Need a hand?</p>
              <h2 className="max-w-[560px] text-4xl font-medium tracking-[-0.05em] md:text-6xl">Frequently asked questions</h2>
            </div>
            <div className="border-t border-[#cfc4bd]">
              {faqItems.map((item) => (
                <details key={item.question} className="group border-b border-[#cfc4bd]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-medium tracking-[-0.02em] [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <Plus className="h-5 w-5 shrink-0 text-[#e36f2d] transition-transform group-open:rotate-45" />
                  </summary>
                  <p className="max-w-[680px] pb-6 pr-10 text-sm leading-7 text-[#766d70]">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

const faqItems = [
  { question: "How do I get started with Maskan?", answer: "Tell us about your project, its location, and the kind of space you want to create. Our team will get back to you with the next steps." },
  { question: "Do you work on both homes and commercial spaces?", answer: "Yes. We work across residential, hospitality, and commercial projects, shaping each response around the people and place involved." },
  { question: "Can I speak with the design team before starting?", answer: "Absolutely. An initial conversation helps us understand your goals and gives you a clear sense of how we work together." },
];

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
      className="animate-blog-card group border-t border-[#ded7d2] pt-5 md:grid md:grid-cols-[1.1fr_0.9fr] md:items-start md:gap-x-6 md:gap-y-0"
    >
      <div className="relative aspect-[1.38/1] overflow-hidden rounded-[10px] bg-[#d9d0ca]">
        <Image
          src={blog.cardImage ?? blog.coverImage}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          sizes="(min-width: 768px) 25vw, 100vw"
        />
      </div>
      <div className="flex flex-col items-start pt-5 text-left md:pt-0">
        <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e36f2d]">
          <span>{blog.category}</span>
          <span className="text-[#b1a6a1]">—</span>
          <span className="text-[#b1a6a1]">{date}</span>
        </div>
        <h3 className="max-w-[420px] text-2xl font-medium leading-[0.98] tracking-[-0.055em] transition-colors group-hover:text-[#e36f2d] md:text-3xl">
          {blog.title}
        </h3>
        <span className="mt-4 flex w-fit max-w-max items-center justify-start gap-1 text-left text-[9px] font-semibold uppercase tracking-[0.1em] text-[#251a23]">
          Read story <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
        </span>
        {blog.slug !== "how-to-choose-the-best-builders-in-kerala-2026" && (
          <p className="mt-6 max-w-[420px] text-sm leading-[1.55] text-[#766d70] md:text-base">{blog.excerpt}</p>
        )}
      </div>
    </Link>
  );
}

