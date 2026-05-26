import { Users, UserPlus, Stethoscope, Bed, Activity, TrendingUp } from 'lucide-react';
import { mockDashboardStats, mockAppointmentsList } from '@/constants/mockData';
import { RevenueChart } from '@/components/charts/RevenueChart';

export default async function DashboardPage() {
  // In a real app we'd fetch this from connectDB / MongoDB
  const stats = mockDashboardStats;
  const recentAppointments = mockAppointmentsList;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white">Dashboard Overview</h1>
        <p className="text-gray-400">Welcome back. Here is the hospital status for today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <StatCard title="Total Patients" value={stats.totalPatients} icon={Users} color="bg-blue-500" />
        <StatCard title="Total Doctors" value={stats.totalDoctors} icon={Stethoscope} color="bg-green-500" />
        <StatCard title="Appointments Today" value={stats.appointmentsToday} icon={Activity} color="bg-purple-500" />
        <StatCard title="Bed Occupancy" value={`${stats.bedOccupancy}%`} icon={Bed} color="bg-orange-500" />
        <StatCard title="ICU Patients" value={stats.icuPatients} icon={TrendingUp} color="bg-red-500" />
        <StatCard title="New Admissions" value={stats.emergencyCases} icon={UserPlus} color="bg-teal-500" />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-[#0a0a0a] p-6 rounded-xl border border-zinc-800 shadow-sm">
          <h2 className="text-base font-semibold leading-6 text-white mb-4">Revenue vs Expenses</h2>
          <div className="h-[300px] w-full">
            <RevenueChart />
          </div>
        </div>

        {/* Recent Appointments */}
        <div className="bg-[#0a0a0a] p-6 rounded-xl border border-zinc-800 shadow-sm overflow-hidden flex flex-col">
          <h2 className="text-base font-semibold leading-6 text-white mb-4 tracking-tight">Recent Appointments</h2>
          <div className="flex-1 overflow-y-auto pr-2">
            <div className="space-y-4">
              {recentAppointments.slice(0, 4).map((apt) => (
                <div key={apt.id} className="flex items-center justify-between border-b border-zinc-800 pb-4 last:border-0 last:pb-0">
                  <div>
                    <p className="text-sm font-medium text-white">{apt.patientName}</p>
                    <p className="text-xs text-gray-400">{apt.doctorName} • {apt.department}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-medium text-gray-300">{apt.time}</p>
                    <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                      apt.status === 'Completed' ? 'bg-green-900/30 text-green-400 ring-green-500/20' : 'bg-blue-900/30 text-blue-400 ring-blue-500/20'
                    }`}>
                      {apt.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon: Icon, color }: { title: string, value: string | number, icon: any, color: string }) {
  return (
    <div className="overflow-hidden rounded-xl bg-[#0a0a0a] px-4 py-5 shadow-sm border border-zinc-800 sm:p-6">
      <div className="flex items-center">
        <div className={`flex-shrink-0 rounded-md p-3 ${color}`}>
          <Icon className="h-6 w-6 text-white" aria-hidden="true" />
        </div>
        <div className="ml-5 w-0 flex-1">
          <dt className="truncate text-sm font-medium text-gray-400">{title}</dt>
          <dd className="mt-1 text-2xl font-semibold tracking-tight text-white">{value}</dd>
        </div>
      </div>
    </div>
  );
}
