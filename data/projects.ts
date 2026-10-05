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
    id: "project-01",
    accentColor: "#e7fe55",
    orientation: "horizontal",
    title: "Project 01",
    category: "ai",
    year: 2026,
    client: "Client Name",
    role: "AI Director, Editor",
    tools: ["HIGGSFIELD"],
    duration: "01:02",
    description: "",
    videoUrl: "",
    thumbnail: "",
    featured: true,
    filmed: true,
    directed: true,
    edited: true,
    tags: ["tag", "video"],
    thumbnailSource: "auto",
  },


  {
    id: "project-02",
    accentColor: "#e7fe55",
    orientation: "vertical",
    title: "Project 02",
    category: "ai",
    year: 2026,
    client: "Client Name",
    role: "Editor",
    tools: ["HIGGSFIELD", "Premiere Pro", "After Effects"],
    duration: "00:18",
    description: "",
    videoUrl: "",
    thumbnail: "",
    featured: true,
    filmed: false,
    directed: true,
    edited: true,
    thumbnailSource: "auto",
    createdAt: "2026-09-30T15:48:04.982Z",
  },


  {
    id: "project-03",
    accentColor: "#e7fe55",
    orientation: "vertical",
    title: "Project 03",
    category: "automotive",
    year: 2026,
    client: "Client Name",
    role: "Editor",
    tools: ["HIGGSFIELD", "Premiere Pro", "After Effects"],
    duration: "00:18",
    description: "",
    videoUrl: "",
    thumbnail: "",
    filmed: false,
    directed: true,
    edited: true,
    thumbnailSource: "auto",
    createdAt: "2026-10-02T01:33:46.163Z",
  },


  {
    id: "project-04",
    accentColor: "#e7fe55",
    orientation: "vertical",
    title: "Project 04",
    category: "restaurants",
    year: 2026,
    client: "Client Name",
    role: "Editor+DIRECTING+SHOOTING",
    tools: ["Premiere Pro"],
    duration: "00:28",
    description: "",
    videoUrl: "",
    thumbnail: "",
    featured: true,
    filmed: true,
    directed: true,
    edited: true,
    thumbnailSource: "auto",
  },


  {
    id: "project-05",
    accentColor: "#e7fe55",
    orientation: "horizontal",
    title: "Project 05",
    category: "sports",
    year: 2026,
    client: "Client Name",
    role: "Editor",
    tools: ["Premiere Pro"],
    duration: "01:42",
    description: "",
    videoUrl: "",
    thumbnail: "",
    featured: true,
    filmed: false,
    directed: false,
    edited: true,
    tags: ["tag", "video"],
    thumbnailSource: "auto",
    createdAt: "2026-09-30T14:40:16.046Z",
  },


  {
    id: "project-06",
    accentColor: "#e7fe55",
    orientation: "vertical",
    title: "Project 06",
    category: "restaurants",
    year: 2026,
    client: "Client Name",
    role: "Editor",
    tools: ["Premiere Pro-Aftereffects"],
    duration: "00:17",
    description: "",
    videoUrl: "",
    thumbnail: "",
    featured: true,
    filmed: true,
    directed: false,
    edited: true,
  },


  {
    id: "project-07",
    accentColor: "#e7fe55",
    orientation: "vertical",
    title: "Project 07",
    category: "restaurants",
    year: 2026,
    client: "Client Name",
    role: "Editor",
    tools: [],
    duration: "00:19",
    description: "",
    videoUrl: "",
    thumbnail: "",
    featured: true,
  },


  {
    id: "project-08",
    accentColor: "#e7fe55",
    orientation: "vertical",
    title: "Project 08",
    category: "sports",
    year: 2026,
    client: "Client Name",
    role: "Editor",
    tools: ["Premiere Pro"],
    duration: "00:32",
    description: "",
    videoUrl: "",
    thumbnail: "",
    filmed: false,
    directed: false,
    edited: true,
    thumbnailSource: "auto",
    createdAt: "2026-10-02T01:40:48.063Z",
  },


  {
    id: "project-09",
    accentColor: "#e7fe55",
    orientation: "vertical",
    title: "Project 09",
    category: "tours",
    year: 2025,
    client: "Client Name",
    role: "Editor",
    tools: ["Premiere Pro", "After Effects"],
    duration: "00:55",
    description: "",
    videoUrl: "",
    thumbnail: "",
    filmed: false,
    directed: true,
    edited: true,
    tags: ["tag", "video"],
    thumbnailSource: "auto",
    createdAt: "2026-10-02T01:41:14.030Z",
  },

];

export type Reel = {
  id: string;
  title: string;
  views: string;
  client: string;
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
  { id: "r1", title: "Match Day", views: "2.4M", client: "Stride", aspect: "aspect-[9/16]", duration: "00:14" },
  { id: "r2", title: "First Bite", views: "1.1M", client: "Ember Kitchen", aspect: "aspect-[4/5]", duration: "00:22" },
  { id: "r3", title: "Drop 03", views: "860K", client: "Maison Noor", aspect: "aspect-[9/16]", duration: "00:09" },
  { id: "r4", title: "Zero to 100", views: "3.2M", client: "Velocity", aspect: "aspect-[3/4]", duration: "00:18" },
  { id: "r5", title: "Room Tour", views: "540K", client: "Horizon", aspect: "aspect-[9/16]", duration: "00:31" },
  { id: "r6", title: "AI Morph", views: "1.8M", client: "Self", aspect: "aspect-[4/5]", duration: "00:12" },
  { id: "r7", title: "Pour Over", views: "720K", client: "Bloom Coffee", aspect: "aspect-[9/16]", duration: "00:16" },
  { id: "r8", title: "Behind the Cut", views: "410K", client: "Self", aspect: "aspect-[3/4]", duration: "00:27" },
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
