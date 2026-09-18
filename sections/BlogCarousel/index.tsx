import React from "react";
import dbConnect from "@/utils/dbConnect";
import Blog from "@/models/Blog";
import { defaultBlogs } from "@/data/defaultBlogs";
import BlogCarouselClient, { BlogCarouselItem } from "./Client";

import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

function getPublicBlogCards(blogs: BlogCarouselItem[]): BlogCarouselItem[] {
  const mergedBlogs = [...blogs, ...defaultBlogs.map((b) => ({
    _id: b._id,
    title: b.title,
    slug: b.slug,
    excerpt: b.excerpt,
    coverImage: b.coverImage,
    category: b.category,
    author: b.author,
    readingTime: b.readingTime,
    createdAt: b.createdAt,
  }))];

  return mergedBlogs
    .filter((blog, index, arr) => arr.findIndex((entry) => entry.slug === blog.slug) === index)
    .slice(0, 8);
}

async function getCarouselBlogs(): Promise<BlogCarouselItem[]> {
  try {
    const sanityPosts = await client.fetch<any[]>(
      `*[_type == "post"] | order(_createdAt desc)[0...8] {
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

    if (sanityPosts && sanityPosts.length > 0) {
      return getPublicBlogCards(sanityPosts.map((p) => ({
        _id: p._id,
        title: p.title || "Untitled Post",
        slug: p.slug || p._id,
        excerpt: p.excerpt || "",
        coverImage: urlForImage(p.mainImage) || "/projects/project-1.webp",
        category: p.category || "Journal",
        author: {
          name: p.author?.name || "Maskan Team",
          role: "Architectural Advisory",
          avatar: urlForImage(p.author?.image) || "",
        },
        readingTime: p.readingTime || "4 min read",
        createdAt: p._createdAt || p.publishedAt || new Date().toISOString(),
      })));
    }
  } catch (error) {
    console.error("Error fetching Sanity posts for carousel:", error);
  }

  try {
    await dbConnect();
    const blogs = await Blog.find({ isPublished: true })
      .sort({ createdAt: -1 })
      .limit(8)
      .lean();

    if (blogs && blogs.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return getPublicBlogCards(blogs.map((b: any) => ({
        _id: b._id.toString(),
        title: b.title,
        slug: b.slug,
        excerpt: b.excerpt,
        coverImage: b.coverImage,
        category: b.category,
        author: {
          name: b.author?.name || "Maskan Team",
          role: b.author?.role || "Architectural Advisory",
          avatar: b.author?.avatar || "",
        },
        readingTime: b.readingTime || "4 min read",
        createdAt: b.createdAt ? new Date(b.createdAt).toISOString() : new Date().toISOString(),
      })));
    }
  } catch (error) {
    console.error("Error fetching blogs for carousel:", error);
  }

  return getPublicBlogCards(defaultBlogs.map((b) => ({
    _id: b._id,
    title: b.title,
    slug: b.slug,
    excerpt: b.excerpt,
    coverImage: b.coverImage,
    category: b.category,
    author: b.author,
    readingTime: b.readingTime,
    createdAt: b.createdAt,
  })));
}

export default async function BlogCarousel() {
  const blogs = await getCarouselBlogs();
  return <BlogCarouselClient blogs={blogs} />;
}
