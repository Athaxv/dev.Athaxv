import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "ryze-ai",
    companyName: "RyzeAI",
    companyLogo: "/ryze-logo.png",
    positions: [
      {
        id: "ryze-ai-full-stack-developer",
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "February 2026",
          end: "April 2026",
        },
        employmentType: "Full-time",
        description: `- RyzeAI, Remote (San Francisco, USA)
- Engineered a high-performance image rendering pipeline using React virtualization, enabling smooth rendering of 100+ images simultaneously with zero perceptible lag, significantly improving UI responsiveness.
- Designed and implemented a real-time streaming system using Server-Sent Events (SSE) with backend polling orchestration, reducing perceived response latency for AI chat workflows.
- Implemented a usage-based billing system using Stripe, enabling scalable monetization aligned with user activity and API consumption.`,
        icon: "code",
        skills: ["React", "Virtualization", "SSE", "Node.js", "Stripe"],
      },
    ],
  },
  {
    id: "nicsi",
    companyName: "National Informatics Centre Services Inc. (NICSI)",
    companyLogo: "/nicsi-logo.png",
    positions: [
      {
        id: "nicsi-software-engineering-intern",
        title: "Software Engineering Intern",
        employmentPeriod: {
          start: "July 2025",
          end: "August 2025",
        },
        employmentType: "Internship",
        description: `- National Informatics Centre Services Inc. (NICSI), New Delhi, India
- Architected and led the development of an end-to-end AI-powered procurement automation system to digitize and streamline the entire manual workflow for the national agency.
- Developed the full-stack application with a React/Redux frontend and a Node.js backend, containerized with Docker.
- Overhauled the frontend state management by implementing Redux Toolkit as a single source of truth, which eliminated prop-drilling and improved application-wide data consistency and maintainability.`,
        icon: "code",
        skills: ["React", "Redux", "Redux Toolkit", "Node.js", "Docker"],
      },
    ],
  },
];
