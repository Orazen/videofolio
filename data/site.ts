/**
 * Template configuration — edit this file to make the site yours.
 * Everything brand-related lives here so a fork only needs one file changed.
 */
export const site = {
  name: "Vijay Charan",
  email: "hello@example.com",
  location: "Your City",
  role: "Video Editor & Content Creator",
} as const;

/** Replace each href with your real profile URL, or delete the entry. */
export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/vijaycharan_04/" },
  { label: "Visual Cinema", href: "https://www.instagram.com/visual_cinema.4x/" },
  { label: "Vimeo", href: "#" },
  { label: "Behance", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "X", href: "#" },
] as const;

export const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Reels", href: "/reels" },
  { label: "AI", href: "/ai" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const roles = [
  { label: "Video Editor", icon: "✦" },
  { label: "Colorist", icon: "◉" },
  { label: "Motion Designer", icon: "▣" },
  { label: "Content Creator", icon: "⬢" },
  { label: "AI Video Artist", icon: "◆" },
  { label: "Reel Maker", icon: "✧" },
];

/**
 * Career stats shown on /about.
 *
 * These ship empty on purpose. Never publish a number you can't back up —
 * leave `value` blank and that tile is hidden rather than showing a
 * placeholder. Fill in real figures for your own career.
 */
export const stats = [
  { value: "", label: "Views" },
  { value: "", label: "Clients" },
  { value: "", label: "Years" },
];

/**
 * Career timeline on /about, oldest first. Empty array hides the section
 * entirely. Only list milestones that actually happened to you.
 */
export const timeline: { year: string; text: string }[] = [];

/** Services list on /about. */
export const services = [
  { title: "Editing", text: "Story-first offline and online edits for film, broadcast and social." },
  { title: "Color", text: "Grading in DaVinci Resolve — from natural to heavily stylised looks." },
  { title: "Motion", text: "Titles, typography and graphics in After Effects." },
  { title: "Content", text: "Concept-to-delivery social content packages, vertical-first." },
  { title: "AI Direction", text: "Generative sequences directed, curated and finished like live action." },
];

/** Starter tool list for the About page marquee — swap for your own. */
export const tools = [
  "Premiere Pro",
  "After Effects",
  "DaVinci Resolve",
  "Figma",
  "Midjourney",
  "Runway",
  "Sora",
  "Kling",
  "ElevenLabs",
];