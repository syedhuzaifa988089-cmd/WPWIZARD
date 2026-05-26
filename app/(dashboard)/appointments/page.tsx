import { mockAppointmentsList } from '@/constants/mockData';
import { Calendar, Plus } from 'lucide-react';
import clsx from 'clsx'; // Simple alias, using native logic below if we haven't defined global clsx

export default function AppointmentsPage() {
  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Appointments</h1>
          <p className="mt-1 text-sm text-gray-400">
            Manage hospital appointments, scheduling, and doctor availability.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Book Appointment
          </button>
        </div>
      </div>

      <div className="bg-[#0a0a0a] rounded-xl shadow-sm border border-zinc-800 overflow-hidden">
        <ul role="list" className="divide-y divide-zinc-800">
          {mockAppointmentsList.map((apt) => (
            <li key={apt.id} className="flex items-center justify-between gap-x-6 py-5 px-6 hover:bg-zinc-800/50">
              <div className="flex min-w-0 gap-x-4 items-center">
                <div className="h-10 w-10 flex-none rounded-full bg-blue-900/30 flex items-center justify-center text-blue-500">
                  <Calendar className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-white">{apt.patientName}</p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-400">
                    Consulting: {apt.doctorName} <span className="mx-1">•</span> {apt.department}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-x-6">
                <div className="hidden sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-white">{apt.date}</p>
                  <p className="mt-1 text-xs leading-5 text-gray-400">{apt.time}</p>
                </div>
                <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                  apt.status === 'Completed' ? 'bg-green-900/30 text-green-400 ring-green-500/20' : 'bg-blue-900/30 text-blue-400 ring-blue-500/20'
                }`}>
                   {apt.status}
                </span>
                <button className="hidden sm:block text-sm font-medium text-blue-500 hover:text-blue-400">
                  Reschedule<span className="sr-only">, {apt.patientName}</span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
