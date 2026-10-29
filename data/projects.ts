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
  category: "talking-head" | "travel";
  /** Tailwind aspect class — varied for the masonry layout on /reels */
  aspect: "aspect-[9/16]" | "aspect-[4/5]" | "aspect-[3/4]" | "aspect-square" | "aspect-video";
  duration?: string;
  /** Optional footage for the /reels player; a placeholder plays when empty. */
  videoUrl?: string;
  /** Google Drive ID for videos played in Drive's embedded player. */
  driveId?: string;
  poster?: string;
  filmed?: boolean;
  directed?: boolean;
  edited?: boolean;
};

const driveReel = (
  category: Reel["category"],
  number: number,
  driveId: string,
  duration: string | undefined,
  aspect: Reel["aspect"],
): Reel => ({
  id: `${category}-${String(number).padStart(2, "0")}`,
  title: `${category === "talking-head" ? "Talking Head" : "Travel"} ${String(number).padStart(2, "0")}`,
  category,
  aspect,
  ...(duration ? { duration } : {}),
  driveId,
  poster: `https://lh3.googleusercontent.com/d/${driveId}=w640`,
});

const talkingHeadReels = [
  driveReel("talking-head", 1, "1zbW_p9UwFdrV_ttRlgFL5XeKfo9ihT6A", "00:29", "aspect-[9/16]"),
  driveReel("talking-head", 2, "1czytlSAab3x2CYk4ztynMzDAyugX5a1c", "00:26", "aspect-[9/16]"),
  driveReel("talking-head", 3, "13ZSP5Q9GCmNbu4N78kR39Lg5jVAQgQCW", "00:35", "aspect-[9/16]"),
  driveReel("talking-head", 4, "1ecqiSkMMvlvG5BlK9kR4KTn5FxTxX853", "00:20", "aspect-[9/16]"),
  driveReel("talking-head", 5, "1Z_n9oRTEWZXKkdYWftQL_OXUWCtce5Q_", "00:11", "aspect-[9/16]"),
  driveReel("talking-head", 6, "1MzLiqQTWfFiUGILCE2oB6X9cRpzw1hGS", "00:17", "aspect-[9/16]"),
  driveReel("talking-head", 7, "1H4_yQ_GJaLbdN5YrCq2yrbwu37IVp90Y", "00:38", "aspect-[9/16]"),
  driveReel("talking-head", 8, "1n2JDs4iGvExYOSyN1l9GF_GZniePHPr-", undefined, "aspect-[9/16]"),
  driveReel("talking-head", 9, "1R10nn8G3irCrK664QIrIEwsmW-e9c0Uw", "00:19", "aspect-[9/16]"),
  driveReel("talking-head", 10, "1OJZYu2HAPYHYeL4NcHJv3qHQ1jbtAiSK", undefined, "aspect-[9/16]"),
  driveReel("talking-head", 11, "1hDC7hfms-cma8RuSMYMp2jAzPwD4edpL", undefined, "aspect-[9/16]"),
  driveReel("talking-head", 12, "1sX5u2aGnKGruOOBXYmGBKpGQi0MBGPvL", undefined, "aspect-[9/16]"),
  driveReel("talking-head", 13, "1A6DFDC_oR1scYTZQtVlqVPUdZIphyHKt", "00:34", "aspect-[9/16]"),
  driveReel("talking-head", 14, "1NmfMNvcW3hKgzXL5idkCza_gxztB2xSQ", "00:22", "aspect-[9/16]"),
];

const travelReels = [
  driveReel("travel", 1, "1LUKij-JXvcjTvf8dof9sRx-tuJIRHWib", "00:28", "aspect-video"),
  driveReel("travel", 2, "1kWLrJh6ojpcs48uNXZCFw-ou2G8coEuf", "00:29", "aspect-square"),
  driveReel("travel", 3, "15d9AkMIm1tzGMmFQrvpTdCIA_Xej3kKi", "00:27", "aspect-video"),
  driveReel("travel", 4, "1lXo7IvsawaNkCvssV7ai4Yq4pG-QkIHi", "00:13", "aspect-[9/16]"),
  driveReel("travel", 5, "1qGzvtlE3ceNllCljmrcTdu8XQpJALIHJ", "00:11", "aspect-video"),
  driveReel("travel", 6, "16oDiIlm3xTvJt2kbKfNGjs5mp7655gil", "00:21", "aspect-video"),
  driveReel("travel", 7, "1u_E2vc98lVsnT9OTgqMhXlxFnGjTm0ld", "00:17", "aspect-[9/16]"),
  driveReel("travel", 8, "1Z-Lsg7VP8XbMsB2VG8mrwWor5FXODL1f", "00:19", "aspect-[9/16]"),
  driveReel("travel", 9, "1PoGkupe61NgDcgPyF0-TSya4DbtcIkYW", "00:14", "aspect-[9/16]"),
  driveReel("travel", 10, "10y6_dNh9le5kmZ5HO92pGQQpLWOHdkDX", "00:13", "aspect-[9/16]"),
  driveReel("travel", 11, "1mdi9iorv43dZpZOVlDsjgRi8xNStI9Lj", undefined, "aspect-video"),
  driveReel("travel", 12, "1vyvdCHJsoYiJO2TklMFgMh_OaPVKkB7Z", "00:07", "aspect-[9/16]"),
];

export const reels: Reel[] = [...talkingHeadReels, ...travelReels];

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
