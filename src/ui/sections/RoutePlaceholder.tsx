import { PageHero } from "./PageHero";
import { SectionCard } from "./SectionCard";

type RoutePlaceholderProps = {
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
};

export function RoutePlaceholder({
  eyebrow,
  title,
  description,
  features
}: RoutePlaceholderProps) {
  return (
    <div className="space-y-8">
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      <SectionCard
        title="Frontend build scope"
        description="This starter keeps the route live, shows intended sections, and gives the team a place to wire APIs, forms, and data modules next."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature}
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-700"
            >
              {feature}
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
