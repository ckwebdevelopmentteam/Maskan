import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
import Career from '@/models/Career';
import { verifyAuth } from '@/utils/auth';

export async function GET(req: NextRequest) {
  try {
    const auth = verifyAuth(req);
    if (auth.error) {
      return NextResponse.json({ success: false, error: auth.error }, { status: auth.status });
    }

    await dbConnect();
    const careers = await Career.find({})
      .populate('category', 'name')
      .populate('location', 'name')
      .sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: careers }, { status: 200 });
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
    const career = await Career.create(body);
    return NextResponse.json({ success: true, data: career }, { status: 201 });
  } catch (error: unknown) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
  }
}
