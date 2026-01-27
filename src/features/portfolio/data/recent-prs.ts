export type RecentPr = {
    title: string;
    repo: string;
    link: string;
    status: "merged" | "open" | "closed";
    date: string;
};

export const RECENT_PRS: RecentPr[] = [
    // Add specific PRs here if you want to highlight them
    // {
    //     title: "feat: Initial Release",
    //     repo: "Athaxv/RandomEcho",
    //     link: "https://github.com/Athaxv/RandomEcho",
    //     status: "merged",
    //     date: "2024-01-01",
    // },
];
