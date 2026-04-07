import type { SVGProps } from "react";

type PageLinkCard = {
  href: string;
  label: string;
  description: string;
  highlights: string[];
  accent: "blue" | "yellow" | "red" | "light";
  cta: string;
  layout: string;
  image?: string;
};

function CardIcon(props: { label: string; className?: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const
  };

  const Svg = ({ children, className }: SVGProps<SVGSVGElement>) => (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
      {children}
    </svg>
  );

  const className = props.className ?? "h-4 w-4";

  switch (props.label) {
    case "About Us":
      return (
        <Svg className={className}>
          <path {...common} d="M4 10.5 12 6l8 4.5" />
          <path {...common} d="M6.5 10.5V18h11v-7.5" />
          <path {...common} d="M9.5 13.5h5" />
        </Svg>
      );
    case "Innovation Hub":
      return (
        <Svg className={className}>
          <path {...common} d="M12 3.5a5.5 5.5 0 0 0-3.7 9.6c.7.6 1.2 1.4 1.4 2.3h4.6c.2-.9.7-1.7 1.4-2.3A5.5 5.5 0 0 0 12 3.5Z" />
          <path {...common} d="M10 18h4" />
          <path {...common} d="M10.5 20.5h3" />
        </Svg>
      );
    case "Events":
      return (
        <Svg className={className}>
          <rect {...common} x="5" y="6.5" width="14" height="12" rx="2.5" />
          <path {...common} d="M8 4.5v4" />
          <path {...common} d="M16 4.5v4" />
          <path {...common} d="M5 10.5h14" />
        </Svg>
      );
    case "Reports":
      return (
        <Svg className={className}>
          <path {...common} d="M8 4.5h6l3 3V19a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 19V6a1.5 1.5 0 0 1 1-1.5Z" />
          <path {...common} d="M14 4.5V8h3" />
          <path {...common} d="M9.5 12h5" />
          <path {...common} d="M9.5 15h5" />
        </Svg>
      );
    case "Members":
      return (
        <Svg className={className}>
          <path {...common} d="M8.5 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
          <path {...common} d="M15.5 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
          <path {...common} d="M4.5 18c.5-2.2 2.2-3.5 4-3.5s3.5 1.3 4 3.5" />
          <path {...common} d="M13 18c.3-1.6 1.5-2.6 3-2.6 1.4 0 2.6 1 2.9 2.6" />
        </Svg>
      );
    case "Gallery":
      return (
        <Svg className={className}>
          <rect {...common} x="5" y="6" width="14" height="12" rx="2.5" />
          <path {...common} d="m8 14 2.2-2.2a1 1 0 0 1 1.4 0L14 14l1.6-1.6a1 1 0 0 1 1.4 0L19 14.5" />
          <path {...common} d="M9 10h.01" />
        </Svg>
      );
    case "Achievements":
      return (
        <Svg className={className}>
          <path {...common} d="M12 5.5 13.8 9l3.7.5-2.7 2.6.7 3.8L12 14l-3.5 1.9.7-3.8-2.7-2.6 3.7-.5L12 5.5Z" />
        </Svg>
      );
    case "Timeline":
      return (
        <Svg className={className}>
          <path {...common} d="M7 6.5h10" />
          <path {...common} d="M7 12h10" />
          <path {...common} d="M7 17.5h10" />
          <circle {...common} cx="5" cy="6.5" r="1" />
          <circle {...common} cx="5" cy="12" r="1" />
          <circle {...common} cx="5" cy="17.5" r="1" />
        </Svg>
      );
    case "Contact":
      return (
        <Svg className={className}>
          <path {...common} d="M12 19.5s5-4.3 5-8.5a5 5 0 1 0-10 0c0 4.2 5 8.5 5 8.5Z" />
          <circle {...common} cx="12" cy="11" r="1.5" />
        </Svg>
      );
    default:
      return null;
  }
}

