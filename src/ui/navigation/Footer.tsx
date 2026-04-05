import { env } from "../../config/env";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white text-slate-900">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_1fr_1fr_1fr_auto] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img
              alt="Society logo"
              className="h-14 w-14 rounded-2xl bg-white object-contain p-1 ring-2 ring-society-yellow/30"
              src={env.societyLogoUrl}
            />
            <div>
              <p className="text-2xl font-semibold text-slate-900">IIC Portal</p>
              <p className="text-sm uppercase tracking-[0.2em] text-society-blue">
                Institution's Innovation Council
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-xs text-lg leading-9 text-slate-500">
            Fostering innovation and entrepreneurship among students through mentorship, events,
            and collaboration.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold uppercase tracking-[0.18em] text-slate-400">
            Quick Links
          </h4>
          <div className="mt-6 space-y-4 text-lg text-slate-600">
            <a className="block transition duration-200 hover:translate-x-1 hover:text-society-blue" href="/">Home</a>
            <a className="block transition duration-200 hover:translate-x-1 hover:text-society-blue" href="/about">About Us</a>
            <a className="block transition duration-200 hover:translate-x-1 hover:text-society-blue" href="/events">Events</a>
            <a className="block transition duration-200 hover:translate-x-1 hover:text-society-blue" href="/reports">Reports</a>
            <a className="block transition duration-200 hover:translate-x-1 hover:text-society-blue" href="/gallery">Gallery</a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold uppercase tracking-[0.18em] text-slate-400">
            Resources
          </h4>
          <div className="mt-6 space-y-4 text-lg text-slate-600">
            <a className="block transition duration-200 hover:translate-x-1 hover:text-society-blue" href="/reports">Annual Reports</a>
            <a className="block transition duration-200 hover:translate-x-1 hover:text-society-blue" href="/reports">MoM Documents</a>
            <a className="block transition duration-200 hover:translate-x-1 hover:text-society-blue" href="/about">Guidelines</a>
            <a className="block transition duration-200 hover:translate-x-1 hover:text-society-blue" href="/contact">FAQs</a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold uppercase tracking-[0.18em] text-slate-400">
            Contact
          </h4>
          <div className="mt-6 space-y-4 text-lg text-slate-600">
            <p>Innovation Center, Main Campus</p>
            <p>iic@institution.edu</p>
            <p>+91 98765 43210</p>
          </div>
        </div>

        <div className="flex justify-start lg:justify-end">
          <img
            alt="College logo"
            className="h-24 w-24 rounded-full bg-white object-contain p-1 ring-2 ring-brand-100"
            src={env.collegeLogoUrl}
          />
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-slate-200 px-4 py-6 text-sm text-slate-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>Copyright © 2026 {env.collegeName}. All rights reserved.</p>
        <p>Ministry of Education, Government of India initiative</p>
      </div>
    </footer>
  );
}
