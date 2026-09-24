import Image from "next/image";

export type FigureRowImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type FigureRowProps = {
  images: FigureRowImage[];
  caption: string;
  columns?: 2 | 3;
  contain?: boolean;
};

export function FigureRow({
  images,
  caption,
  columns = 3,
  contain = false,
}: FigureRowProps) {
  const sizes =
    columns === 2
      ? "(max-width: 768px) calc(100vw - 48px), 360px"
      : "(max-width: 768px) calc(100vw - 48px), 240px";
  const grid =
    columns === 2
      ? "grid grid-cols-1 gap-4 md:grid-cols-2"
      : "grid grid-cols-1 gap-4 md:grid-cols-3";

  return (
    <figure>
      <div className={grid}>
        {images.map((image) => (
          <div key={image.src} className="figure-frame min-w-0">
            {contain ? (
              <div className="flex max-h-[24rem] items-center justify-center bg-paper md:max-h-[26rem]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  sizes={sizes}
                  className="max-h-[24rem] w-auto max-w-full object-contain md:max-h-[26rem]"
                />
              </div>
            ) : (
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                sizes={sizes}
                className="h-auto w-full"
              />
            )}
          </div>
        ))}
      </div>
      <figcaption className="figure-frame figure-caption mt-4 border-t-0">
        {caption}
      </figcaption>
    </figure>
  );
}