const pageCards: PageLinkCard[] = [
  {
    href: "/about",
    label: "About Us",
    description: "Mission, vision, leadership, and council identity.",
    highlights: ["Learn more"],
    accent: "blue",
    cta: "Explore About",
    layout: "lg:col-span-2 lg:row-span-2 min-h-[240px]"
  },
  {
    href: "/innovation-hub",
    label: "Innovation Hub",
    description: "Ideas turned into viable startup prototypes.",
    highlights: ["Submit idea form"],
    accent: "light",
    cta: "Enter Hub",
    layout: "min-h-[212px]",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
  },
  {
    href: "/events",
    label: "Events",
    description: "Workshops, hackathons, and seminar highlights.",
    highlights: ["Event calendar"],
    accent: "light",
    cta: "Calendar",
    layout: "min-h-[212px]",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
  },
  {
    href: "/reports",
    label: "Reports",
    description: "Official documents, reports, and archives.",
    highlights: ["Browse archive"],
    accent: "light",
    cta: "Open Reports",
    layout: "lg:col-span-1 min-h-[212px]"
  },
  {
    href: "/members",
    label: "Members",
    description: "Faculty mentors, student leaders, and council members.",
    highlights: ["Council directory"],
    accent: "light",
    cta: "Members Portal",
    layout: "lg:col-span-1 min-h-[212px]",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80"
  },
  {
    href: "/gallery",
    label: "Gallery",
    description: "Photos, event moments, and showcase highlights.",
    highlights: ["Visual archive"],
    accent: "light",
    cta: "Explore visuals",
    layout: "lg:col-span-2 lg:row-span-2 min-h-[250px] overflow-hidden",
    image:
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=900&q=80"
  },
  {
    href: "/achievements",
    label: "Achievements",
    description: "Awards, patents, startup milestones, and success stories.",
    highlights: ["Awards", "Patents", "Success stories"],
    accent: "red",
    cta: "View Hall of Fame",
    layout: "lg:col-span-2 lg:row-span-2 min-h-[220px]"
  },
  {
    href: "/timeline",
    label: "Timeline",
    description: "Milestones from the council's growth journey.",
    highlights: ["Milestones"],
    accent: "yellow",
    cta: "Open Timeline",
    layout: "min-h-[212px]"
  },
  {
    href: "/contact",
    label: "Contact",
    description: "Partnerships, mentorship, and general queries.",
    highlights: ["Contact form"],
    accent: "light",
    cta: "Get in touch",
    layout: "min-h-[212px]"
  }
];

