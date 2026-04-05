import { RoutePlaceholder } from "../ui/sections/RoutePlaceholder";

export function ContactPage() {
  return (
    <RoutePlaceholder
      eyebrow="Contact"
      title="Contact forms, query tracking, FAQs, and office details"
      description="This route is structured for user support, admin query workflows, CAPTCHA integration, and map-based contact information."
      features={[
        "Contact form area with attachment-ready flow",
        "Query tracking input and status display section",
        "FAQ accordion-ready content blocks",
        "Map embed and contact information layout",
        "Backend-owned query ID generation and auto-reply integration"
      ]}
    />
  );
}
