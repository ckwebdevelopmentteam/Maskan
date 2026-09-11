export const revalidate = 60;

import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Share2, Tag, ArrowRight } from "lucide-react";
import NavBar from "@/components/Client/NavBar";
import Footer from "@/sections/Footer/Server";
import CTA from "@/sections/CTA";
import dbConnect from "@/utils/dbConnect";
import Blog from "@/models/Blog";
import { defaultBlogs, DefaultBlogPost } from "@/data/defaultBlogs";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

async function getBlogBySlug(slug: string): Promise<DefaultBlogPost | null> {
  const cleanSlug = decodeURIComponent(slug).toLowerCase().trim();

  try {
    await dbConnect();
    const blog = await Blog.findOne({ slug: cleanSlug, isPublished: true }).lean();

    if (blog) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const b = blog as any;
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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return related.map((b: any) => ({
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

  const relatedBlogs = await getRelatedBlogs(blog.slug, blog.category);

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
    <main className="bg-[#FFFFFF] text-[#3B4D5C] min-h-screen relative font-sans selection:bg-[#244b6b] selection:text-white">
      {/* NavBar */}
      <NavBar />

      {/* Article Header */}
      <article className="w-full pt-36 md:pt-44 pb-20">
        <div className="w-full max-w-[1000px] mx-auto px-6 md:px-12">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#245171] font-bold hover:gap-3 transition-all mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all stories</span>
          </Link>

          {/* Meta bar */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-wider text-gray-500 mb-6">
            <span className="px-3.5 py-1 rounded-full bg-[#245171] text-white">
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
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
            {blog.title}
          </h1>

          {/* Excerpt */}
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light mb-10 pb-8 border-b border-gray-100">
            {blog.excerpt}
          </p>

          {/* Author info */}
          <div className="flex items-center justify-between gap-4 mb-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#245171] text-white font-bold flex items-center justify-center text-sm shadow-md">
                {blog.author.name.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">{blog.author.name}</p>
                <p className="text-xs text-gray-500">{blog.author.role || "Maskan Editorial"}</p>
              </div>
            </div>

            {/* Share link */}
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`${blog.title} - Read more on Maskan Builders`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold tracking-wider transition-colors"
              title="Share on WhatsApp"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Share</span>
            </a>
          </div>

          {/* Featured Cover Image */}
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl mb-14 bg-gray-100">
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
          <div className="w-full prose prose-lg max-w-none text-gray-800">
            {renderFormattedContent(blog.content)}
          </div>

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-14 pt-8 border-t border-gray-200 flex flex-wrap items-center gap-2">
              <Tag className="w-4 h-4 text-gray-400 mr-2" />
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-full bg-gray-100 text-gray-600 text-xs font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>

      {/* Related Stories Section */}
      {relatedBlogs.length > 0 && (
        <section className="w-full bg-[#f8f9fa] py-20 border-t border-gray-200/80">
          <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="flex items-center justify-between mb-12">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#245171] font-bold block mb-2">
                  Continue Reading
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Related Architecture Stories
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden md:inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#245171] hover:gap-3 transition-all"
              >
                <span>View all stories</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedBlogs.map((related) => (
                <article
                  key={related.slug}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <Link href={`/blog/${related.slug}`} className="relative aspect-[16/10] block overflow-hidden">
                    <Image
                      src={related.coverImage}
                      alt={related.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold uppercase tracking-wider">
                      {related.category}
                    </span>
                  </Link>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs text-gray-400 block mb-2">{formatDate(related.createdAt)}</span>
                      <Link href={`/blog/${related.slug}`}>
                        <h3 className="text-lg font-bold text-gray-900 hover:text-[#245171] transition-colors line-clamp-2 mb-3">
                          {related.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">{related.excerpt}</p>
                    </div>

                    <Link
                      href={`/blog/${related.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#245171] mt-auto"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
