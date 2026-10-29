"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { instagramProfileUrl, instagramReels } from "@/data/instagram";
import { CONTAINER } from "@/lib/utils";

export default function InstagramShowcase() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadedIndices, setLoadedIndices] = useState<Set<number>>(() => new Set([0, 1]));

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
        setLoadedIndices((previous) => {
          const next = new Set(previous);
          for (const entry of visible) {
            const visibleIndex = Number((entry.target as HTMLElement).dataset.reelIndex);
            for (const neighbor of [visibleIndex - 1, visibleIndex, visibleIndex + 1]) {
              if (neighbor >= 0 && neighbor < instagramReels.length) next.add(neighbor);
            }
          }
          return next;
        });
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
          index="06"
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
            Selected public Reels, embedded from Instagram. Open any post to watch it on the original profile.
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
              <div className="overflow-hidden border border-line bg-bg-soft">
                {loadedIndices.has(index) ? (
                  <iframe
                    src={`https://www.instagram.com/reel/${shortcode}/embed/`}
                    title={`Instagram Reel ${index + 1} from Visual Cinema`}
                    loading="lazy"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="h-[580px] w-full border-0 bg-bg-soft"
                  />
                ) : (
                  <div className="flex h-[580px] flex-col items-center justify-center gap-4 bg-bg-soft px-6 text-center">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                      Public Reel · {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-4xl font-light text-fg/30">▶</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                      Scroll to load Instagram post
                    </span>
                  </div>
                )}
              </div>
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
