import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import About from "@/components/sections/About";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { categories } from "@/data/categories";
import { services as siteServices, timeline as siteTimeline } from "@/data/site";
import { CONTAINER, pad } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: "The story and services behind the studio.",
  path: "/about",
});

const services = siteServices;

const timeline = siteTimeline;

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="(About) Studio of one"
        title={
          <>
            Cut with
            <br />
            intent.
          </>
        }
        description="A one-person studio covering edit, color, motion and AI under one roof."
        meta="Available worldwide"
      />

      <About index="01" />

      <section id="services" className="border-b border-line py-20 md:py-32">
        <div className={CONTAINER}>
          <p className="mb-12 font-mono text-[11px] uppercase tracking-widest text-muted">(02) Services</p>
          <Reveal stagger className="border-t border-line">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="grid grid-cols-12 items-baseline gap-6 border-b border-line py-8 md:py-10"
              >
                <span className="col-span-2 font-mono text-[11px] text-muted md:col-span-1">{pad(i + 1)}</span>
                <h3 className="col-span-10 text-3xl font-black uppercase tracking-tight md:col-span-5 md:text-5xl">
                  {s.title}
                </h3>
                <p className="col-span-12 max-w-md text-base leading-relaxed text-muted md:col-span-6">
                  {s.text}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {timeline.length > 0 && (
        <section id="timeline" className="border-b border-line py-20 md:py-32">
          <div className={CONTAINER}>
            <p className="mb-12 font-mono text-[11px] uppercase tracking-widest text-muted">(03) Timeline</p>
            <Reveal stagger className="grid grid-cols-1 gap-y-10 md:grid-cols-5 md:gap-x-6">
              {timeline.map((t) => (
                <div key={t.year} className="border-t border-line pt-6">
                  <p className="text-4xl font-black tracking-tight">{t.year}</p>
                  <p className="mt-4 text-base leading-relaxed text-muted">{t.text}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      <section id="fields" className="py-20 md:py-32">
        <div className={CONTAINER}>
          <p className="mb-12 font-mono text-[11px] uppercase tracking-widest text-muted">(04) Fields</p>
          <Reveal>
            <p className="max-w-5xl text-[clamp(2rem,5vw,4.5rem)] font-black uppercase leading-[1.05] tracking-tight">
              {categories.map((c, i) => (
                <span key={c.id}>
                  {c.name}
                  {i < categories.length - 1 && <span className="text-muted"> / </span>}
                </span>
              ))}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
