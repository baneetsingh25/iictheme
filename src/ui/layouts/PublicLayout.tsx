import { Outlet } from "react-router-dom";
import { Navbar } from "../navigation/Navbar";
import { Footer } from "../navigation/Footer";

export function PublicLayout() {
  return (
    <div className="min-h-screen bg-mist text-ink">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
