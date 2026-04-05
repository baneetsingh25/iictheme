import { RoutePlaceholder } from "../ui/sections/RoutePlaceholder";

export function AchievementsPage() {
  return (
    <RoutePlaceholder
      eyebrow="Achievements"
      title="Awards, startups, patents, stories, and media mentions"
      description="This route gives the team a clean base for high-impact recognition content and sortable achievement records."
      features={[
        "Award cards with level and date metadata",
        "Startup showcase area with founder and funding details",
        "Patent and publication list with expandable entries",
        "Featured student success story section",
        "Media mention logo grid and links"
      ]}
    />
  );
}
