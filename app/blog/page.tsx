export const revalidate = 60;

import React from "react";
import type { Metadata } from "next";
import NavBar from "@/components/Client/NavBar";
import Footer from "@/sections/Footer/Server";
import dbConnect from "@/utils/dbConnect";
import Blog from "@/models/Blog";
import { defaultBlogs } from "@/data/defaultBlogs";
import BlogListingClient, { BlogItem } from "./components/BlogListingClient";

export const metadata: Metadata = {
  title: "Journal & Architectural Insights | Maskan Builders",
  description:
    "Explore perspectives on contemporary architecture, sustainable construction, luxury residential design, and commercial landmark developments in Kerala.",
};

async function getBlogsData(): Promise<BlogItem[]> {
  try {
    await dbConnect();
    const blogs = await Blog.find({ isPublished: true }).sort({ createdAt: -1 }).lean();

    if (blogs && blogs.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return blogs.map((b: any) => ({
        _id: b._id.toString(),
        title: b.title,
        slug: b.slug,
        excerpt: b.excerpt,
        coverImage: b.coverImage,
        category: b.category,
        author: {
          name: b.author?.name || "Maskan Editorial Team",
          role: b.author?.role || "Architectural Advisory",
          avatar: b.author?.avatar || "",
        },
        readingTime: b.readingTime || "5 min read",
        tags: b.tags || [],
        createdAt: b.createdAt ? new Date(b.createdAt).toISOString() : new Date().toISOString(),
        featured: Boolean(b.featured),
      }));
    }
  } catch (error) {
    console.error("Error fetching blogs from DB, using fallback defaults:", error);
  }

  // Fallback defaults
  return defaultBlogs.map((b) => ({
    _id: b._id,
    title: b.title,
    slug: b.slug,
    excerpt: b.excerpt,
    coverImage: b.coverImage,
    category: b.category,
    author: b.author,
    readingTime: b.readingTime,
    tags: b.tags,
    createdAt: b.createdAt,
    featured: b.featured,
  }));
}

export default async function BlogPage() {
  const blogs = await getBlogsData();

  // Extract unique categories
  const categoriesSet = new Set<string>(["All"]);
  blogs.forEach((b) => {
    if (b.category) categoriesSet.add(b.category);
  });
  const categories = Array.from(categoriesSet);

  return (
    <main className="bg-[#FFFFFF] text-[#3B4D5C] min-h-screen relative font-sans selection:bg-[#244b6b] selection:text-white">
      {/* NavBar */}
      <NavBar />

      {/* Main Blog Listing */}
      <BlogListingClient initialBlogs={blogs} categories={categories} />

      {/* Footer */}
      <Footer />
    </main>
  );
}
