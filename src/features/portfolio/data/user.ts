import type { User } from "@/features/portfolio/types/user";

export const USER = {
  firstName: "Atharv",
  lastName: "Gaur",
  displayName: "Atharv Gaur",
  username: "Athaxv",
  gender: "male",
  pronouns: "he/him",
  bio: "Architecting fullstack magic. Turning complex problems into sleek digital adventures.",
  flipSentences: [
    "Fullstack Developer",
    "VibeCoder",
    "20, Dev",
    "Builder",
  ],
  address: "India",
  phoneNumber: "OTYyNTIyMjEzMQ==", // 9625222131 base64
  email: "laatharv@gmail.com", // laatharv@gmail.com base64
  website: "https://safeedaadmi.dev",
  jobTitle: "Fullstack Developer",
  jobs: [
    {
      title: "Fullstack Developer",
      company: "Freelance",
      website: "https://safeedaadmi.dev",
    },
  ],
  about: `
- **Fullstack Developer** with a passion for VibeCoding, Learning new tech daily. Obsessed with scalable systems and clean architecture.
- I build things that should exist. If it can be **shipped**, I’ll ship it.
- I can build almost anything — I just need a **Mac**.
- Recent works include:
  - Currently freelancing, contributing to open-source, and cutting Crawlbot into something lean and useful
  - building **Notes.io**: AI-powered multilingual note-generating application.
- Open to paid roles, early teams, and collaborations.
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
