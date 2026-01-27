import type { Activity } from "@/components/kibo-ui/contribution-graph";
import type { GitHubContributionCalendar } from "@/lib/github";

import { Panel, PanelContent, PanelHeader, PanelTitle, PanelTitleSup } from "../panel";
import { GitHubContributionFallback, GitHubContributionGraph } from "./graph";

export function GitHubContributions({
  contributions,
}: {
  contributions: GitHubContributionCalendar;
}) {
  const activities: Activity[] = [];

  if (contributions?.weeks) {
    contributions.weeks.forEach((week) => {
      week.contributionDays.forEach((day) => {
        let level = 0;
        if (day.contributionCount > 0) level = 1;
        if (day.contributionCount >= 4) level = 2;
        if (day.contributionCount >= 7) level = 3;
        if (day.contributionCount >= 10) level = 4;

        activities.push({
          date: day.date,
          count: day.contributionCount,
          level: level,
        } as Activity);
      });
    });
  }

  return (
    <Panel id="github-activity">
      <PanelHeader>
        <PanelTitle>
          GitHub Activity
          <PanelTitleSup>({new Date().getFullYear()})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <PanelContent className="flex flex-col gap-4">
        {/* Ensure data is present before rendering to avoid client-side issues */}
        {activities.length > 0 ? (
          <GitHubContributionGraph data={activities} />
        ) : (
          <GitHubContributionFallback />
        )}
      </PanelContent>
    </Panel>
  );
}
