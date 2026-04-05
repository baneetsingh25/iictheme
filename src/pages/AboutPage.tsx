import { RoutePlaceholder } from "../ui/sections/RoutePlaceholder";

export function AboutPage() {
  return (
    <RoutePlaceholder
      eyebrow="About"
      title="Mission, vision, council structure, and partner institutions"
      description="This route is ready for faculty profiles, objectives, history, chart visuals, and partner showcases."
      features={[
        "Mission and Vision cards with brand-led backgrounds",
        "Faculty coordinator profile section with quote and LinkedIn link",
        "Objectives list and downloadable guideline PDF area",
        "Council structure cards for student leadership roles",
        "Brief timeline and partner institution logo grid"
      ]}
    />
  );
}
