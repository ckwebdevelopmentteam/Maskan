export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
import Blog from '@/models/Blog';
import { defaultBlogs } from '@/data/defaultBlogs';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    if (!slug) {
      return NextResponse.json({ success: false, error: 'Slug parameter is required' }, { status: 400 });
    }

    const cleanSlug = decodeURIComponent(slug).toLowerCase().trim();

    await dbConnect();
    const blog = await Blog.findOne({ slug: cleanSlug, isPublished: true }).lean();

    if (blog) {
      return NextResponse.json({ success: true, data: blog }, { status: 200 });
    }

    // Check fallback default blogs
    const fallback = defaultBlogs.find((b) => b.slug.toLowerCase() === cleanSlug);
    if (fallback) {
      return NextResponse.json({ success: true, data: fallback }, { status: 200 });
    }

    return NextResponse.json({ success: false, error: 'Blog post not found' }, { status: 404 });
  } catch (error: unknown) {
    console.error('Error fetching blog post by slug:', error);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
