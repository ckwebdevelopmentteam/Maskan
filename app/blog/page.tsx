export const revalidate = 60;

import React from "react";
import type { Metadata } from "next";
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

import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

const getBlogTimestamp = (value?: string | Date) => {
  if (!value) return 0;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? 0 : date.getTime();
};

type SanityImageValue = {
  asset?: unknown;
  _ref?: string;
};

type SanityBlogPost = {
  _id: string;
  title?: string;
  slug?: string;
  excerpt?: string;
  mainImage?: SanityImageValue;
  category?: string;
  author?: {
    name?: string;
    image?: SanityImageValue;
  };
  readingTime?: string;
  publishedAt?: string;
  _createdAt?: string;
};

type DbBlogPost = {
  _id: { toString(): string };
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  cardImage?: string;
  category: string;
  author?: {
    name?: string;
    role?: string;
    avatar?: string;
  };
  readingTime?: string;
  tags?: string[];
  createdAt?: string | Date;
  featured?: boolean;
};

async function getBlogsData(): Promise<BlogItem[]> {
  const fallbackBlogs: BlogItem[] = defaultBlogs.map((b) => ({
    _id: b._id,
    title: b.title,
    slug: b.slug,
    excerpt: b.excerpt,
    coverImage: b.coverImage,
    cardImage: b.cardImage || b.coverImage,
    category: b.category,
    author: b.author,
    readingTime: b.readingTime,
    tags: b.tags,
    createdAt: b.createdAt,
    featured: b.featured,
  }));

  const sanityPosts: BlogItem[] = [];

  try {
    const posts = await client.fetch<SanityBlogPost[]>(
      `*[_type == "post"] | order(_createdAt desc) {
        _id,
        title,
        "slug": slug.current,
        excerpt,
        mainImage,
        "category": coalesce(categories[0]->title, "Journal"),
        "author": author->{ name, image },
        readingTime,
        publishedAt,
        _createdAt
      }`
    );

    posts.forEach((p, index) => {
      sanityPosts.push({
        _id: p._id,
        title: p.title || "Untitled Post",
        slug: p.slug || p._id,
        excerpt: p.excerpt || "",
        coverImage: urlForImage(p.mainImage) || "/projects/project-1.webp",
        cardImage: urlForImage(p.mainImage) || "/projects/project-1.webp",
        category: p.category || "Journal",
        author: {
          name: p.author?.name || "Maskan Editorial Team",
          role: "Architectural Advisory",
          avatar: urlForImage(p.author?.image) || "",
        },
        readingTime: p.readingTime || "5 min read",
        tags: [p.category || "Journal"],
        createdAt: p._createdAt || p.publishedAt || new Date().toISOString(),
        featured: index === 0,
      });
    });
  } catch (error) {
    console.error("Error fetching Sanity posts for /blog:", error);
  }

  const dbBlogs: BlogItem[] = [];

  try {
    await dbConnect();
    const blogs = await Blog.find({ isPublished: true }).sort({ createdAt: -1 }).lean();

    (blogs as DbBlogPost[]).forEach((b) => {
      dbBlogs.push({
        _id: b._id.toString(),
        title: b.title,
        slug: b.slug,
        excerpt: b.excerpt,
        coverImage: b.coverImage,
        cardImage: b.cardImage || b.coverImage,
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
      });
    });
  } catch (error) {
    console.error("Error fetching blogs from DB, using fallback defaults:", error);
  }

  const sanityPostsSorted = [...sanityPosts].sort(
    (a, b) => getBlogTimestamp(b.createdAt) - getBlogTimestamp(a.createdAt),
  );

  const mergedBlogs = [...sanityPostsSorted, ...dbBlogs, ...fallbackBlogs];

  return mergedBlogs.filter(
    (blog, index, arr) => arr.findIndex((entry) => entry.slug === blog.slug) === index,
  );
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
      {/* Main Blog Listing */}
      <BlogListingClient initialBlogs={blogs} categories={categories} />

      {/* Footer */}
      <Footer />
    </main>
  );
}
