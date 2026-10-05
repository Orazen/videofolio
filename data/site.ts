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