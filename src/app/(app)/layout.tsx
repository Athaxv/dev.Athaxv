import dynamic from "next/dynamic";

import FractalTree from "@/components/fractal-tree";
import { VerticalPatternSeparator } from "@/components/pattern-separator";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
// import { SnowfallBackgroundWrapper } from "@/components/snowfall-background-wrapper";

const ScrollToTop = dynamic(() =>
  import("@/components/scroll-to-top").then((mod) => mod.ScrollToTop)
);

const LiveCursor = dynamic(() =>
  import("@/components/liveCursor").then((mod) => ({ default: mod.default }))
);

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FractalTree />
      {/* <SnowfallBackgroundWrapper /> */}

      <SiteHeader />
      <div className="flex justify-center">
        <VerticalPatternSeparator className="hidden w-12 border-x border-b border-edge before:w-12 md:block" />
        <div className="flex min-h-screen w-full flex-col border-b border-edge bg-background md:max-w-3xl">
          <main className="flex-1 overflow-x-hidden">{children}</main>
          <SiteFooter />
        </div>
        <VerticalPatternSeparator className="hidden w-12 border-x border-b border-edge before:w-12 md:block" />
      </div>
      <ScrollToTop />
      <LiveCursor />
    </>
  );
}
