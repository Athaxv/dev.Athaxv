"use client";

import { cn } from "@/lib/utils";

export function PatternSeparator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-24 w-full border-y border-edge",
        "before:absolute before:-left-[100vw] before:h-24 before:w-[200vw]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className
      )}
    />
  );
}

export function VerticalPatternSeparator({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-auto w-12 border-x border-edge",
        "before:absolute before:top-0 before:bottom-0 before:w-12",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        "[mask-image:linear-gradient(to_bottom,transparent,black_20rem,black_calc(100%-20rem),transparent)]",
        "bg-muted/10 backdrop-blur-sm",
        className
      )}
    />
  );
}
