import { RoutePlaceholder } from "../ui/sections/RoutePlaceholder";

export function EventsPage() {
  return (
    <RoutePlaceholder
      eyebrow="Events"
      title="Calendar, registration flows, and event archives"
      description="This route is prepared for searchable event lists, registration modals, capacity-aware flows, and past event reporting."
      features={[
        "Interactive month-view calendar component area",
        "Upcoming event cards with filters and search",
        "Registration modal hook point for backend-managed capacity and QR confirmations",
        "Past events archive with report and photo links",
        "Shared event card model aligned with backend API contract"
      ]}
    />
  );
}
