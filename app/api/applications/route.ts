import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
import Application from '@/models/Application';
import { verifyAuth } from '@/utils/auth';

// Public route to submit an application
export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    
    // Create application in DB
    const application = await Application.create(body);
    
    return NextResponse.json({ success: true, data: application }, { status: 201 });
  } catch (error: unknown) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
  }
}

// Protected route to fetch applications
export async function GET(req: NextRequest) {
  try {
    const auth = verifyAuth(req);
    if (auth.error) {
      return NextResponse.json({ success: false, error: auth.error }, { status: auth.status });
    }

    await dbConnect();
    const applications = await Application.find({}).select('-resumeData').sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: applications }, { status: 200 });
  } catch (error: unknown) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
