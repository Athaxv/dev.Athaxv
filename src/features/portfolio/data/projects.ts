import type { Project } from "@/features/portfolio/types/projects";

export const PROJECTS: Project[] = [
  {
    id: "startup-validator",
    title: "Startup Idea Validator",
    description:
      "A full-stack web application that helps entrepreneurs validate their startup ideas using AI. It analyzes your pitch, market, and revenue model to provide scores and improvements.",
    link: "https://ai-startup-validator.vercel.app/",
    skills: ["JavaScript", "AI", "Fullstack"],
    period: {
      start: "2024",
    },
    image: "/images/new_startup.png",
  },
  {
    id: "ClaudeCode",
    title: "Claude Code",
    description: "AI Deterministic UI Generation Tool",
    link: "https://claude-code-frontend.vercel.app/",
    skills: ["TypeScript", "AST", "Deterministic UI", "Streaming"],
    period: {
      start: "2026",
    },
    image: "/edit/claude5.jpg",
  },
  {
    id: "exaclidraw",
    title: "Exaclidraw",
    description:
      "A Real-time whiteboard collaboration tool built with TypeScript, similar to Excalidraw.",
    link: "https://github.com/Athaxv/Exaclidraw",
    skills: ["TypeScript", "Canvas", "Real-time"],
    period: {
      start: "2025",
    },
    image: "/images/exacli.png",
  },
  {
    id: "notes.io",
    title: "Notes.io",
    description:
      "A real-time AI-powered multilingual note-generating application built with TypeScript, similar to Google Keep.",
    link: "https://notes-io-frontend.vercel.app/",
    skills: ["TypeScript", "Real-time", "AI", "Multilingual"],
    period: {
      start: "2025",
    },
    image: "/images/exaclidrawreal.png",
  },
  // {
  //   id: "randomecho",
  //   title: "RandomEcho",
  //   description:
  //     "A safe, private platform where your identity remains yours alone. Anonymously connect and speak freely.",
  //   link: "https://randomecho.onrender.com/",
  //   skills: ["TypeScript", "Real-time"],
  //   period: {
  //     start: "2024",
  //   },
  //   image: "/images/projects/randomecho.png",
  // },
  // {
  //   id: "saulm",
  //   title: "SauLM",
  //   description:
  //     "An AI-powered persona-based legal assistant.",
  //   link: "https://github.com/Athaxv/SauLM",
  //   skills: ["TypeScript", "AI", "Legal"],
  //   period: {
  //     start: "2024",
  //   },
  //   image: "/images/projects/saulm.png",
  // }
];
