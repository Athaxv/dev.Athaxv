"use client";

import Image from "next/image";

export function SiteHeaderMark() {
  return (
    <Image
      src="/images/ipsum.svg"
      alt="Logo"
      width={32}
      height={32}
      className="h-8 w-auto brightness-0 dark:brightness-0 dark:invert"
      priority
    />
  );
}
