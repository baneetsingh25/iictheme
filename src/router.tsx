import { createBrowserRouter } from "react-router-dom";
import { PublicLayout } from "./ui/layouts/PublicLayout";
import { AdminLayout } from "./ui/layouts/AdminLayout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { InnovationHubPage } from "./pages/InnovationHubPage";
import { EventsPage } from "./pages/EventsPage";
import { TimelinePage } from "./pages/TimelinePage";
import { ReportsPage } from "./pages/ReportsPage";
import { MembersPage } from "./pages/MembersPage";
import { GalleryPage } from "./pages/GalleryPage";
import { AchievementsPage } from "./pages/AchievementsPage";
import { ContactPage } from "./pages/ContactPage";
import { AdminLoginPage } from "./pages/admin/AdminLoginPage";
import { AdminDashboardPage } from "./pages/admin/AdminDashboardPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "innovation-hub", element: <InnovationHubPage /> },
      { path: "events", element: <EventsPage /> },
      { path: "timeline", element: <TimelinePage /> },
      { path: "reports", element: <ReportsPage /> },
      { path: "members", element: <MembersPage /> },
      { path: "gallery", element: <GalleryPage /> },
      { path: "achievements", element: <AchievementsPage /> },
      { path: "contact", element: <ContactPage /> }
    ]
  },
  {
    path: "/admin",
    children: [
      { path: "login", element: <AdminLoginPage /> },
      {
        index: true,
        element: (
          <AdminLayout>
            <AdminDashboardPage />
          </AdminLayout>
        )
      }
    ]
  }
]);
