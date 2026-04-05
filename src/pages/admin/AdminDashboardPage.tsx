const metrics = [
  { label: "Visitors (30 days)", value: "12,450" },
  { label: "Total Events", value: "45" },
  { label: "Registrations", value: "1,280" },
  { label: "Pending Queries", value: "18" },
  { label: "Active Members", value: "150" },
  { label: "Recent Submissions", value: "27" }
];

const actions = ["Add Event", "Post Notice", "Upload Photos", "Respond to Query"];

export function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-brand-200">Dashboard</p>
        <h1 className="mt-3 text-3xl font-semibold">Admin overview starter</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
          This initial dashboard gives your team the structure for analytics cards, recent activity,
          and quick actions while the backend team prepares secure admin APIs.
        </p>
      </div>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {metrics.map((metric) => (
          <article key={metric.label} className="rounded-3xl border border-white/10 bg-slate-900 p-5">
            <p className="text-sm text-slate-400">{metric.label}</p>
            <p className="mt-3 text-3xl font-semibold text-white">{metric.value}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-slate-900 p-5">
          <h2 className="text-xl font-semibold">Recent activity</h2>
          <div className="mt-5 space-y-3 text-sm text-slate-300">
            <div className="rounded-2xl bg-white/5 px-4 py-3">New event registrations received for Startup Sprint Bootcamp</div>
            <div className="rounded-2xl bg-white/5 px-4 py-3">Two innovation ideas moved to Under Review</div>
            <div className="rounded-2xl bg-white/5 px-4 py-3">Gallery upload batch completed for Innovation Week 2026</div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900 p-5">
          <h2 className="text-xl font-semibold">Quick actions</h2>
          <div className="mt-5 grid gap-3">
            {actions.map((action) => (
              <button
                key={action}
                className="rounded-2xl bg-brand-600 px-4 py-3 text-left font-semibold text-white"
                type="button"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
