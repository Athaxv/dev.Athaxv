"use client";

import { AppProgressProvider } from "@bprogress/next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Provider as JotaiProvider } from "jotai";
import { ThemeProvider } from "next-themes";

import { VisibleContextProvider } from "@/context/VisibleContext";

import { Toaster } from "./ui/sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <JotaiProvider>
      <ThemeProvider
        enableSystem={false}
        disableTransitionOnChange
        enableColorScheme
        storageKey="theme"
        defaultTheme="light"
        attribute="class"
      >
        <VisibleContextProvider>
          <AppProgressProvider
            color="var(--foreground)"
            height="2px"
            delay={500}
            options={{ showSpinner: false }}
          >
            {children}
          </AppProgressProvider>

          <Toaster position="top-center" />
          <Analytics />
          <SpeedInsights />
        </VisibleContextProvider>
      </ThemeProvider>
    </JotaiProvider>
  );
}
