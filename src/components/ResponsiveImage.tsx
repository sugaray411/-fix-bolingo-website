import meta from "@/data/image-meta.json";
import type { ImageKey } from "@/data/site";
import { cn } from "@/lib/utils";

type Props = {
  name: ImageKey;
  alt: string;
  sizes?: string;
  className?: string;
  /** Hero / above-the-fold images load eagerly with high priority. */
  priority?: boolean;
  /** Set false when a parent controls aspect ratio (e.g. object-cover fill). */
  intrinsic?: boolean;
};

const base = `${import.meta.env.BASE_URL}images/`;

export function imageSrc(name: ImageKey, width?: number) {
  const m = meta[name];
  const w = width ? (m.widths.find((x) => x >= width) ?? m.width) : m.width;
  return `${base}${name}-${w}.webp`;
}

export function ResponsiveImage({ name, alt, sizes = "100vw", className, priority, intrinsic = true }: Props) {
  const m = meta[name];
  const srcSet = m.widths.map((w) => `${base}${name}-${w}.webp ${w}w`).join(", ");
  return (
    <img
      src={`${base}${name}-${m.widths.at(-1)}.webp`}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={intrinsic ? m.width : undefined}
      height={intrinsic ? m.height : undefined}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      className={cn("block", className)}
    />
  );
}
