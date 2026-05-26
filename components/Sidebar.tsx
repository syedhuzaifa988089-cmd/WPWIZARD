'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  Stethoscope, 
  CalendarCheck, 
  Receipt,
  BarChart3,
  Package,
  Settings,
  LogOut,
  Hospital
} from 'lucide-react';
import clsx from 'clsx'; // Assuming clsx is installed or available in Tailwind merges

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Patients', href: '/patients', icon: Users },
  { name: 'Doctors', href: '/doctors', icon: Stethoscope },
  { name: 'Appointments', href: '/appointments', icon: CalendarCheck },
  { name: 'Billing', href: '/billing', icon: Receipt },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Inventory', href: '/inventory', icon: Package },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex w-64 flex-col bg-[#0a0a0a] border-r border-zinc-800 h-screen fixed top-0 left-0">
      <div className="flex h-16 shrink-0 items-center px-6 border-b border-zinc-800">
        <Hospital className="h-8 w-8 text-blue-500 mr-2" />
        <span className="font-semibold text-lg tracking-tight text-white">Syed Care</span>
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto">
        <nav className="flex-1 space-y-1 px-4 py-6 border border-[#281810]">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  isActive
                    ? 'bg-blue-900/40 text-blue-400'
                    : 'text-gray-400 hover:bg-zinc-800/60 hover:text-white',
                  'group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors'
                )}
              >
                <Icon
                  className={clsx(
                    isActive ? 'text-blue-400' : 'text-gray-500 group-hover:text-gray-300',
                    'mr-3 h-5 w-5 flex-shrink-0 transition-colors'
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-zinc-800">
          <Link
            href="/login"
            className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-red-500 hover:bg-red-950/30 hover:text-red-400"
          >
            <LogOut className="mr-3 h-5 w-5 flex-shrink-0 text-red-500 group-hover:text-red-600" aria-hidden="true" />
            Sign out
          </Link>
        </div>
      </div>
    </div>
  );
}
