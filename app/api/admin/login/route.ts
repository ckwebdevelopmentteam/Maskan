import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
import Admin from '@/models/Admin';
import { signToken } from '@/utils/auth';

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

    const admin = await Admin.findOne({ username }).select('+password');

    if (!admin) {
      return NextResponse.json(
        { success: false, error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const isMatch = await admin.matchPassword(password);

    if (!isMatch) {
      return NextResponse.json(
        { success: false, error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const token = signToken(admin._id.toString());

    return NextResponse.json(
      { success: true, token },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
