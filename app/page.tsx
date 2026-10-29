import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import InstagramShowcase from "@/components/sections/InstagramShowcase";
import SelectedWork from "@/components/sections/SelectedWork";
import Marquee from "@/components/ui/Marquee";
import ReelsView from "@/components/ui/ReelsView";
import SectionHeader from "@/components/ui/SectionHeader";
import { reels } from "@/data/projects";
import { roles } from "@/data/site";
import { CONTAINER } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee
        items={roles.map((role) => role.label)}
        speed={70}
        separator="✦"
        separatorClassName="text-[0.6em] text-accent"
        alternateItalic
        className="border-y border-line py-6"
        itemClassName="pr-[0.06em] text-2xl font-medium uppercase tracking-tight text-fg/60 duration-150 hover:italic hover:text-accent md:text-3xl"
      />
      <About index="01" />
      <Experience index="02" />
      <SelectedWork />
      <section id="reels" className="border-b border-line bg-bg-soft py-20 md:py-32">
        <div className={CONTAINER}>
          <SectionHeader index="05" label="Talking Head · Travel" lines={["Video", { text: "Collection.", italic: true }]} />
          <ReelsView reels={reels} showViewToggle={false} />
        </div>
      </section>
      <InstagramShowcase />
      <Contact />
    </>
  );
}
