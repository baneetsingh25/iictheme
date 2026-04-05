import { homeStats, notices, upcomingEvents } from "../data/siteContent";
import { PageHero } from "../ui/sections/PageHero";
import { SectionCard } from "../ui/sections/SectionCard";

type PageLinkCard = {
  href: string;
  label: string;
  title: string;
  description: string;
  highlights: string[];
};

const pageCards: PageLinkCard[] = [
  {
    href: "/about",
    label: "About Us",
    title: "Mission, vision, and council identity",
    description:
      "Show the institute's innovation vision, faculty leadership, structure, objectives, and partner ecosystem.",
    highlights: ["Mission and vision", "Faculty coordinator", "Council structure"]
  },
  {
    href: "/innovation-hub",
    label: "Innovation Hub",
    title: "Idea submissions and startup resources",
    description:
      "This page will handle project idea submissions, resource downloads, and innovation pipeline visibility.",
    highlights: ["Submit idea form", "Project showcase", "Resource library"]
  },
  {
    href: "/events",
    label: "Events",
    title: "What's happening on campus",
    description:
      "A dedicated events space for calendar view, registrations, upcoming activities, and archived events.",
    highlights: ["Calendar", "Registration flow", "Past event archive"]
  },
  {
    href: "/reports",
    label: "Reports",
    title: "Knowledge base and official documents",
    description:
      "Central place for annual reports, event reports, impact documents, and secure financial reports later.",
    highlights: ["Report cards", "Search and filters", "Protected docs"]
  },
  {
    href: "/members",
    label: "Members",
    title: "Faculty and student council directory",
    description:
      "Present the leadership team, member profiles, and future join-IIC application flow on a dedicated page.",
    highlights: ["Council members", "Faculty profiles", "Join IIC"]
  },
  {
    href: "/gallery",
    label: "Gallery",
    title: "Moments captured across initiatives",
    description:
      "A visual page for photos, videos, event memories, and media browsing with filters and larger previews.",
    highlights: ["Photo grid", "Video highlights", "Event filters"]
  },
  {
    href: "/achievements",
    label: "Achievements",
    title: "Awards, patents, startups, and stories",
    description:
      "Showcase measurable outcomes, incubated startups, publications, and success stories from the community.",
    highlights: ["Awards", "Patents", "Success stories"]
  },
  {
    href: "/timeline",
    label: "Timeline",
    title: "How the council has evolved",
    description:
      "A chronological view of milestones, launches, awards, and growth over the years.",
    highlights: ["Milestones", "Category filters", "Institutional journey"]
  },
  {
    href: "/contact",
    label: "Contact",
    title: "Questions, support, and queries",
    description:
      "Let visitors reach the team, track queries, and find FAQs without cluttering the homepage.",
    highlights: ["Contact form", "FAQs", "Office info"]
  }
];

export function HomePage() {
  return (
    <div className="space-y-16 pb-10 pt-4 md:space-y-20">
      <PageHero
        eyebrow="Website Overview"
        title="Institution's Innovation Council"
        description="This homepage now works as a clean entry point to the full website. Each major function has its own dedicated page so the frontend team can build and review sections independently."
      >
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {homeStats.map((stat, index) => {
            const cardStyles = [
              { backgroundColor: "#3f419f", color: "#ffffff" },
              { backgroundColor: "#ffb642", color: "#0f172a" },
              {
                backgroundColor: "#ffffff",
                color: "#0f172a",
                border: "1px solid rgba(63, 65, 159, 0.18)"
              },
              { backgroundColor: "#d92c34", color: "#ffffff" }
            ];

            return (
              <article
                key={stat.label}
                className="rounded-[1.75rem] p-7 shadow-panel"
                style={cardStyles[index]}
              >
                <p className="text-4xl font-semibold">{stat.value}</p>
                <p className="mt-3 text-sm">{stat.label}</p>
              </article>
            );
          })}
        </div>
      </PageHero>

      <SectionCard
        title="Pages at a glance"
        description="Use these dedicated pages to present the website during review and to let the frontend team work on sections without editing one huge single-scroll file."
      >
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {pageCards.map((page) => (
            <a
              key={page.href}
              className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-panel transition duration-200 hover:-translate-y-1 hover:border-society-blue hover:shadow-xl"
              href={page.href}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-society-yellow">
                {page.label}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900 group-hover:text-society-blue">
                {page.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-500">{page.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {page.highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-society-yellow/14 px-3 py-1 text-sm font-medium text-society-blue"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm font-semibold text-society-red transition duration-200 group-hover:translate-x-1">
                Open page
              </p>
            </a>
          ))}
        </div>
      </SectionCard>

      <SectionCard
        title="Upcoming Events Preview"
        description="The homepage keeps a short preview, while the full event experience lives on the Events page."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {upcomingEvents.map((event) => (
            <article
              key={event.id}
              className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white"
            >
              <img alt={event.title} className="h-52 w-full object-cover" src={event.image} />
              <div className="space-y-3 p-6">
                <span className="inline-flex rounded-full bg-society-yellow/15 px-3 py-1 text-xs font-semibold text-society-blue">
                  {event.category}
                </span>
                <h3 className="text-xl font-semibold text-slate-900">{event.title}</h3>
                <p className="text-sm text-slate-600">{event.date}</p>
                <p className="text-sm text-slate-600">{event.venue}</p>
                <a
                  className="inline-flex rounded-full bg-society-blue px-4 py-2 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-brand-700"
                  href="/events"
                >
                  Go to Events Page
                </a>
              </div>
            </article>
          ))}
        </div>
      </SectionCard>

      <SectionCard
        title="Latest Notices"
        description="Quick highlights stay on the homepage, while detailed communication can later be extended on dedicated modules."
      >
        <div className="flex flex-col gap-4">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className={`flex items-center justify-between rounded-2xl px-5 py-4 text-sm ${
                notice.priority === "Urgent"
                  ? "bg-society-red/10 text-society-red"
                  : "bg-brand-50 text-brand-700"
              }`}
            >
              <span>{notice.title}</span>
              <span className="font-semibold">{notice.priority}</span>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
