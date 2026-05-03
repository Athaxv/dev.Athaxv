import type { User } from "@/features/portfolio/types/user";

export const USER = {
  firstName: "Atharv",
  lastName: "Gaur",
  displayName: "Atharv Gaur",
  username: "Athaxv",
  gender: "male",
  pronouns: "he/him",
  bio: "Architecting fullstack magic. Turning complex problems into sleek digital adventures.",
  flipSentences: ["Fullstack Developer", "VibeCoder", "20, Dev", "Builder"],
  address: "India",
  phoneNumber: "OTYyNTIyMjEzMQ==", // 9625222131 base64
  email: "laatharv@gmail.com", // laatharv@gmail.com base64
  website: "https://athaxv.dev",
  jobTitle: "Fullstack Developer",
  jobs: [],
  about: `
- Full stack developer building AI-first products and scalable systems.
- Strong focus on system design, architecture trade-offs, and maintainable engineering.
- Hands-on with agentic workflows, knowledge graph style products, and full-stack delivery.
- Currently building in stealth.
- Building **DevOps** to improve reliability, deployment speed, and production readiness.
- Open to full stack and AI engineering roles.
`,
  avatar: "https://github.com/Athaxv.png",
  ogImage: "https://github.com/Athaxv.png",
  namePronunciationUrl: "",
  timeZone: "Asia/Kolkata",
  keywords: [
    "Atharv Gaur",
    "Athaxv",
    "Fullstack Developer",
    "React",
    "Next.js",
    "AI",
  ],
  dateCreated: "2025-01-21",
} satisfies User;
