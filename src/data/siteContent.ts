import type { EventCard, HighlightStat, NavItem, Notice } from "../types/content";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Innovation Hub", href: "/innovation-hub" },
  { label: "Events", href: "/events" },
  { label: "Timeline", href: "/timeline" },
  { label: "Reports", href: "/reports" },
  { label: "Members", href: "/members" },
  { label: "Gallery", href: "/gallery" },
  { label: "Achievements", href: "/achievements" },
  { label: "Contact", href: "/contact" }
];

export const homeStats: HighlightStat[] = [
  { label: "Events Conducted", value: "45+" },
  { label: "Startups Mentored", value: "12" },
  { label: "Active Members", value: "150+" },
  { label: "Patents Filed", value: "8" }
];

export const upcomingEvents: EventCard[] = [
  {
    id: "evt-1",
    title: "Startup Sprint Bootcamp",
    category: "Workshop",
    date: "12 Apr 2026 • 10:00 AM",
    venue: "Innovation Hall",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "evt-2",
    title: "Campus Innovation Challenge",
    category: "Competition",
    date: "18 Apr 2026 • 02:00 PM",
    venue: "Seminar Block",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "evt-3",
    title: "IPR and Patent Readiness Webinar",
    category: "Webinar",
    date: "25 Apr 2026 • 04:30 PM",
    venue: "Online",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80"
  }
];

export const notices: Notice[] = [
  { id: "not-1", title: "Registration for Startup Sprint closes on 10 Apr", priority: "Urgent" },
  { id: "not-2", title: "Pitch deck template updated for 2026 cohort", priority: "Normal" },
  { id: "not-3", title: "Innovation Hub submissions open for social impact ideas", priority: "Normal" },
  { id: "not-4", title: "Faculty mentor meet scheduled for 15 Apr", priority: "Normal" },
  { id: "not-5", title: "Student council interview slots published", priority: "Urgent" }
];
