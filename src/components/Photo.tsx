import Image from "next/image";

/**
 * Fills its wrapper with a cover-cropped image. Mirrors the sizing API the
 * Placeholder used (style carries minHeight / aspectRatio / height), so photos
 * drop into the same slots without the layout shifting.
 */
export function Photo({
  src,
  alt,
  sizes,
  className,
  style,
  priority = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
}) {
  return (
    <div className={`photo ${className ?? ""}`} style={style}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        style={{ objectFit: "cover" }}
        loading="eager"
      />
    </div>
  );
}
