import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
import Application from '@/models/Application';

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    // You can uncomment auth verification if you only want admins to see resumes
    // const auth = verifyAuth(req);
    // if (auth.error) {
    //   return NextResponse.json({ success: false, error: auth.error }, { status: auth.status });
    // }

    await dbConnect();
    const resolvedParams = await params;
    const id = resolvedParams.id;

    const app = await Application.findById(id).select('resumeData resumeName');
    
    if (!app || !app.resumeData) {
      return new NextResponse('Resume not found', { status: 404 });
    }

    // resumeData is expected to be a data URL like: data:application/pdf;base64,JVBER...
    const base64Data = app.resumeData.includes(',') ? app.resumeData.split(',')[1] : app.resumeData;
    const buffer = Buffer.from(base64Data, 'base64');

    let contentType = 'application/pdf';
    if (app.resumeData.startsWith('data:')) {
      contentType = app.resumeData.split(';')[0].split(':')[1];
    }

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `inline; filename="${app.resumeName || 'resume.pdf'}"`,
      },
    });
  } catch (error: unknown) {
    return new NextResponse((error as Error).message, { status: 500 });
  }
}
