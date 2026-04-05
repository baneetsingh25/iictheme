import { RoutePlaceholder } from "../ui/sections/RoutePlaceholder";

export function TimelinePage() {
  return (
    <RoutePlaceholder
      eyebrow="Timeline"
      title="A visual record of milestones, awards, patents, and launches"
      description="This route is shaped for an interactive vertical timeline with filters, rich milestone cards, and expandable details."
      features={[
        "Alternating milestone layout with year markers",
        "Category and year filters with reset action",
        "Expandable cards for deeper milestone content",
        "Animation-friendly timeline sections",
        "Ready for data from events, achievements, and startup milestones"
      ]}
    />
  );
}
