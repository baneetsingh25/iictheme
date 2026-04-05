import { RoutePlaceholder } from "../ui/sections/RoutePlaceholder";

export function GalleryPage() {
  return (
    <RoutePlaceholder
      eyebrow="Gallery"
      title="Photo masonry, video showcases, and event media discovery"
      description="This route is ready for Cloudinary-backed images, lazy loading, lightbox viewing, and media filters."
      features={[
        "Photo masonry grid placeholder with lightbox-ready structure",
        "Video gallery area for YouTube and Vimeo embeds",
        "Top-bar filters for year, event, category, and media type",
        "Pagination or infinite scroll hook point",
        "Asset model designed for thumbnail-first loading"
      ]}
    />
  );
}
