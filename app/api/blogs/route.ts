export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
import Blog from '@/models/Blog';
import { defaultBlogs } from '@/data/defaultBlogs';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    await dbConnect();

    // Query DB for published blogs
    const query: Record<string, unknown> = { isPublished: true };

    if (category && category !== 'All') {
      query.category = { $regex: new RegExp(`^${category}$`, 'i') };
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { excerpt: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } },
      ];
    }

    const blogs = await Blog.find(query).sort({ createdAt: -1 }).lean();

    // If database is empty or has no published blogs yet, supply default seeded blogs
    if (!blogs || blogs.length === 0) {
      let fallback = defaultBlogs.filter((b) => b.isPublished);

      if (category && category !== 'All') {
        fallback = fallback.filter((b) => b.category.toLowerCase() === category.toLowerCase());
      }

      if (search) {
        const s = search.toLowerCase();
        fallback = fallback.filter(
          (b) =>
            b.title.toLowerCase().includes(s) ||
            b.excerpt.toLowerCase().includes(s) ||
            b.tags.some((t) => t.toLowerCase().includes(s))
        );
      }

      return NextResponse.json({ success: true, data: fallback, count: fallback.length }, { status: 200 });
    }

    return NextResponse.json({ success: true, data: blogs, count: blogs.length }, { status: 200 });
  } catch (error: unknown) {
    console.error('Error fetching blogs:', error);
    // Fallback gracefully to default blogs if DB connection issue arises
    return NextResponse.json({ success: true, data: defaultBlogs, count: defaultBlogs.length }, { status: 200 });
  }
}
