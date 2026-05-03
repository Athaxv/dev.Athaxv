import { z } from "zod";

const experiencePositionIconSchema = z.enum([
  "code",
  "design",
  "education",
  "business",
  "idea",
]);

const employmentPeriodSchema = z.object({
  start: z.string(),
  end: z.string().optional(),
});

const experiencePositionSchema = z.object({
  id: z.string(),
  title: z.string(),
  employmentPeriod: employmentPeriodSchema,
  employmentType: z.string().optional(),
  description: z.string().optional(),
  icon: experiencePositionIconSchema.optional(),
  skills: z.array(z.string()).optional(),
  isExpanded: z.boolean().optional(),
});

const experienceSchema = z.object({
  id: z.string(),
  companyName: z.string(),
  companyLogo: z.string().optional(),
  positions: z.array(experiencePositionSchema),
  isCurrentEmployer: z.boolean().optional(),
});

const projectPeriodSchema = z.object({
  start: z.string(),
  end: z.string().optional(),
});

const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  link: z.string(),
  skills: z.array(z.string()),
  period: projectPeriodSchema,
  logo: z.string().optional(),
  image: z.string().optional(),
  isExpanded: z.boolean().optional(),
});

const userJobSchema = z.object({
  title: z.string(),
  company: z.string(),
  website: z.string(),
});

const userSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  displayName: z.string(),
  username: z.string(),
  gender: z.enum(["male", "female", "non-binary"]),
  pronouns: z.string(),
  bio: z.string(),
  flipSentences: z.array(z.string()),
  address: z.string(),
  phoneNumber: z.string(),
  email: z.string(),
  website: z.string(),
  jobTitle: z.string(),
  jobs: z.array(userJobSchema),
  about: z.string(),
  avatar: z.string(),
  ogImage: z.string(),
  namePronunciationUrl: z.string(),
  timeZone: z.string(),
  keywords: z.array(z.string()),
  dateCreated: z.string(),
});

const socialLinkRawSchema = z.object({
  icon: z.enum(["github", "twitter", "linkedin", "onlyfans"]),
  title: z.string(),
  href: z.string(),
  description: z.string().optional(),
});

const awardSchema = z.object({
  id: z.string(),
  prize: z.string(),
  title: z.string(),
  date: z.string(),
  grade: z.string(),
  description: z.string().optional(),
  referenceLink: z.string().optional(),
});

const certificationSchema = z.object({
  title: z.string(),
  issuer: z.string(),
  issuerLogoURL: z.string().optional(),
  issuerIconName: z.string().optional(),
  issueDate: z.string(),
  credentialID: z.string().optional().default(""),
  credentialURL: z.string().optional().default(""),
});

const techStackSchema = z.object({
  key: z.string(),
  title: z.string(),
  href: z.string(),
  categories: z.array(z.string()),
  theme: z.boolean().optional(),
});

const testimonialSchema = z.object({
  authorAvatar: z.string(),
  authorName: z.string(),
  authorTagline: z.string(),
  url: z.string(),
  quote: z.string(),
});

const bookmarkSchema = z.object({
  title: z.string(),
  url: z.string(),
  author: z.string().optional(),
  iconName: z.string().optional(),
  bookmarkedAt: z.string(),
});

const recentPrSchema = z.object({
  title: z.string(),
  repo: z.string(),
  link: z.string(),
  status: z.enum(["merged", "open", "closed"]),
  date: z.string(),
});

export const portfolioJsonSchema = z.object({
  version: z.number(),
  user: userSchema,
  projects: z.array(projectSchema),
  experiences: z.array(experienceSchema),
  socialLinks: z.array(socialLinkRawSchema),
  awards: z.array(awardSchema),
  certifications: z.array(certificationSchema),
  techStack: z.array(techStackSchema),
  testimonials1: z.array(testimonialSchema),
  testimonials2: z.array(testimonialSchema),
  bookmarks: z.array(bookmarkSchema),
  recentPrs: z.array(recentPrSchema),
});

export type PortfolioJson = z.infer<typeof portfolioJsonSchema>;
export type SocialLinkIconKey = z.infer<typeof socialLinkRawSchema>["icon"];