export function PageGlanceGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-4 lg:auto-rows-[212px]">
      {pageCards.map((page) => {
        const isBlue = page.accent === "blue";
        const isRed = page.accent === "red";
        const isYellow = page.accent === "yellow";

        const baseClass = isBlue
          ? "bg-society-blue border-society-blue text-white"
          : isRed
            ? "bg-white border-society-red/25 text-slate-900"
            : isYellow
              ? "bg-white border-society-yellow/35 text-slate-900"
              : "bg-white border-slate-200 text-slate-900";

        if (page.label === "About Us") {
          return (
            <a
              key={page.href}
              className={`group relative overflow-hidden rounded-[1.8rem] border p-8 shadow-panel transition duration-200 hover:-translate-y-1 hover:shadow-xl ${baseClass} ${page.layout}`}
              href={page.href}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_22%)]" />
              <div className="flex h-full flex-col justify-between lg:flex-row lg:items-stretch lg:gap-6">
                <div className="relative z-10 flex max-w-sm flex-col">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/10">
                    <CardIcon className="h-4 w-4" label={page.label} />
                  </div>
                  <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-white/68">
                    About Us
                  </p>
                  <h3 className="mt-5 text-[1.8rem] font-semibold leading-10 text-white">
                    About Us
                  </h3>
                  <p className="mt-5 max-w-[24rem] text-[15px] leading-8 text-white/82">
                    {page.description}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-2.5">
                    {page.highlights.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white/10 px-3.5 py-1.5 text-[11px] font-medium text-white/92 ring-1 ring-white/10"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="mt-8 text-sm font-semibold text-white/92">
                    Explore About <span aria-hidden="true">→</span>
                  </p>
                </div>
                <div className="relative z-10 mt-6 hidden w-[14.5rem] shrink-0 rounded-[1.55rem] bg-gradient-to-b from-white/14 via-white/10 to-white/6 p-4 ring-1 ring-white/12 lg:block">
                  <div className="grid h-full gap-3">
                    <div className="rounded-[1.15rem] border border-society-blue/55 bg-society-blue/14 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-society-yellow">
                        Mission
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/88">
                        Build a campus culture of innovation.
                      </p>
                    </div>
                    <div className="rounded-[1.15rem] border border-society-yellow/45 bg-society-yellow/10 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-society-yellow">
                        Vision
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/88">
                        Turn ideas into real student-led outcomes.
                      </p>
                    </div>
                    <div className="rounded-[1.15rem] border border-society-red/45 bg-society-red/10 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-society-yellow">
                        Leadership
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/88">
                        Guided by faculty mentors and the council team.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          );
        }

        if (page.label === "Gallery") {
          return (
            <a
              key={page.href}
              className={`group relative overflow-hidden rounded-[1.8rem] border p-0 shadow-panel transition duration-200 hover:-translate-y-1 hover:shadow-xl ${baseClass} ${page.layout}`}
              href={page.href}
            >
              <img alt={page.label} className="absolute inset-0 h-full w-full object-cover" src={page.image} />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/82 via-society-blue/72 to-slate-950/88" />
              <div className="absolute inset-0 bg-gradient-to-r from-society-blue/18 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(255,255,255,0.18),transparent_22%),radial-gradient(circle_at_52%_50%,rgba(255,255,255,0.10),transparent_18%)]" />
              <div className="relative flex h-full flex-col justify-between p-8 text-white">
                <div className="max-w-[17rem]">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-society-yellow text-society-blue shadow-lg shadow-black/20">
                    <CardIcon className="h-4 w-4" label={page.label} />
                  </div>
                  <h3 className="mt-7 text-[1.55rem] font-semibold leading-9 text-white">Gallery</h3>
                  <p className="mt-4 max-w-[16rem] text-[13px] leading-6 text-white/70">
                    Visual chronicles of our creative journey, from concept sketches to award ceremonies.
                  </p>
                </div>
                <p className="text-sm font-semibold text-white">
                  Explore visuals <span aria-hidden="true">→</span>
                </p>
              </div>
            </a>
          );
        }

        if (page.label === "Achievements") {
          return (
            <a
              key={page.href}
              className={`group rounded-[1.8rem] border p-8 shadow-panel transition duration-200 hover:-translate-y-1 hover:shadow-xl ${baseClass} ${page.layout}`}
              href={page.href}
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-society-red/10 text-society-red">
                    <CardIcon className="h-4 w-4" label={page.label} />
                  </div>
                  <h3 className="mt-4 text-[1.55rem] font-semibold leading-8 text-slate-900">Achievements</h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">{page.description}</p>
                </div>
                <div className="mt-7 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-slate-50 px-4 py-3">
                    <p className="text-2xl font-semibold text-society-red">45+</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-400">Patents filed</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 px-4 py-3">
                    <p className="text-2xl font-semibold text-society-blue">12</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-400">Global awards</p>
                  </div>
                </div>
                <p className="mt-8 text-sm font-semibold text-society-red">View Hall of Fame</p>
              </div>
            </a>
          );
        }

        if (page.label === "Innovation Hub") {
          return (
            <a
              key={page.href}
              className={`group rounded-[1.6rem] border border-slate-100 bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(15,23,42,0.1)] ${page.layout}`}
              href={page.href}
            >
              <div className="flex h-full flex-col">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50 text-society-blue">
                    <CardIcon className="h-4 w-4" label={page.label} />
                  </div>
                  <h3 className="mt-8 text-[1.05rem] font-semibold leading-7 text-society-blue">
                    Innovation Hub
                  </h3>
                  <p className="mt-4 max-w-[18.5rem] text-[13px] leading-[1.7] text-slate-500">
                    {page.description}
                  </p>
                </div>
              </div>
            </a>
          );
        }

        return (
          <a
            key={page.href}
            className={`group rounded-[1.6rem] border border-slate-100 bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(15,23,42,0.1)] ${page.layout}`}
            href={page.href}
          >
            <div className="flex h-full flex-col">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50 text-society-blue">
                  <CardIcon className="h-4 w-4" label={page.label} />
                </div>
                <p className="mt-8 text-[1.05rem] font-semibold leading-7 text-society-blue transition duration-200 group-hover:text-society-blue">
                  {page.label}
                </p>
                <p className="mt-4 max-w-[18.5rem] text-[13px] leading-[1.7] text-slate-500">
                  {page.description}
                </p>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
