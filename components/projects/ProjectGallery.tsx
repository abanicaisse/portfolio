import Image from "next/image";
import type { ProjectGalleryImage } from "@/lib/site";
import { cn } from "@/lib/utils";

interface ProjectGalleryProps {
  images: ProjectGalleryImage[];
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  return (
    <div data-reveal-group className="grid gap-px border-t border-line bg-line md:grid-cols-2">
      {images.map((image) => (
        <figure key={image.src} data-reveal className={cn("flex flex-col bg-surface", image.wide && "md:col-span-2")}>
          <div className="overflow-hidden bg-surface-sunken">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes={image.wide ? "(min-width: 1120px) 1120px, 100vw" : "(min-width: 1120px) 560px, (min-width: 768px) 50vw, 100vw"}
              className="h-auto w-full"
            />
          </div>
          {image.caption && (
            <figcaption className="hud-label border-t border-line px-6 py-3 text-ink-faint md:px-8">
              {image.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
