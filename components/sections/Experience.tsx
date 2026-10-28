import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { services } from "@/data/site";
import { CONTAINER, pad } from "@/lib/utils";

export default function Experience({ index = "02" }: { index?: string }) {
  return (
    <section id="experience" className="border-b border-line py-20 md:py-32">
      <div className={CONTAINER}>
        <SectionHeader index={index} label="Services" lines={["What I", { text: "Do.", italic: true }]} />
        <Reveal stagger className="border-t border-line">
          {services.map((service, i) => (
            <article key={service.title} className="grid grid-cols-12 items-baseline gap-4 border-b border-line py-6 md:gap-6 md:py-8">
              <span className="col-span-1 font-mono text-[10px] text-muted">{pad(i + 1)}</span>
              <h3 className="col-span-11 text-2xl font-black uppercase tracking-tight md:col-span-4 md:text-4xl">
                {service.title}
              </h3>
              <p className="col-span-11 col-start-2 max-w-2xl text-sm leading-relaxed text-muted md:col-span-6 md:col-start-7 md:text-base">
                {service.text}
              </p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
