"use client";

import { AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Suspense, useCallback, useMemo, useState } from "react";
import ReelCard from "@/components/ui/ReelCard";
import ReelsPlayer from "@/components/ui/ReelsPlayer";
import Reveal from "@/components/ui/Reveal";
import type { Reel } from "@/data/projects";
import { cn } from "@/lib/utils";

type Props = { reels: Reel[]; showViewToggle?: boolean };

function setParams(entries: Record<string, string | null>) {
  const url = new URL(window.location.href);
  for (const [k, v] of Object.entries(entries)) {
    if (v) url.searchParams.set(k, v);
    else url.searchParams.delete(k);
  }
  window.history.replaceState(window.history.state, "", url);
}

function View({ reels, showViewToggle = true, initialPlayer, initialIndex }: Props & { initialPlayer: boolean; initialIndex: number }) {
  const [player, setPlayer] = useState<number | null>(initialPlayer ? initialIndex : null);
  const [category, setCategory] = useState<"all" | Reel["category"]>("all");
  const visibleReels = useMemo(
    () => (category === "all" ? reels : reels.filter((reel) => reel.category === category)),
    [category, reels],
  );

  const open = (i: number) => {
    if (!visibleReels[i]) return;
    setPlayer(i);
    setParams({ view: "player", reel: visibleReels[i].id });
  };
  const close = useCallback(() => {
    setPlayer(null);
    setParams({ view: null, reel: null });
  }, []);
  const onIndex = useCallback((i: number) => setParams({ reel: visibleReels[i]?.id ?? null }), [visibleReels]);

  const tab = (on: boolean) =>
    cn(
      "rounded-full px-4 py-2 font-mono text-[10px] uppercase tracking-widest transition-colors",
      on ? "bg-fg text-bg" : "text-muted hover:text-fg",
    );

  return (
    <>
      <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <div role="group" aria-label="Filter reels" className="flex flex-wrap gap-1 rounded-full border border-line p-1">
            {(["all", "social", "motion"] as const).map((value) => (
              <button
                key={value}
                type="button"
                aria-pressed={category === value}
                onClick={() => setCategory(value)}
                className={tab(category === value)}
              >
                {value === "all" ? "All" : value === "social" ? "Social" : "Motion"}
              </button>
            ))}
          </div>
          {showViewToggle && (
            <div role="tablist" aria-label="View" className="flex rounded-full border border-line p-1">
              <button type="button" role="tab" aria-selected={player === null} onClick={close} className={tab(player === null)}>
                Grid
              </button>
              <button type="button" role="tab" aria-selected={player !== null} onClick={() => open(player ?? 0)} className={tab(player !== null)}>
                Player
              </button>
            </div>
          )}
        </div>
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted">{visibleReels.length} edits · Select to play</p>
      </div>

      {/* CSS-columns masonry; reels carry mixed aspect ratios */}
      <div className="columns-2 gap-4 md:columns-3 md:gap-6 lg:columns-4">
        {visibleReels.map((reel, i) => (
          <Reveal key={reel.id} className="mb-4 break-inside-avoid md:mb-6">
            <ReelCard reel={reel} index={i} natural onOpen={() => open(i)} />
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {player !== null && <ReelsPlayer key="player" reels={visibleReels} start={player} onIndex={onIndex} onClose={close} />}
      </AnimatePresence>
    </>
  );
}

function WithParams({ reels, showViewToggle = true }: Props) {
  const params = useSearchParams();
  const index = Math.max(0, reels.findIndex((r) => r.id === params.get("reel")));
  return <View reels={reels} showViewToggle={showViewToggle} initialPlayer={params.get("view") === "player"} initialIndex={index} />;
}

/** /reels: masonry grid ⇄ full-screen vertical player (?view=player&reel=id is shareable). */
export default function ReelsView({ reels, showViewToggle = true }: Props) {
  return (
    <Suspense fallback={<View reels={reels} showViewToggle={showViewToggle} initialPlayer={false} initialIndex={0} />}>
      <WithParams reels={reels} showViewToggle={showViewToggle} />
    </Suspense>
  );
}
