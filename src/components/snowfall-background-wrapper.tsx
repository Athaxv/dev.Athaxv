"use client";

import dynamic from "next/dynamic";

const SnowfallBackground = dynamic(
  () =>
    import("./snowfall-background").then((mod) => mod.SnowfallBackground),
  { ssr: false }
);

export function SnowfallBackgroundWrapper() {
  return <SnowfallBackground />;
}

