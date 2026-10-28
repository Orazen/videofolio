import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageHeader from "@/components/ui/PageHeader";
import ReelsView from "@/components/ui/ReelsView";
import { reels } from "@/data/projects";
import { CONTAINER, cn } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "Reels",
  description: "A short-form video reel gallery by Vijay Charan.",
  path: "/reels",
});

export default function ReelsPage() {
  return (
    <>
      <PageHeader
        label="(05) Social · Motion"
        title="Reels"
        description="A selection of short-form edits and motion explorations."
        meta="Social · Motion"
      />
      <section id="reels" className={cn(CONTAINER, "pb-24 md:pb-40")}>
        <ReelsView reels={reels} />
      </section>
    </>
  );
}
