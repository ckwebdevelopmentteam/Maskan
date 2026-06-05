import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
import Career from '@/models/Career';
import { verifyAuth } from '@/utils/auth';

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const auth = verifyAuth(req);
    if (auth.error) {
      return NextResponse.json({ success: false, error: auth.error }, { status: auth.status });
    }

    await dbConnect();
    const { id } = await params;
    const career = await Career.findById(id).populate('category', 'name').populate('location', 'name');

    if (!career) {
      return NextResponse.json({ success: false, error: 'Career not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: career }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const auth = verifyAuth(req);
    if (auth.error) {
      return NextResponse.json({ success: false, error: auth.error }, { status: auth.status });
    }

    await dbConnect();
    const { id } = await params;
    const body = await req.json();

    const career = await Career.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!career) {
      return NextResponse.json({ success: false, error: 'Career not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: career }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const auth = verifyAuth(req);
    if (auth.error) {
      return NextResponse.json({ success: false, error: auth.error }, { status: auth.status });
    }

    await dbConnect();
    const { id } = await params;
    const career = await Career.findByIdAndDelete(id);

    if (!career) {
      return NextResponse.json({ success: false, error: 'Career not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: {} }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
