import { RoutePlaceholder } from "../ui/sections/RoutePlaceholder";

export function ReportsPage() {
  return (
    <RoutePlaceholder
      eyebrow="Reports"
      title="Searchable reports, protected financial documents, and download analytics"
      description="This route is designed for tabs, preview flows, password-protected sections, and report metadata."
      features={[
        "Report category tabs and filter-ready layout",
        "Cards for PDF preview, download, metadata, and counts",
        "Protected financial reports flow owned by backend",
        "Search and sort controls ready for integration",
        "Bulk download action placeholder for admin-approved flows"
      ]}
    />
  );
}
