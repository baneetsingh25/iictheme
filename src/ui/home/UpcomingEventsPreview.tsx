import type { EventCard } from "../../types/content";

type UpcomingEventsPreviewProps = {
  events: EventCard[];
};

export function UpcomingEventsPreview({ events }: UpcomingEventsPreviewProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {events.map((event) => (
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
  );
}
