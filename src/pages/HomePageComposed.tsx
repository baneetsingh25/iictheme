import { homeStats, notices, upcomingEvents } from "../data/siteContent";
import { HomeStatsGrid } from "../ui/home/HomeStatsGrid";
import { LatestNoticesPreview } from "../ui/home/LatestNoticesPreview";
import { PageGlanceGrid } from "../ui/home/PageGlanceGrid";
import { UpcomingEventsPreview } from "../ui/home/UpcomingEventsPreview";
import { PageHero } from "../ui/sections/PageHero";
import { SectionCard } from "../ui/sections/SectionCard";

export function HomePageComposed() {
  return (
    <div className="space-y-16 pb-10 pt-4 md:space-y-20">
      <PageHero
        eyebrow="Website Overview"
        title="Institution's Innovation Council"
        description="This homepage now works as a clean entry point to the full website. Each major function has its own dedicated page so the frontend team can build and review sections independently."
      >
        <HomeStatsGrid stats={homeStats} />
      </PageHero>

      <SectionCard
        title="Pages at a glance"
        description="Use these dedicated pages to present the website during review and to let the frontend team work on sections without editing one huge single-scroll file."
      >
        <PageGlanceGrid />
      </SectionCard>

      <SectionCard
        title="Upcoming Events Preview"
        description="The homepage keeps a short preview, while the full event experience lives on the Events page."
      >
        <UpcomingEventsPreview events={upcomingEvents} />
      </SectionCard>

      <SectionCard
        title="Latest Notices"
        description="Quick highlights stay on the homepage, while detailed communication can later be extended on dedicated modules."
      >
        <LatestNoticesPreview notices={notices} />
      </SectionCard>
    </div>
  );
}
