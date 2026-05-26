import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { mockDashboardStats, mockRevenueData } from '@/constants/mockData';

export async function GET() {
  try {
    const db = await connectDB();
    
    if (!db) {
      // Fallback to mock data if MongoDB is not connected
      return NextResponse.json({
        success: true,
        data: {
          stats: mockDashboardStats,
          charts: mockRevenueData
        }
      });
    }

    // In a fully deployed real application, you'd aggregate real models here:
    // const totalPatients = await Patient.countDocuments();
    // const totalDoctors = await Doctor.countDocuments();
    // const appointmentsToday = await Appointment.countDocuments({ date: { $gte: startOfDay, $lt: endOfDay } });
    
    // For now returning mock data even if DB is connected just as placeholder structure
    return NextResponse.json({
      success: true,
      data: {
        stats: mockDashboardStats,
        charts: mockRevenueData
      }
    });

  } catch (error: any) {
    console.error("Dashboard API Error:", error);
    return NextResponse.json({ success: false, error: 'Server Error' }, { status: 500 });
  }
}

