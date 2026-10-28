export type Project = {
  id: string;
  title: string;
  /** Matches a category id in data/categories.ts */
  category: string;
  year: number;
  client: string;
  role: string;
  tools: string[];
  duration: string;
  description: string;
  /** Empty until real footage is uploaded — the player shows a placeholder. */
  videoUrl: string;
  /** Empty until real stills exist — cards fall back to a gradient. */
  thumbnail: string;
  featured?: boolean;
  /** Per-project hover accent: glow, timecode, arrow. */
  accentColor: string;
  /** 90% of the work is 9:16 — vertical is the default. */
  orientation: "vertical" | "horizontal";
  /** Credits shown as badges. `edited` defaults to true when omitted. */
  filmed?: boolean;
  directed?: boolean;
  edited?: boolean;
  /** Free-form keywords (search, AI suggestions). */
  tags?: string[];
  /** Whether `thumbnail` was grabbed from the video or uploaded by hand. */
  thumbnailSource?: "auto" | "manual";
  /** ISO timestamp, set by the admin when the project is created. */
  createdAt?: string;
};

export type ProjectCredits = { filmed: boolean; directed: boolean; edited: boolean };

/** Resolved credits with defaults applied (edited unless explicitly false). */
export function projectCredits(p: Pick<Project, "filmed" | "directed" | "edited">): ProjectCredits {
  return { filmed: Boolean(p.filmed), directed: Boolean(p.directed), edited: p.edited !== false };
}

export const projects: Project[] = [
  {
    id: "be-happy",
    accentColor: "#37d67a",
    orientation: "vertical",
    title: "Be happy",
    category: "sports",
    year: 2026,
    client: "myself",
    role: "Editor",
    tools: [],
    duration: "00:30",
    description: "",
    videoUrl: "",
    thumbnail: "",
    filmed: true,
    directed: true,
    edited: true,
    createdAt: "2026-10-05T13:29:46.642Z",
  },
];

export type Reel = {
  id: string;
  title: string;
  category: "social" | "motion";
  /** Tailwind aspect class — varied for the masonry layout on /reels */
  aspect: "aspect-[9/16]" | "aspect-[4/5]" | "aspect-[3/4]";
  duration: string;
  /** Optional footage for the /reels player; a placeholder plays when empty. */
  videoUrl?: string;
  poster?: string;
  filmed?: boolean;
  directed?: boolean;
  edited?: boolean;
};

export const reels: Reel[] = [
  { id: "r1", title: "Short-form edit 01", category: "social", aspect: "aspect-[9/16]", duration: "00:14" },
  { id: "r2", title: "Short-form edit 02", category: "social", aspect: "aspect-[4/5]", duration: "00:22" },
  { id: "r3", title: "Short-form edit 03", category: "social", aspect: "aspect-[9/16]", duration: "00:09" },
  { id: "r4", title: "Short-form edit 04", category: "social", aspect: "aspect-[3/4]", duration: "00:18" },
  { id: "r5", title: "Short-form edit 05", category: "social", aspect: "aspect-[9/16]", duration: "00:31" },
  { id: "r6", title: "AI motion study", category: "motion", aspect: "aspect-[4/5]", duration: "00:12" },
  { id: "r7", title: "Short-form edit 06", category: "social", aspect: "aspect-[9/16]", duration: "00:16" },
  { id: "r8", title: "Short-form edit 07", category: "social", aspect: "aspect-[3/4]", duration: "00:27" },
];

export const verticalProjects = projects.filter((p) => p.orientation === "vertical");
export const horizontalProjects = projects.filter((p) => p.orientation === "horizontal");

export function getProject(category: string, id: string): Project | undefined {
  return projects.find((p) => p.category === category && p.id === id);
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((p) => p.category === category);
}

export function projectHref(project: Project): string {
  return `/work/${project.category}/${project.id}`;
}
