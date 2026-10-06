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
  preload = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  style?: React.CSSProperties;
  /** Only for above-the-fold images; everything else lazy-loads as it nears the viewport. */
  preload?: boolean;
}) {
  return (
    <div className={`photo ${className ?? ""}`} style={style}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        preload={preload}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
