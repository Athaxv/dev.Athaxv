import { GitPullRequestIcon } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

import { ExpandableList } from "@/components/expandable-list";
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "../panel";
import type { GitHubPR } from "@/lib/github";

function StatusBadge({ status }: { status: "MERGED" | "OPEN" | "CLOSED" }) {
    const styles = {
        MERGED: "bg-purple-500/15 text-purple-600 dark:text-purple-400",
        OPEN: "bg-green-500/15 text-green-600 dark:text-green-400",
        CLOSED: "bg-red-500/15 text-red-600 dark:text-red-400",
    };

    return (
        <span
            className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${styles[status]}`}
        >
            {status.toLowerCase()}
        </span>
    );
}

export function RecentPrs({ prs }: { prs: GitHubPR[] }) {
    return (
        <Panel id="recent-prs">
            <PanelHeader>
                <PanelTitle>
                    Open Source Recent PRs
                    <PanelTitleSup>({prs.length})</PanelTitleSup>
                </PanelTitle>
            </PanelHeader>

            <div className="py-4">
                <ExpandableList
                    initialCount={5}
                    className="flex flex-col gap-2"
                    buttonClassName="mt-4"
                >
                    {prs.map((pr, index) => (
                        <a
                            key={index}
                            href={pr.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-3 rounded-lg border border-transparent p-2 transition-colors hover:bg-accent/50 hover:border-edge focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                            <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent text-muted-foreground">
                                <GitPullRequestIcon className="size-4" />
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-2">
                                    <p className="font-mono text-xs text-muted-foreground">
                                        {pr.repository.name}
                                    </p>
                                    <time className="text-xs text-muted-foreground shrink-0">
                                        {formatDistanceToNow(new Date(pr.createdAt), { addSuffix: true })}
                                    </time>
                                </div>
                                <h3 className="line-clamp-1 text-balance text-sm font-medium font-sans">
                                    {pr.title}
                                </h3>
                                <div className="mt-1">
                                    <StatusBadge status={pr.state} />
                                </div>
                            </div>
                        </a>
                    ))}
                </ExpandableList>
            </div>
        </Panel>
    );
}
