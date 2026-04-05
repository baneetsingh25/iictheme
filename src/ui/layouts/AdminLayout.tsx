import type { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

export function AdminLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto grid min-h-screen max-w-7xl gap-6 px-4 py-6 lg:grid-cols-[240px_1fr]">
        <aside className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs uppercase tracking-[0.28em] text-brand-200">Admin Panel</p>
          <h1 className="mt-3 text-2xl font-semibold">IIC Console</h1>
          <nav className="mt-8 space-y-3 text-sm text-slate-300">
            <Link className="block rounded-xl bg-white/10 px-3 py-2" to="/admin">
              Dashboard
            </Link>
            <span className="block rounded-xl px-3 py-2">Events</span>
            <span className="block rounded-xl px-3 py-2">Reports</span>
            <span className="block rounded-xl px-3 py-2">Members</span>
            <span className="block rounded-xl px-3 py-2">Queries</span>
          </nav>
        </aside>
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-panel">
          {children}
        </section>
      </div>
    </div>
  );
}
