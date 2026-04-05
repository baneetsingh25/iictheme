import { Link } from "react-router-dom";

export function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/5 p-8 text-white shadow-panel">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-200">Protected Area</p>
        <h1 className="mt-3 text-3xl font-semibold">Admin Login</h1>
        <p className="mt-3 text-sm text-slate-300">
          This page is ready to connect with backend-owned login and role verification.
        </p>
        <form className="mt-8 space-y-4">
          <label className="block text-sm">
            <span className="mb-2 block text-slate-300">Email</span>
            <input
              className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none"
              placeholder="admin@college.edu.in"
              type="email"
            />
          </label>
          <label className="block text-sm">
            <span className="mb-2 block text-slate-300">Password</span>
            <input
              className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none"
              placeholder="Enter password"
              type="password"
            />
          </label>
          <button className="w-full rounded-2xl bg-brand-600 px-4 py-3 font-semibold text-white" type="submit">
            Sign In
          </button>
        </form>
        <div className="mt-6 flex items-center justify-between text-sm text-slate-300">
          <span>Supabase-backed auth can sit behind backend here.</span>
          <Link className="text-brand-200" to="/">
            Back to site
          </Link>
        </div>
      </div>
    </div>
  );
}
