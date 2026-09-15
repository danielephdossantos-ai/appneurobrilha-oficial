import type { MediaItem } from "./activity-types";
import { PrintableLineArt } from "./PrintableLineArt";

type PrintableImageProps = { image: MediaItem; variant?: "color" | "coloring"; className?: string };

export function PrintableImage({ image, variant = "color", className = "", ...props }: PrintableImageProps) {
  if (image.illustration) return <PrintableLineArt name={image.illustration} variant={variant === "coloring" ? "outline" : "color"} className={`printable-image ${className}`} {...props} />;
  if (image.srcUrl) return <img src={image.srcUrl} alt={image.label} className={`printable-image printable-source-image ${className}`} {...props} />;
  return <div className={`printable-image printable-image-placeholder ${className}`}>{image.label}</div>;
}
