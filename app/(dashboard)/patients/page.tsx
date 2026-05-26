import { mockPatientsList } from '@/constants/mockData';
import { Plus, Search, Filter } from 'lucide-react';

export default function PatientsPage() {
  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Patients</h1>
          <p className="mt-1 text-sm text-gray-400">
            A list of all the patients in your facility including their name, diagnosis, and status.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 flex items-center gap-2 transition"
          >
            <Plus className="h-4 w-4" />
            Add Patient
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-[#0a0a0a] p-4 rounded-xl border border-zinc-800">
        <div className="relative w-full sm:max-w-xs">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-gray-500" aria-hidden="true" />
          </div>
          <input
            type="text"
            name="search"
            id="search"
            className="block w-full rounded-md border-0 py-1.5 pl-10 bg-zinc-900 text-white ring-1 ring-inset ring-zinc-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
            placeholder="Search patients..."
          />
        </div>
        <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-300 bg-zinc-900 border border-zinc-700 rounded-md hover:bg-zinc-800">
          <Filter className="h-4 w-4" />
          More Filters
        </button>
      </div>

      {/* Table */}
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-zinc-800">
                <thead className="bg-[#121212]">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-300 sm:pl-6">ID</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-300">Name</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-300">Age/Gender</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-300">Blood</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-300">Diagnosis</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-300">Admitted</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-300">Status</th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800 bg-[#0a0a0a]">
                  {mockPatientsList.map((person) => (
                    <tr key={person.id} className="hover:bg-zinc-800/50">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">
                        {person.id}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-400">
                        <div className="font-medium text-white">{person.name}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-400">{person.age} / {person.gender}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-400">
                        <span className="inline-flex items-center rounded-md bg-red-950/40 px-2 py-1 text-xs font-medium text-red-400 ring-1 ring-inset ring-red-500/20">
                          {person.bloodGroup}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-400">{person.disease}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-400">{person.admissionDate}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-400">
                        <span className={clsx(
                          'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset',
                          person.status === 'Admitted' ? 'bg-green-900/30 text-green-400 ring-green-500/20' : 
                          person.status === 'Discharged' ? 'bg-zinc-800 text-gray-400 ring-gray-500/20' :
                          'bg-red-900/30 text-red-400 ring-red-500/20'
                        )}>
                          {person.status}
                        </span>
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a href="#" className="text-blue-500 hover:text-blue-400">
                          Edit<span className="sr-only">, {person.name}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function clsx(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
