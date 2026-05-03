/**
 * One-off generator: writes content/portfolio.json from current TS data modules.
 * Run: pnpm exec tsx --tsconfig tsconfig.scripts.json src/scripts/portfolio-dump.ts
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { AWARDS } from "../features/portfolio/data/awards";
import { BOOKMARKS } from "../features/portfolio/data/bookmarks";
import { CERTIFICATIONS } from "../features/portfolio/data/certifications";
import { EXPERIENCES } from "../features/portfolio/data/experiences";
import { PROJECTS } from "../features/portfolio/data/projects";
import { RECENT_PRS } from "../features/portfolio/data/recent-prs";
import { TECH_STACK } from "../features/portfolio/data/tech-stack";
import {
  TESTIMONIALS_1,
  TESTIMONIALS_2,
} from "../features/portfolio/data/testimonials";
import { USER } from "../features/portfolio/data/user";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "../..");
const outPath = join(root, "content", "portfolio.json");

const socialLinks = [
  { icon: "github", title: "GitHub", href: "https://github.com/Athaxv" },
  { icon: "twitter", title: "Twitter", href: "https://x.com/Athaxv05" },
  {
    icon: "linkedin",
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/athaxv/",
  },
  { icon: "onlyfans", title: "OnlyFans", href: "/onlyfans" },
] as const;

const payload = {
  version: 1,
  user: USER,
  projects: PROJECTS,
  experiences: EXPERIENCES,
  socialLinks,
  awards: AWARDS,
  certifications: CERTIFICATIONS,
  techStack: TECH_STACK,
  testimonials1: TESTIMONIALS_1,
  testimonials2: TESTIMONIALS_2,
  bookmarks: BOOKMARKS,
  recentPrs: RECENT_PRS,
};

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
console.log(`Wrote ${outPath}`);
