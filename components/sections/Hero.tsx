import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/data/site";
import { CONTAINER } from "@/lib/utils";

export default function Hero() {
  const [firstName, ...restName] = site.name.split(" ");
  const lastName = restName.join(" ");

  return (
    <section id="home" className="flex min-h-svh items-center border-b border-line pt-16">
      <div className={`${CONTAINER} py-20 text-center md:py-28`}>
        <Reveal>
          <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            <span className="size-1.5 rounded-full bg-accent" />
            {site.role}
          </p>
        </Reveal>
        <Reveal y={60} duration={0.9}>
          <h1 className="mx-auto max-w-[1200px] text-[clamp(4rem,14vw,12rem)] font-black uppercase leading-[0.78] tracking-[-0.075em]">
            <span className="block">{firstName}</span>
            {lastName && <span className="block pr-[0.07em] pt-3 italic text-accent md:pt-5">{lastName}.</span>}
          </h1>
        </Reveal>
        <Reveal delay={0.12} className="mx-auto mt-10 max-w-xl">
          <p className="text-base leading-relaxed text-muted md:text-lg">
            Social-first edits for brands and creators, shaped around story, rhythm, and detail.
          </p>
        </Reveal>
        <Reveal delay={0.2} className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#work"
            data-track="cta"
            data-track-id="hero_view_work"
            className="rounded-full bg-accent px-6 py-3 font-mono text-[10px] font-bold uppercase tracking-widest text-bg transition-transform hover:-translate-y-0.5"
          >
            View work <span aria-hidden>↘</span>
          </Link>
          <Link
            href="#reels"
            data-track="cta"
            data-track-id="hero_showreel"
            className="rounded-full border border-line px-6 py-3 font-mono text-[10px] uppercase tracking-widest transition-colors hover:border-accent hover:text-accent"
          >
            Watch reels <span aria-hidden>↗</span>
          </Link>
        </Reveal>
        <Reveal delay={0.26} className="mt-16 flex items-center justify-center gap-3 font-mono text-[10px] uppercase tracking-widest text-muted">
          <span>{site.location}</span>
          <span className="size-1 rounded-full bg-accent" />
          <span>Available worldwide</span>
        </Reveal>
      </div>
    </section>
  );
}
