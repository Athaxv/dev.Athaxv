"use client";

import { LoaderIcon } from "lucide-react";

import {
  TooltipContent,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from "@/components/base/ui/tooltip";
import type { Activity } from "@/components/kibo-ui/contribution-graph";
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/kibo-ui/contribution-graph";
import { GITHUB_USERNAME, UTM_PARAMS } from "@/config/site";
import { addQueryParams } from "@/utils/url";

import { cn } from "@/lib/utils";


const THEME_CLASS = cn(
  "data-[level='0']:fill-primary data-[level='0']:fill-opacity-10",
  "data-[level='1']:fill-primary data-[level='1']:fill-opacity-30",
  "data-[level='2']:fill-primary data-[level='2']:fill-opacity-50",
  "data-[level='3']:fill-primary data-[level='3']:fill-opacity-70",
  "data-[level='4']:fill-primary"
);

export function GitHubContributionGraph({
  data,
}: {
  data: Activity[];
}) {
  return (
    <TooltipProvider>
      <ContributionGraph
        className="mx-auto py-2"
        data={data}
        blockSize={11}
        blockMargin={3}
        blockRadius={2}
      >
        <ContributionGraphCalendar
          className="no-scrollbar px-2"
          title="GitHub Contributions"
          hideMonthLabels={false}
        >
          {({ activity, dayIndex, weekIndex }) => (
            <TooltipRoot>
              <TooltipTrigger render={<g />}>
                <ContributionGraphBlock
                  activity={activity}
                  dayIndex={dayIndex}
                  weekIndex={weekIndex}
                  className={THEME_CLASS}
                />
              </TooltipTrigger>

              <TooltipContent className="font-sans">
                <p>
                  {activity.count} contribution{activity.count > 1 ? "s" : null}{" "}
                  on{" "}
                  {new Intl.DateTimeFormat("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  }).format(new Date(activity.date))}
                </p>
              </TooltipContent>
            </TooltipRoot>
          )}
        </ContributionGraphCalendar>

        <ContributionGraphFooter className="px-2">
          <ContributionGraphTotalCount>
            {({ totalCount, year }) => (
              <div className="text-muted-foreground">
                {new Intl.NumberFormat("en-US").format(totalCount)} contributions in {year} on{" "}
                <a
                  className="font-medium underline underline-offset-4 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  href={addQueryParams(
                    `https://github.com/${GITHUB_USERNAME}`,
                    UTM_PARAMS
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                .
              </div>
            )}
          </ContributionGraphTotalCount>

          <ContributionGraphLegend>
            {({ level }) => (
              <rect
                width={11}
                height={11}
                rx={2}
                ry={2}
                className={THEME_CLASS}
                data-level={level}
              />
            )}
          </ContributionGraphLegend>
        </ContributionGraphFooter>
      </ContributionGraph>
    </TooltipProvider>
  );
}


export function GitHubContributionFallback() {
  return (
    <div className="flex h-40.5 w-full items-center justify-center">
      <LoaderIcon className="animate-spin text-muted-foreground" />
    </div>
  );
}
