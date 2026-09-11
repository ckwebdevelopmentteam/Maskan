"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Search, Clock, ArrowRight, BookOpen } from "lucide-react";

export interface BlogItem {
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
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = useMemo(() => {
    return initialBlogs.filter((blog) => {
      const matchesCategory =
        selectedCategory === "All" ||
        blog.category.toLowerCase() === selectedCategory.toLowerCase();

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        blog.title.toLowerCase().includes(q) ||
        blog.excerpt.toLowerCase().includes(q) ||
        (blog.tags && blog.tags.some((t) => t.toLowerCase().includes(q)));

      return matchesCategory && matchesSearch;
    });
  }, [initialBlogs, selectedCategory, searchQuery]);

  // Featured post: first featured post, or first post overall
  const featuredBlog = useMemo(() => {
    return initialBlogs.find((b) => b.featured) || initialBlogs[0];
  }, [initialBlogs]);

  // Other posts for the grid
  const gridBlogs = useMemo(() => {
    if (!searchQuery && selectedCategory === "All" && featuredBlog) {
      return filteredBlogs.filter((b) => b.slug !== featuredBlog.slug);
    }
    return filteredBlogs;
  }, [filteredBlogs, featuredBlog, searchQuery, selectedCategory]);

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
    <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-12">
      {/* Search & Category Filter Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 mb-12 pb-8 border-b border-gray-200/80">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all whitespace-nowrap ${
                selectedCategory.toLowerCase() === cat.toLowerCase()
                  ? "bg-[#245171] text-white shadow-md shadow-[#245171]/20 scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[280px] md:min-w-[320px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search articles, topics, keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#245171] focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Featured Banner (Shown when no search/category filter is active) */}
      {!searchQuery && selectedCategory === "All" && featuredBlog && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 rounded-3xl overflow-hidden bg-[#111] text-white shadow-2xl relative group grid grid-cols-1 lg:grid-cols-12 min-h-[460px]"
        >
          {/* Cover Image */}
          <div className="relative lg:col-span-7 h-72 sm:h-80 lg:h-auto overflow-hidden">
            <Image
              src={featuredBlog.coverImage}
              alt={featuredBlog.title}
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <span className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-[#245171] text-white text-xs font-semibold uppercase tracking-wider shadow-lg">
              Featured Story
            </span>
          </div>

          {/* Content */}
          <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between bg-gradient-to-b from-[#18232c] to-[#0f171e]">
            <div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#d6aa5d] font-semibold mb-4">
                <span>{featuredBlog.category}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {featuredBlog.readingTime}
                </span>
              </div>

              <Link href={`/blog/${featuredBlog.slug}`}>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white group-hover:text-[#fff2c7] transition-colors mb-4">
                  {featuredBlog.title}
                </h2>
              </Link>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed line-clamp-3 mb-6">
                {featuredBlog.excerpt}
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white">{featuredBlog.author.name}</p>
                <p className="text-xs text-gray-400">{formatDate(featuredBlog.createdAt)}</p>
              </div>

              <Link
                href={`/blog/${featuredBlog.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#111] hover:bg-[#fff2c7] font-semibold text-xs tracking-wider uppercase transition-all shadow-md group-hover:gap-3"
              >
                <span>Read Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      )}

      {/* Blog Cards Grid */}
      {gridBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {gridBlogs.map((blog, idx) => (
              <motion.article
                key={blog._id || blog.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <Link href={`/blog/${blog.slug}`} className="relative aspect-[16/10] overflow-hidden bg-gray-100 block">
                  <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold uppercase tracking-wider">
                    {blog.category}
                  </span>
                </Link>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3 font-medium">
                      <span>{formatDate(blog.createdAt)}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-gray-400" />
                        {blog.readingTime}
                      </span>
                    </div>

                    <Link href={`/blog/${blog.slug}`}>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#245171] transition-colors leading-snug mb-3 line-clamp-2">
                        {blog.title}
                      </h3>
                    </Link>

                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                      {blog.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                    <div className="text-xs">
                      <span className="font-semibold text-gray-900 block">{blog.author.name}</span>
                      {blog.author.role && (
                        <span className="text-gray-400 text-[11px] block">{blog.author.role}</span>
                      )}
                    </div>

                    <Link
                      href={`/blog/${blog.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#245171] group-hover:translate-x-1 transition-transform"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        /* Empty State */
        <div className="py-24 text-center">
          <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">No articles found</h3>
          <p className="text-gray-500 max-w-md mx-auto text-sm mb-6">
            We couldn&apos;t find any articles matching &ldquo;{searchQuery}&rdquo; in {selectedCategory}. Try resetting your search filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="px-6 py-2.5 rounded-full bg-[#245171] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1c415b] transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
