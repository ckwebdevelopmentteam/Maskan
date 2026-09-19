export const revalidate = 60;

import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Share2, Tag } from "lucide-react";
import NavBar from "@/components/Client/NavBar";
import Footer from "@/sections/Footer/Server";
import CTA from "@/sections/CTA";
import dbConnect from "@/utils/dbConnect";
import Blog from "@/models/Blog";
import { defaultBlogs, DefaultBlogPost } from "@/data/defaultBlogs";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

type SanityImageValue = {
  asset?: unknown;
  _ref?: string;
  alt?: string;
};

type SanityAuthor = {
  name?: string;
  image?: SanityImageValue;
};

type SanityBlogPost = {
  _id: string;
  title?: string;
  slug?: string;
  excerpt?: string;
  body?: DefaultBlogPost["content"];
  mainImage?: SanityImageValue;
  category?: string;
  author?: SanityAuthor;
  readingTime?: string;
  publishedAt?: string;
  _createdAt?: string;
};

type DbBlogPost = {
  _id: { toString(): string };
  title: string;
  slug: string;
  excerpt: string;
  content: DefaultBlogPost["content"];
  coverImage: string;
  category: string;
  author?: {
    name?: string;
    role?: string;
    avatar?: string;
  };
  readingTime?: string;
  tags?: string[];
  isPublished: boolean;
  featured?: boolean;
  createdAt?: string | Date;
};

async function getBlogBySlug(slug: string): Promise<DefaultBlogPost | null> {
  const cleanSlug = decodeURIComponent(slug).toLowerCase().trim();

  if (cleanSlug === "how-to-choose-the-best-builders-in-kerala-2026") {
    return {
      _id: "dummy-blog-0",
      title: "How to Choose the Best Builders in Kerala for Your Dream Home in 2026",
      slug: cleanSlug,
      excerpt: "A practical guide to finding a reliable Kerala builder who understands quality, climate, design, and the way you want to live.",
      content: `
Choosing the right builder is one of the most important decisions you will make when creating a home. The right team brings together design thinking, technical knowledge, clear communication, and dependable execution.

## Start with experience that fits your project

Look for a builder who has completed projects similar to yours and understands the character of Kerala. A good portfolio should show thoughtful planning, durable materials, and homes that respond to local light, rain, and heat.

## Ask about the complete process

The best builders explain each stage clearly, from the first consultation and design coordination to approvals, construction, finishes, and handover. Clear milestones and regular updates make the journey easier to trust.

## Choose quality over shortcuts

Materials, site supervision, workmanship, and aftercare all shape the long-term value of a home. Ask how the team manages quality on site and how they handle changes when the project develops.

## Build with confidence

Your builder should listen carefully, answer honestly, and help turn your priorities into a home that feels considered from the first sketch to the final detail. At Maskan, we bring design and execution together to make that process feel clear and personal.
      `.trim(),
      coverImage: "/projects/blog1-detail.png",
      category: "Home Building",
      author: { name: "Maskan Editorial Team", role: "Architectural Advisory", avatar: "" },
      readingTime: "6 min read",
      tags: ["Home Building", "Kerala", "Construction"],
      isPublished: true,
      featured: true,
      createdAt: new Date().toISOString(),
    };
  }

  // Try Sanity first
  try {
    const sanityPost = await client.fetch<SanityBlogPost | null>(
      `*[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        "slug": slug.current,
        excerpt,
        body,
        mainImage,
        "category": coalesce(categories[0]->title, "Journal"),
        "author": author->{ name, image },
        readingTime,
        publishedAt,
        _createdAt
      }`,
      { slug: cleanSlug }
    );

    if (sanityPost) {
      return {
        _id: sanityPost._id,
        title: sanityPost.title || "Untitled Post",
        slug: sanityPost.slug || cleanSlug,
        excerpt: sanityPost.excerpt || "",
        content: sanityPost.body || "",
        coverImage: urlForImage(sanityPost.mainImage) || "/projects/project-1.webp",
        category: sanityPost.category || "Journal",
        author: {
          name: sanityPost.author?.name || "Maskan Editorial Team",
          role: "Architectural Advisory",
          avatar: urlForImage(sanityPost.author?.image) || "",
        },
        readingTime: sanityPost.readingTime || "5 min read",
        tags: [sanityPost.category || "Journal"],
        isPublished: true,
        featured: false,
        createdAt: sanityPost.publishedAt || sanityPost._createdAt || new Date().toISOString(),
      };
    }
  } catch (error) {
    console.error("Error finding blog by slug from Sanity:", error);
  }

  try {
    await dbConnect();
    const blog = await Blog.findOne({ slug: cleanSlug, isPublished: true }).lean();

    if (blog) {
      const b = blog as DbBlogPost;
      return {
        _id: b._id.toString(),
        title: b.title,
        slug: b.slug,
        excerpt: b.excerpt,
        content: b.content,
        coverImage: b.coverImage,
        category: b.category,
        author: {
          name: b.author?.name || "Maskan Editorial Team",
          role: b.author?.role || "Architectural Advisory",
          avatar: b.author?.avatar || "",
        },
        readingTime: b.readingTime || "5 min read",
        tags: b.tags || [],
        isPublished: b.isPublished,
        featured: Boolean(b.featured),
        createdAt: b.createdAt ? new Date(b.createdAt).toISOString() : new Date().toISOString(),
      };
    }
  } catch (error) {
    console.error("Error finding blog by slug from DB:", error);
  }

  // Fallback check
  const fallback = defaultBlogs.find((b) => b.slug.toLowerCase() === cleanSlug);
  return fallback || null;
}

