"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { instagramProfileUrl, instagramReels } from "@/data/instagram";
import { CONTAINER } from "@/lib/utils";

export default function InstagramShowcase() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting && entry.intersectionRatio >= 0.45);
        if (visible.length === 0) return;

        const viewportCenter = track.getBoundingClientRect().left + track.clientWidth / 2;
        const current = visible.sort((a, b) => {
          const aCenter = a.boundingClientRect.left + a.boundingClientRect.width / 2;
          const bCenter = b.boundingClientRect.left + b.boundingClientRect.width / 2;
          return Math.abs(aCenter - viewportCenter) - Math.abs(bCenter - viewportCenter);
        })[0];
        const index = Number((current.target as HTMLElement).dataset.reelIndex);
        setActiveIndex(index);
      },
      { root: track, threshold: [0.45, 0.7] },
    );

    for (const card of cardRefs.current) {
      if (card) observer.observe(card);
    }

    return () => observer.disconnect();
  }, []);

  const goTo = (index: number) => {
    const boundedIndex = Math.max(0, Math.min(instagramReels.length - 1, index));
    cardRefs.current[boundedIndex]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  };

  return (
    <section id="instagram" className="scroll-mt-20 border-b border-line py-20 md:py-32">
      <div className={CONTAINER}>
        <SectionHeader
          index="03"
          label="Instagram · Public Reels"
          lines={["Stories in", { text: "Motion.", italic: true }]}
          aside={
            <Link
              href={instagramProfileUrl}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[11px] uppercase tracking-widest text-muted transition-colors duration-300 hover:text-accent"
            >
              @visual_cinema.4x ↗
            </Link>
          }
        />

        <div className="mb-5 flex items-end justify-between gap-4">
          <p className="max-w-md text-sm leading-relaxed text-muted md:text-base">
            Selected public Reels from Instagram. Open any thumbnail to watch the original post.
          </p>
          <div className="hidden shrink-0 font-mono text-[10px] uppercase tracking-widest text-muted sm:block" aria-live="polite">
            {String(activeIndex + 1).padStart(2, "0")} <span className="text-accent">/</span> {String(instagramReels.length).padStart(2, "0")}
          </div>
        </div>

        <div
          ref={trackRef}
          role="region"
          aria-label="Instagram Reels carousel"
          aria-roledescription="carousel"
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-3"
        >
          {instagramReels.map((shortcode, index) => (
            <article
              key={shortcode}
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
              data-reel-index={index}
              role="group"
              aria-roledescription="slide"
              aria-label={`Instagram Reel ${index + 1} of ${instagramReels.length}`}
              className="w-[min(82vw,360px)] shrink-0 snap-start"
            >
              <Link
                href={`https://www.instagram.com/reel/${shortcode}/`}
                target="_blank"
                rel="noreferrer"
                aria-label={`Watch Instagram Reel ${index + 1} on Instagram (opens in a new tab)`}
                className="group relative isolate block aspect-[9/16] overflow-hidden border border-line bg-bg-soft"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 scale-110 bg-cover bg-center opacity-45 blur-2xl"
                  style={{ backgroundImage: `url('/instagram/${shortcode}.jpg')` }}
                />
                <Image
                  src={`/instagram/${shortcode}.jpg`}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 82vw, 360px"
                  className="z-10 object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-b from-black/25 via-transparent to-black/55"
                />
                <span className="absolute left-4 top-4 z-30 font-mono text-[10px] uppercase tracking-widest text-white/90">
                  Instagram Reel · {String(index + 1).padStart(2, "0")}
                </span>
                <span className="pointer-events-none absolute inset-0 z-30 grid place-items-center">
                  <span className="grid size-14 place-items-center rounded-full border border-white/60 bg-black/35 pl-1 text-xl text-white backdrop-blur-sm transition duration-300 group-hover:scale-110 group-hover:border-accent group-hover:text-accent">
                    ▶
                  </span>
                </span>
              </Link>
              <Link
                href={`https://www.instagram.com/reel/${shortcode}/`}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted transition-colors hover:text-accent"
              >
                Open original <span aria-hidden>↗</span>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-line pt-5">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted sm:hidden" aria-live="polite">
            {String(activeIndex + 1).padStart(2, "0")} / {String(instagramReels.length).padStart(2, "0")}
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-widest text-muted sm:block">
            Swipe or use arrows to explore
          </span>
          <div className="ml-auto flex gap-2">
            <button
              type="button"
              aria-label="Previous Instagram Reel"
              onClick={() => goTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="grid size-11 place-items-center rounded-full border border-line font-mono text-lg text-fg transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-35"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next Instagram Reel"
              onClick={() => goTo(activeIndex + 1)}
              disabled={activeIndex === instagramReels.length - 1}
              className="grid size-11 place-items-center rounded-full border border-line font-mono text-lg text-fg transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-35"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
