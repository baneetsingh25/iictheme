import { RoutePlaceholder } from "../ui/sections/RoutePlaceholder";

export function MembersPage() {
  return (
    <RoutePlaceholder
      eyebrow="Members"
      title="Faculty profiles, student council listing, and join application flow"
      description="This route is prepared for directory filters, hover states, and a join-IIC application modal tied to backend approval workflows."
      features={[
        "Faculty and student card sections with role details",
        "Search and multi-filter controls",
        "Join IIC form modal with validation and success state",
        "Pending application messaging from backend",
        "Directory layout aligned with future member management screens"
      ]}
    />
  );
}
