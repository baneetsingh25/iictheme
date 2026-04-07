import type { HighlightStat } from "../../types/content";

type HomeStatsGridProps = {
  stats: HighlightStat[];
};

export function HomeStatsGrid({ stats }: HomeStatsGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat, index) => {
        const cardStyles = [
          { backgroundColor: "#3f419f", color: "#ffffff" },
          { backgroundColor: "#ffb642", color: "#0f172a" },
          {
            backgroundColor: "#ffffff",
            color: "#0f172a",
            border: "1px solid rgba(63, 65, 159, 0.18)"
          },
          { backgroundColor: "#d92c34", color: "#ffffff" }
        ];

        return (
          <article
            key={stat.label}
            className="rounded-[1.75rem] p-7 shadow-panel"
            style={cardStyles[index]}
          >
            <p className="text-4xl font-semibold">{stat.value}</p>
            <p className="mt-3 text-sm">{stat.label}</p>
          </article>
        );
      })}
    </div>
  );
}
