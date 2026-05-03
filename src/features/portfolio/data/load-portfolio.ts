import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

import { Icons } from "@/components/icons";

import portfolioJson from "../../../../content/portfolio.json";
import type { SocialLink } from "../types/social-links";
import type { User } from "../types/user";
import { type PortfolioJson, portfolioJsonSchema } from "./portfolio.schema";

const SOCIAL_ICON_MAP = {
  github: GithubIcon,
  twitter: TwitterIcon,
  linkedin: LinkedinIcon,
  onlyfans: Icons.onlyfans,
} as const;

function hydrateSocialLinks(raw: PortfolioJson["socialLinks"]): SocialLink[] {
  return raw.map((link) => ({
    title: link.title,
    href: link.href,
    description: link.description,
    icon: SOCIAL_ICON_MAP[link.icon],
  }));
}

const parsed = portfolioJsonSchema.parse(portfolioJson as unknown);

export const USER: User = parsed.user;

export const PROJECTS = parsed.projects;

export const EXPERIENCES = parsed.experiences;

export const SOCIAL_LINKS: SocialLink[] = hydrateSocialLinks(
  parsed.socialLinks
);

export const AWARDS = parsed.awards;

export const CERTIFICATIONS = parsed.certifications;

export const TECH_STACK = parsed.techStack;

export const TESTIMONIALS_1 = parsed.testimonials1;

export const TESTIMONIALS_2 = parsed.testimonials2;

export const BOOKMARKS = parsed.bookmarks;

export const RECENT_PRS = parsed.recentPrs;
