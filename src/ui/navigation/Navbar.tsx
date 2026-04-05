import { useState } from "react";
import { Link } from "react-router-dom";
import { env } from "../../config/env";
import { navItems } from "../../data/siteContent";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/88 backdrop-blur">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-5 px-5 py-3 sm:px-8 lg:px-10">
        <Link className="flex items-center gap-3" to="/">
          <img
            alt="Society logo"
            className="h-16 w-16 rounded-[1.35rem] bg-white object-contain p-1.5 ring-2 ring-accent-gold/40"
            src={env.societyLogoUrl}
          />
          <div className="max-w-[320px]">
            <p className="text-sm uppercase tracking-[0.28em] text-brand-700">
              Institution's Innovation Council
            </p>
            <p className="mt-0.5 text-[1.05rem] font-semibold leading-7 text-slate-900">
              {env.collegeName}
            </p>
          </div>
        </Link>

        <button
          className="rounded-2xl border border-slate-200 px-4 py-3 text-base font-medium transition duration-200 hover:border-society-blue hover:text-society-blue lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          Menu
        </button>

        <nav className="hidden flex-1 items-center justify-center gap-1 rounded-[1.7rem] border border-slate-200 bg-white px-4 py-2 shadow-sm lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className="rounded-xl px-4 py-2.5 text-[0.95rem] font-semibold text-slate-500 transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-society-yellow/10 hover:text-society-blue"
              to={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            className="rounded-full border border-society-red/25 bg-society-red/10 px-5 py-2.5 text-[0.95rem] font-semibold text-society-red transition duration-200 ease-out hover:-translate-y-0.5 hover:border-society-red hover:bg-society-red hover:text-white"
            to="/admin/login"
          >
            Admin
          </Link>
          <img
            alt="College logo"
            className="h-16 w-16 rounded-full bg-white object-contain p-1.5 ring-2 ring-brand-100"
            src={env.collegeLogoUrl}
          />
        </div>
      </div>

      {open ? (
        <div className="mx-5 mb-4 rounded-[1.8rem] border border-slate-200 bg-white px-5 py-5 shadow-sm lg:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                className="rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition duration-200 hover:bg-slate-100 hover:text-society-blue"
                onClick={() => setOpen(false)}
                to={item.href}
              >
                {item.label}
              </Link>
            ))}
            <Link
              className="rounded-xl border border-society-red/25 bg-society-red/10 px-4 py-3 text-base font-medium text-society-red transition duration-200 hover:bg-society-red hover:text-white"
              onClick={() => setOpen(false)}
              to="/admin/login"
            >
              Admin
            </Link>
            <img
              alt="College logo"
              className="h-20 w-20 rounded-full bg-white object-contain p-1.5 ring-2 ring-brand-100"
              src={env.collegeLogoUrl}
            />
          </nav>
        </div>
      ) : null}
    </header>
  );
}
