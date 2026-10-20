"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";

/** YouTube embed that only loads the player after a click. */
export function YouTubeVideo({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden bg-ink-900">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 size-full"
          aria-label={`Watch our company video: ${title}`}
        >
          <Image
            src={`https://i.ytimg.com/vi/${id}/sddefault.jpg`}
            alt=""
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover opacity-90 transition group-hover:opacity-100"
            priority
          />
          <span className="absolute bottom-0 left-0 flex items-center gap-4 bg-ink-900/85 py-3 pl-3 pr-6 text-left text-white transition group-hover:bg-brand-800">
            <span className="grid size-12 place-items-center bg-white text-brand-700 transition group-hover:scale-105">
              <Play className="ml-0.5 size-5 fill-current" aria-hidden />
            </span>
            <span className="font-semibold">Watch our company video</span>
          </span>
        </button>
      )}
    </div>
  );
}
