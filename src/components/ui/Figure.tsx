import Image from "next/image";

export type FigureProps = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  sizes?: string;
};

export function Figure({
  src,
  alt,
  caption,
  width,
  height,
  sizes = "(max-width: 768px) calc(100vw - 48px), 768px",
}: FigureProps) {
  return (
    <figure className="figure-frame">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        sizes={sizes}
        className="h-auto w-full"
      />
      <figcaption className="figure-caption">{caption}</figcaption>
    </figure>
  );
}
