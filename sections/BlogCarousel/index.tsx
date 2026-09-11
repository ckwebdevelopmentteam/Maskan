import React from "react";
import dbConnect from "@/utils/dbConnect";
import Blog from "@/models/Blog";
import { defaultBlogs } from "@/data/defaultBlogs";
import BlogCarouselClient, { BlogCarouselItem } from "./Client";

async function getCarouselBlogs(): Promise<BlogCarouselItem[]> {
  try {
    await dbConnect();
    const blogs = await Blog.find({ isPublished: true })
      .sort({ createdAt: -1 })
      .limit(8)
      .lean();

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
          name: b.author?.name || "Maskan Team",
          role: b.author?.role || "Architectural Advisory",
          avatar: b.author?.avatar || "",
        },
        readingTime: b.readingTime || "4 min read",
        createdAt: b.createdAt ? new Date(b.createdAt).toISOString() : new Date().toISOString(),
      }));
    }
  } catch (error) {
    console.error("Error fetching blogs for carousel:", error);
  }

  return defaultBlogs.map((b) => ({
    _id: b._id,
    title: b.title,
    slug: b.slug,
    excerpt: b.excerpt,
    coverImage: b.coverImage,
    category: b.category,
    author: b.author,
    readingTime: b.readingTime,
    createdAt: b.createdAt,
  }));
}

export default async function BlogCarousel() {
  const blogs = await getCarouselBlogs();
  return <BlogCarouselClient blogs={blogs} />;
}
