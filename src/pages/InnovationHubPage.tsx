import { RoutePlaceholder } from "../ui/sections/RoutePlaceholder";

export function InnovationHubPage() {
  return (
    <RoutePlaceholder
      eyebrow="Innovation Hub"
      title="Idea submissions, project discovery, and startup resources"
      description="This route is structured for form-first interaction, backend-issued tracking IDs, and downloadable mentoring resources."
      features={[
        "Idea submission form with validation and file upload support",
        "Tracking ID success state sourced from backend response",
        "Ongoing project showcase with category filtering",
        "Resources library with downloadable assets",
        "Service layer ready for /ideas, /projects, and /resources endpoints"
      ]}
    />
  );
}
