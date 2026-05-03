export type RecentPr = {
  title: string;
  repo: string;
  link: string;
  status: "merged" | "open" | "closed";
  date: string;
};

export { RECENT_PRS } from "./load-portfolio";
