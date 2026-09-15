import type { MediaItem } from "./activity-types";
import { PrintableLineArt } from "./PrintableLineArt";

type PrintableImageProps = { image: MediaItem; variant?: "color" | "coloring"; className?: string };

export function PrintableImage({ image, variant = "color", className = "", ...props }: PrintableImageProps) {
  return <PrintableLineArt name={image.illustration} variant={variant === "coloring" ? "outline" : "color"} className={`printable-image ${className}`} {...props} />;
}