export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white">Hospital Analytics</h1>
        <p className="mt-1 text-sm text-gray-400">
          In-depth reports and operational metrics for the facility.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#0a0a0a] p-6 rounded-xl border border-zinc-800 shadow-sm">
          <h2 className="text-base font-semibold text-white mb-4">Patient Growth Graph</h2>
          <div className="h-64 flex items-center justify-center bg-zinc-900 rounded-lg border border-dashed border-zinc-700">
            {/* Real charts go here, keeping simple placeholder to manage scope */}
            <p className="text-gray-500 text-sm">Growth Chart Placeholder</p>
          </div>
        </div>

        <div className="bg-[#0a0a0a] p-6 rounded-xl border border-zinc-800 shadow-sm">
          <h2 className="text-base font-semibold text-white mb-4">Department Load</h2>
          <div className="h-64 flex items-center justify-center bg-zinc-900 rounded-lg border border-dashed border-zinc-700">
            <p className="text-gray-500 text-sm">Load Chart Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
}
