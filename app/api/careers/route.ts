import { NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
import Career from '@/models/Career';

export async function GET() {
  try {
    await dbConnect();
    const careers = await Career.find({ isActive: true })
      .populate('category', 'name')
      .populate('location', 'name')
      .sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: careers }, { status: 200 });
  } catch (error: unknown) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
