import { BoxIcon, InfinityIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Markdown } from "@/components/markdown";
import { Tag } from "@/components/ui/tag";
import { ProseMono } from "@/components/ui/typography";
import { UTM_PARAMS } from "@/config/site";
import { cn } from "@/lib/utils";
import { addQueryParams } from "@/utils/url";

import type { Project } from "../../types/projects";

export function ProjectItem({
  className,
  project,
}: {
  className?: string;
  project: Project;
}) {
  const { start, end } = project.period;
  const isOngoing = !end;
  const isSinglePeriod = end === start;

  return (
    <Link
      href={addQueryParams(project.link, UTM_PARAMS)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group/project flex flex-col gap-2 p-2",
        "max-sm:screen-line-before max-sm:screen-line-after",
        "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after",
        className
      )}
    >
      <div className="flex flex-col gap-2 p-2">
        {project.image && (
          <div className="mb-2 overflow-hidden rounded-lg border border-edge">
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={315}
              quality={100}
              className="aspect-video w-full object-cover transition-transform duration-500 group-hover/project:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}

        <div className="flex items-center gap-3">
          {project.logo ? (
            <Image
              src={project.logo}
              alt={project.title}
              width={32}
              height={32}
              quality={100}
              className="flex size-8 shrink-0 rounded-md object-contain select-none"
              aria-hidden="true"
            />
          ) : (
            <div
              className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-edge ring-offset-1 ring-offset-background select-none"
              aria-hidden="true"
            >
              <BoxIcon className="size-5" />
            </div>
          )}
          <h3 className="font-sans text-lg leading-snug font-medium text-balance underline-offset-4 group-hover/project:underline">
            {project.title}
          </h3>
        </div>

        {project.description && (
          <div className="line-clamp-2 text-sm text-balance text-muted-foreground">
            <ProseMono>
              <Markdown>{project.description}</Markdown>
            </ProseMono>
          </div>
        )}

        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
          <dl className="text-muted-foreground">
            <dt className="sr-only">Period</dt>
            <dd className="flex items-center gap-0.5">
              <span>{start}</span>
              {!isSinglePeriod && (
                <>
                  <span className="font-mono">—</span>
                  {isOngoing ? (
                    <>
                      <InfinityIcon
                        className="size-3.5 translate-y-[0.5px]"
                        aria-hidden
                      />
                      <span className="sr-only">Present</span>
                    </>
                  ) : (
                    <span>{end}</span>
                  )}
                </>
              )}
            </dd>
          </dl>

          {project.skills.length > 0 && (
            <ul className="flex flex-wrap gap-1.5 opacity-80 grayscale transition-all group-hover/project:opacity-100 group-hover/project:grayscale-0">
              {project.skills.map((skill, index) => (
                <li key={index}>
                  <Tag className="h-5 px-1.5 text-[10px]">{skill}</Tag>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Link>
  );
}
