import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageHeader from "@/components/ui/PageHeader";
import ReelsView from "@/components/ui/ReelsView";
import { reels } from "@/data/projects";
import { CONTAINER, cn } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "Video Collection",
  description: "Talking head videos and travel edits by Vijay Charan.",
  path: "/reels",
});

export default function ReelsPage() {
  return (
    <>
      <PageHeader
        label="(05) Talking Head · Travel"
        title="Video Collection"
        description="Talking head edits and travel videos, collected in one place."
        meta="Talking Head · Travel"
      />
      <section id="reels" className={cn(CONTAINER, "pb-24 md:pb-40")}>
        <ReelsView reels={reels} />
      </section>
    </>
  );
}
