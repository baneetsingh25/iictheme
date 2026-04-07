import type { Notice } from "../../types/content";

type LatestNoticesPreviewProps = {
  notices: Notice[];
};

export function LatestNoticesPreview({ notices }: LatestNoticesPreviewProps) {
  return (
    <div className="flex flex-col gap-4">
      {notices.map((notice) => (
        <div
          key={notice.id}
          className={`flex items-center justify-between rounded-2xl px-5 py-4 text-sm ${
            notice.priority === "Urgent"
              ? "bg-society-red/10 text-society-red"
              : "bg-brand-50 text-brand-700"
          }`}
        >
          <span>{notice.title}</span>
          <span className="font-semibold">{notice.priority}</span>
        </div>
      ))}
    </div>
  );
}
