import Link from "next/link";
import Image from "next/image";
import React from "react";

import { SOCIAL_LINKS } from "../data/social-links";
import { cn } from "@/lib/utils";

export function Brand() {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 py-12 text-center">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {SOCIAL_LINKS.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center justify-center rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            )}
            title={link.title}
          >
            {typeof link.icon === "string" ? (
              <Image
                src={link.icon}
                alt={link.title}
                width={20}
                height={20}
                className="size-5 object-contain"
                unoptimized
              />
            ) : (
              // @ts-ignore
              React.createElement(link.icon, { className: "size-5" })
            )}
            <span className="sr-only">{link.title}</span>
          </Link>
        ))}
      </div>

      <div className="space-y-1 text-sm text-muted-foreground">
        <p>Made by Athaxv</p>
        <p>
          Inspired from{" "}
          <Link
            href="https://chanhdai.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground"
          >
            chanhdai
          </Link>
        </p>
      </div>
    </footer>
  );
}
