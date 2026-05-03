import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "ryze-ai",
    companyName: "Ryze AI",
    companyLogo: "/ryze-logo.png",
    positions: [
      {
        id: "ryze-ai-full-stack-intern",
        title: "Ryze AI",
        employmentPeriod: {
          start: "Feb 2026",
          end: "Apr 2026",
        },
        employmentType: "Full-time",
        description: `- Built and shipped fullstack features across frontend and backend surfaces.
- Collaborated in a remote-first workflow with cross-functional teammates.
- Contributed to product iteration speed and developer workflow improvements.`,
        icon: "code",
        skills: ["React", "Next.js", "TypeScript", "Node.js"],
      },
    ],
  },
  {
    id: "nicsi",
    companyName: "National Informatics Centre Services Inc (NICSI)",
    companyLogo: "/nicsi-logo.png",
    positions: [
      {
        id: "nicsi-full-stack-development-intern",
        title: "National Informatics Centre Services Inc (NICSI)",
        employmentPeriod: {
          start: "Jun 2025",
          end: "Aug 2025",
        },
        employmentType: "Internship",
        description: `- Worked on fullstack development tasks during an on-site internship.
- Implemented UI and API updates with a focus on maintainable code quality.
- Supported delivery across sprint-based engineering workflows.`,
        icon: "code",
        skills: ["React", "JavaScript", "Node.js", "REST APIs"],
      },
    ],
  },
];
