export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
import Blog from '@/models/Blog';
import { verifyAuth } from '@/utils/auth';

function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}

export async function GET(req: NextRequest) {
  try {
    const auth = verifyAuth(req);
    if (auth.error) {
      return NextResponse.json({ success: false, error: auth.error }, { status: auth.status });
    }

    await dbConnect();
    const blogs = await Blog.find({}).sort({ createdAt: -1 }).lean();
    return NextResponse.json({ success: true, data: blogs }, { status: 200 });
  } catch (error: unknown) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const auth = verifyAuth(req);
    if (auth.error) {
      return NextResponse.json({ success: false, error: auth.error }, { status: auth.status });
    }

    await dbConnect();
    const body = await req.json();

    if (!body.title || !body.excerpt || !body.content || !body.coverImage) {
      return NextResponse.json(
        { success: false, error: 'Please provide title, excerpt, content, and cover image' },
        { status: 400 }
      );
    }

    // Generate or clean slug
    let slug = body.slug ? slugify(body.slug) : slugify(body.title);
    
    // Ensure slug is unique
    const existing = await Blog.findOne({ slug });
    if (existing) {
      slug = `${slug}-${Date.now().toString().slice(-4)}`;
    }

    // Estimate reading time if not provided
    const words = body.content.trim().split(/\s+/).length;
    const readingTime = body.readingTime || `${Math.max(1, Math.ceil(words / 200))} min read`;

    const blog = await Blog.create({
      ...body,
      slug,
      readingTime,
      tags: Array.isArray(body.tags)
        ? body.tags
        : typeof body.tags === 'string'
        ? body.tags.split(',').map((t: string) => t.trim()).filter(Boolean)
        : [],
    });

    return NextResponse.json({ success: true, data: blog }, { status: 201 });
  } catch (error: unknown) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
  }
}
