import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Patient from '@/models/Patient';
import { mockPatientsList } from '@/constants/mockData';

export async function GET() {
  try {
    const db = await connectDB();
    
    // If DB is not connected securely (no URI), fallback to mock data
    if (!db) {
      console.warn("Using mock data for Patients. Configure MONGODB_URI to use real database.");
      return NextResponse.json({ success: true, data: mockPatientsList });
    }

    const patients = await Patient.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: patients });

  } catch (error: any) {
    console.error("Error fetching patients:", error.message);
    return NextResponse.json({ success: false, error: 'Server Error', details: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const db = await connectDB();
    if (!db) {
      return NextResponse.json({ success: false, error: 'Database not connected. Please configure MONGODB_URI.' }, { status: 503 });
    }

    const body = await req.json();
    const patient = await Patient.create(body);

    return NextResponse.json({ success: true, data: patient }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: 'Server Error', details: error.message }, { status: 500 });
  }
}
