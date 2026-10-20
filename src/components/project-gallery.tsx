"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

type Photo = { src: string; alt: string };

/**
 * One project's photographs. Each opens a lightbox grouped to this project only,
 * captioned with the project and what the photo shows.
 */
export function ProjectGallery({ title, place, photos }: { title: string; place: string; photos: Photo[] }) {
  const [index, setIndex] = useState(-1);
  const slides = photos.map((p) => ({ src: p.src, alt: p.alt, title, description: `${p.alt}. ${place}.` }));

  const tile = (photo: Photo, i: number, ratio: string, sizes: string) => (
    <button
      key={photo.src}
      type="button"
      onClick={() => setIndex(i)}
      aria-label={`Open photo ${i + 1} of ${photos.length}: ${photo.alt}`}
      className={`group relative block w-full cursor-zoom-in overflow-hidden bg-surface ${ratio}`}
    >
      <Image src={photo.src} alt={photo.alt} fill quality={85} sizes={sizes} className="object-cover transition duration-700 group-hover:scale-[1.03]" />
    </button>
  );

  const [main, ...more] = photos;
  return (
    <>
      {photos.length === 2 ? (
        <div className="grid grid-cols-2 gap-3">
          {photos.map((p, i) => tile(p, i, "aspect-[4/5]", "(min-width: 1024px) 27vw, 45vw"))}
        </div>
      ) : (
        <>
          {tile(main, 0, "aspect-[4/3]", "(min-width: 1024px) 55vw, 92vw")}
          {more.length > 0 && (
            <div className="mt-3 grid grid-cols-2 gap-3">
              {more.map((p, i) => tile(p, i + 1, "aspect-[4/3]", "(min-width: 1024px) 27vw, 45vw"))}
            </div>
          )}
        </>
      )}
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Captions, Thumbnails, Zoom]}
        captions={{ descriptionTextAlign: "start", descriptionMaxLines: 3 }}
        thumbnails={{ border: 0, borderRadius: 0, padding: 0, gap: 8, width: 96, height: 72, vignette: false }}
        carousel={{ finite: photos.length <= 1 }}
        render={photos.length <= 1 ? { buttonPrev: () => null, buttonNext: () => null } : undefined}
        styles={{ container: { backgroundColor: "rgba(18, 26, 19, 0.97)" } }}
      />
    </>
  );
}
