export const mockDashboardStats = {
  totalPatients: 14502,
  totalDoctors: 124,
  appointmentsToday: 89,
  bedOccupancy: 82, // Percentage
  icuPatients: 14,
  emergencyCases: 26,
  revenueAnalytics: 450000,
  revenueGrowth: 12.5,
  medicineStockAlerts: 8,
};

export const mockRevenueData = [
  { name: 'Mon', revenue: 4000, expenses: 2400 },
  { name: 'Tue', revenue: 3000, expenses: 1398 },
  { name: 'Wed', revenue: 2000, expenses: 9800 },
  { name: 'Thu', revenue: 2780, expenses: 3908 },
  { name: 'Fri', revenue: 1890, expenses: 4800 },
  { name: 'Sat', revenue: 2390, expenses: 3800 },
  { name: 'Sun', revenue: 3490, expenses: 4300 },
];

export const mockPatientGrowth = [
  { name: 'Jan', patients: 400 },
  { name: 'Feb', patients: 300 },
  { name: 'Mar', patients: 500 },
  { name: 'Apr', patients: 450 },
  { name: 'May', patients: 600 },
  { name: 'Jun', patients: 550 },
];

export const mockGenderRatio = [
  { name: 'Male', value: 45 },
  { name: 'Female', value: 52 },
  { name: 'Other', value: 3 },
];

export const mockPatientsList = [
  { id: 'PT-1001', name: 'John Doe', age: 45, gender: 'Male', bloodGroup: 'O+', disease: 'Hypertension', admissionDate: '2023-10-12', status: 'Admitted' },
  { id: 'PT-1002', name: 'Sarah Smith', age: 32, gender: 'Female', bloodGroup: 'A-', disease: 'Fever', admissionDate: '2023-10-15', status: 'Discharged' },
  { id: 'PT-1003', name: 'Michael Johnson', age: 58, gender: 'Male', bloodGroup: 'B+', disease: 'Diabetes', admissionDate: '2023-10-16', status: 'Admitted' },
  { id: 'PT-1004', name: 'Emily Davis', age: 29, gender: 'Female', bloodGroup: 'O-', disease: 'Migraine', admissionDate: '2023-10-18', status: 'Admitted' },
  { id: 'PT-1005', name: 'Robert Wilson', age: 65, gender: 'Male', bloodGroup: 'AB+', disease: 'Cardiac Arrhythmia', admissionDate: '2023-10-10', status: 'ICU' },
];

export const mockAppointmentsList = [
  { id: 'APT-501', patientName: 'John Doe', doctorName: 'Dr. Alice Carter', department: 'Cardiology', date: '2023-10-25', time: '10:00 AM', status: 'Completed' },
  { id: 'APT-502', patientName: 'Sarah Smith', doctorName: 'Dr. Bob Williams', department: 'General Medicine', date: '2023-10-26', time: '14:30 PM', status: 'Upcoming' },
  { id: 'APT-503', patientName: 'Mike Johnson', doctorName: 'Dr. Charlie Davis', department: 'Orthopedics', date: '2023-10-26', time: '09:15 AM', status: 'Upcoming' },
  { id: 'APT-504', patientName: 'Emily Davis', doctorName: 'Dr. Diana Prince', department: 'Neurology', date: '2023-10-27', time: '11:00 AM', status: 'Upcoming' },
];
