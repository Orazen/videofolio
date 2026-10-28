import Marquee from "@/components/ui/Marquee";
import Reveal from "@/components/ui/Reveal";
import { stats as allStats, tools } from "@/data/site";
import { CONTAINER, cn } from "@/lib/utils";

/** Stats with no value configured are hidden rather than shown as blanks. */
const stats = allStats.filter((s) => s.value.trim() !== "");

export default function About({ index = "01" }: { index?: string }) {
  return (
    <section id="about" className="border-b border-line pt-20 md:pt-32">
      <div className={cn(CONTAINER, "grid grid-cols-12 gap-x-6 gap-y-16 pb-20 md:pb-32")}>
        <div className="col-span-12 lg:col-span-5">
          <Reveal stagger className="lg:sticky lg:top-32">
            <p className="mb-6 font-mono text-[11px] uppercase tracking-widest text-muted">
              ({index}) About
            </p>
            <h2 className="text-[clamp(3rem,7vw,7rem)] font-black uppercase leading-[0.9] tracking-tight">
              <span className="block">Cut with</span>
              <span className="block pr-[0.06em] italic text-accent">intent.</span>
            </h2>
          </Reveal>
        </div>

        <div className="col-span-12 lg:col-span-6 lg:col-start-7">
          <Reveal stagger className="flex max-w-xl flex-col gap-6 text-lg leading-relaxed text-muted">
            <p>
              I&apos;m Vijay Charan, a video editor and content creator focused on social-first
              storytelling and clear, purposeful cuts.
            </p>
            <p>
              Every edit starts with the story: finding the opening that earns attention,
              shaping a pace that holds it, and making each frame feel considered.
            </p>
            <p>
              I work across editing, color, motion and delivery, carrying a consistent point
              of view from the first assembly through the final export.
            </p>
            <p className="text-fg">
              I also explore AI-assisted visuals as another part of the creative toolkit,
              guided by the same attention to rhythm and detail.
            </p>
          </Reveal>

          {stats.length > 0 && (
            <Reveal stagger className="mt-16 grid grid-cols-3 border-y border-line">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={cn("py-8", i < stats.length - 1 && "border-r border-line", i > 0 && "pl-4 md:pl-8")}
                >
                  <p className="text-[clamp(2.25rem,5vw,4.5rem)] font-black leading-none tracking-tight">
                    {stat.value}
                  </p>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </Reveal>
          )}
        </div>
      </div>

      <Marquee
        items={tools}
        speed={45}
        direction="right"
        separator="/"
        separatorClassName="text-muted"
        className="border-t border-line py-6"
        itemClassName="font-mono text-sm uppercase tracking-widest text-muted duration-300 hover:text-fg md:text-base"
      />
    </section>
  );
}
