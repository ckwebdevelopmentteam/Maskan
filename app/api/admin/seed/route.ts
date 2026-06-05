export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
import Admin from '@/models/Admin';

// Note: This route should ideally be protected or removed in production after initial setup
export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: 'Please provide username and password' },
        { status: 400 }
      );
    }

    const adminExists = await Admin.findOne({ username });

    if (adminExists) {
      return NextResponse.json(
        { success: false, error: 'Admin already exists' },
        { status: 400 }
      );
    }

    const admin = await Admin.create({
      username,
      password,
    });

    return NextResponse.json(
      { success: true, data: { _id: admin._id, username: admin.username } },
      { status: 201 }
    );
  } catch (error: unknown) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

