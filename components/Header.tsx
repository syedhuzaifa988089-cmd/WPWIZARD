import { Bell, Search, UserCircle } from 'lucide-react';

export function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-x-4 border-b border-zinc-800 bg-[#0a0a0a] px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <form className="relative flex flex-1" action="#" method="GET">
          <label htmlFor="search-field" className="sr-only">
            Search
          </label>
          <div className="flex items-center w-full max-w-md">
            <Search
              className="absolute left-3 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <input
              id="search-field"
              className="block h-10 w-full rounded-md border-0 py-1.5 pl-10 pr-3 bg-zinc-900 text-white ring-1 ring-inset ring-zinc-800 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
              placeholder="Search patients, doctors, or ID..."
              type="search"
              name="search"
            />
          </div>
        </form>
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <button type="button" className="-m-2.5 p-2.5 text-gray-500 hover:text-gray-300">
            <span className="sr-only">View notifications</span>
            <Bell className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Separator */}
          <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-zinc-800" aria-hidden="true" />

          {/* Profile dropdown */}
          <div className="flex items-center gap-x-4 lg:gap-x-6">
            <div className="flex items-center gap-x-2 text-sm font-medium text-white">
              <UserCircle className="h-8 w-8 text-gray-500" />
              <span className="hidden lg:block">Admin User</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
