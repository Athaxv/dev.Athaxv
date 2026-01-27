import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "freelance",
    companyName: "Freelance",
    positions: [
      {
        id: "freelance-fullstack",
        title: "Fullstack Developer",
        employmentPeriod: {
          start: "2023",
          end: "Present",
        },
        employmentType: "Freelance",
        description: `- Architecting fullstack applications using React, Node.js, and AI technologies.
- Developing projects like RandomEcho, Startup Idea Validator, and PathAI.
- Participating in hackathons and open source contributions.`,
        icon: "code",
        skills: [
          "React",
          "Next.js",
          "Node.js",
          "TypeScript",
          "AI",
          "Mongoose",
        ],
      },
    ],
    isCurrentEmployer: true,
  },
];