async function getRelatedBlogs(currentSlug: string, category: string): Promise<DefaultBlogPost[]> {
  // Try Sanity
  try {
    const sanityRelated = await client.fetch<SanityBlogPost[]>(
      `*[_type == "post" && slug.current != $slug] | order(publishedAt desc, _createdAt desc)[0...3] {
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
      }`,
      { slug: currentSlug }
    );

    if (sanityRelated && sanityRelated.length > 0) {
      return sanityRelated.map((p) => ({
        _id: p._id,
        title: p.title || "Untitled Post",
        slug: p.slug || p._id,
        excerpt: p.excerpt || "",
        content: "",
        coverImage: urlForImage(p.mainImage) || "/projects/project-1.webp",
        category: p.category || "Journal",
        author: {
          name: p.author?.name || "Maskan Editorial Team",
          role: "Architectural Advisory",
          avatar: urlForImage(p.author?.image) || "",
        },
        readingTime: p.readingTime || "5 min read",
        tags: [p.category || "Journal"],
        isPublished: true,
        featured: false,
        createdAt: p.publishedAt || p._createdAt || new Date().toISOString(),
      }));
    }
  } catch (error) {
    console.error("Error fetching related posts from Sanity:", error);
  }

  try {
    await dbConnect();
    const related = await Blog.find({
      isPublished: true,
      slug: { $ne: currentSlug },
      category: { $regex: new RegExp(`^${category}$`, 'i') }
    })
      .limit(3)
      .lean();

    if (related && related.length > 0) {
      return (related as DbBlogPost[]).map((b) => ({
        _id: b._id.toString(),
        title: b.title,
        slug: b.slug,
        excerpt: b.excerpt,
        content: b.content,
        coverImage: b.coverImage,
        category: b.category,
        author: {
          name: b.author?.name || "Maskan Editorial Team",
          role: b.author?.role || "Architectural Advisory",
          avatar: b.author?.avatar || "",
        },
        readingTime: b.readingTime || "5 min read",
        tags: b.tags || [],
        isPublished: b.isPublished,
        featured: Boolean(b.featured),
        createdAt: b.createdAt ? new Date(b.createdAt).toISOString() : new Date().toISOString(),
      }));
    }
  } catch (e) {
    console.error("Error fetching related blogs:", e);
  }

  return defaultBlogs.filter((b) => b.slug !== currentSlug).slice(0, 3);
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Article Not Found | Maskan Builders",
    };
  }

  return {
    title: `${blog.title} | Maskan Journal`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [blog.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  await getRelatedBlogs(blog.slug, blog.category);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return "Recent";
    }
  };

  // Helper to render content with markdown-like sections
  const renderFormattedContent = (content: string) => {
    const lines = content.split("\n");
    const elements: React.ReactNode[] = [];
    let paragraphBuffer: string[] = [];

    const flushParagraph = () => {
      if (paragraphBuffer.length > 0) {
        const text = paragraphBuffer.join(" ").trim();
        if (text) {
          elements.push(
            <p key={`p-${elements.length}`} className="text-gray-700 text-lg leading-relaxed mb-6 font-normal">
              {text}
            </p>
          );
        }
        paragraphBuffer = [];
      }
    };

    lines.forEach((rawLine, index) => {
      const line = rawLine.trim();

      if (!line) {
        flushParagraph();
        return;
      }

      if (line.startsWith("### ")) {
        flushParagraph();
        elements.push(
          <h3 key={`h3-${index}`} className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4 tracking-tight">
            {line.replace("### ", "")}
          </h3>
        );
      } else if (line.startsWith("## ")) {
        flushParagraph();
        elements.push(
          <h2 key={`h2-${index}`} className="text-3xl md:text-4xl font-bold text-gray-900 mt-12 mb-5 tracking-tight">
            {line.replace("## ", "")}
          </h2>
        );
      } else if (line.startsWith("> ")) {
        flushParagraph();
        elements.push(
          <blockquote
            key={`quote-${index}`}
            className="my-8 p-6 md:p-8 bg-[#f5f8fa] border-l-4 border-[#245171] rounded-r-2xl italic text-gray-800 text-lg md:text-xl font-medium"
          >
            {line.replace("> ", "").replace(/^"|"$/g, "")}
          </blockquote>
        );
      } else if (line.startsWith("- ")) {
        flushParagraph();
        const bulletText = line.replace("- ", "");
        const parts = bulletText.split(":");
        if (parts.length > 1) {
          elements.push(
            <li key={`li-${index}`} className="text-gray-700 text-base md:text-lg leading-relaxed mb-3 list-none flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#245171] mt-2.5 shrink-0" />
              <span>
                <strong className="text-gray-900 font-semibold">{parts[0].replace(/\*\*/g, "")}:</strong>
                {parts.slice(1).join(":")}
              </span>
            </li>
          );
        } else {
          elements.push(
            <li key={`li-${index}`} className="text-gray-700 text-base md:text-lg leading-relaxed mb-3 list-none flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-[#245171] mt-2.5 shrink-0" />
              <span>{bulletText.replace(/\*\*/g, "")}</span>
            </li>
          );
        }
      } else if (/^\d+\.\s/.test(line)) {
        flushParagraph();
        elements.push(
          <div key={`num-${index}`} className="text-gray-700 text-base md:text-lg leading-relaxed mb-3 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-[#245171]/10 text-[#245171] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              {line.match(/^\d+/)?.[0]}
            </span>
            <span>{line.replace(/^\d+\.\s/, "")}</span>
          </div>
        );
      } else {
        paragraphBuffer.push(line);
      }
    });

    flushParagraph();
    return elements;
  };

  return (
    <main className="min-h-screen relative bg-[#f7f4f1] font-sans text-[#251a23] selection:bg-[#e36f2d] selection:text-white">
      {/* NavBar */}
      <NavBar />

      {/* Article Header */}
      <article className="w-full pb-20 pt-36 md:pt-44">
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12">
          {/* Back link */}
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e36f2d] transition-all hover:gap-3"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all stories</span>
          </Link>

          {/* Meta bar */}
          <div className="mb-6 flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-wider text-[#8d8181]">
            <span className="border-b border-[#e36f2d] pb-1 text-[#e36f2d]">
              {blog.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-gray-400" />
              {formatDate(blog.createdAt)}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-gray-400" />
              {blog.readingTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-6 max-w-[1000px] text-4xl font-medium leading-[0.98] tracking-[-0.055em] text-[#251a23] sm:text-6xl md:text-7xl">
            {blog.title}
          </h1>

          {/* Excerpt */}
          <p className="mb-10 max-w-[720px] border-b border-[#ded7d2] pb-8 text-lg font-light leading-relaxed text-[#766d70] md:text-xl">
            {blog.excerpt}
          </p>

          {/* Author info */}
          <div className="mb-10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#24151f] text-sm font-bold text-white shadow-md">
                {blog.author.name.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <p className="text-sm font-bold text-[#251a23]">{blog.author.name}</p>
                <p className="text-xs text-[#8d8181]">{blog.author.role || "Maskan Editorial"}</p>
              </div>
            </div>

            {/* Share link */}
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`${blog.title} - Read more on Maskan Builders`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#cfc4bd] px-4 py-2 text-xs font-semibold tracking-wider text-[#251a23] transition-colors hover:bg-[#ece5df]"
              title="Share on WhatsApp"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Share</span>
            </a>
          </div>

          {/* Featured Cover Image */}
          <div className="relative mb-14 aspect-[1.38/1] w-full overflow-hidden bg-[#d9d0ca] shadow-2xl">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 1000px, 100vw"
            />
          </div>

          {/* Article Body Content */}
          <div className="prose prose-lg mx-auto w-full max-w-[860px] text-[#3b3034]">
            {Array.isArray(blog.content) ? (
              <PortableText
                value={blog.content}
                components={{
                  types: {
                    image: ({ value }: { value: SanityImageValue }) => {
                      const imgUrl = urlForImage(value);
                      if (!imgUrl) return null;
                      return (
                        <figure className="my-8">
                          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-md">
                            <Image
                              src={imgUrl}
                              alt={value.alt || "Article illustration"}
                              fill
                              className="object-cover"
                              sizes="(max-width: 1000px) 100vw, 1000px"
                            />
                          </div>
                          {value.alt && (
                            <figcaption className="mt-2 text-center text-xs text-gray-500 italic">
                              {value.alt}
                            </figcaption>
                          )}
                        </figure>
                      );
                    },
                  },
                }}
              />
            ) : (
              renderFormattedContent(typeof blog.content === "string" ? blog.content : "")
            )}
          </div>

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-14 flex flex-wrap items-center gap-2 border-t border-[#ded7d2] pt-8">
              <Tag className="mr-2 h-4 w-4 text-[#e36f2d]" />
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-[#cfc4bd] px-3.5 py-1.5 text-xs font-medium text-[#766d70]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
