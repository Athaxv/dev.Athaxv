"use client";

import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

import { PixelSnow } from "./pixel-snow";

// Snow color palette - optimized for realistic snow appearance
const SNOW_COLORS = {
    light: {
        // White or light greyish snowflakes for light mode background
        primary: "#ffffff", // pure white
        secondary: "#fffafa", // zinc-50 - very light grey
        tertiary: "#fafafa", // zinc-100 - light grey
    },
    dark: {
        // Bright white snowflakes for dark mode - highly visible
        primary: "#ffffff", // pure white for maximum visibility
        secondary: "#fafafa", // zinc-50
        tertiary: "#f4f4f5", // zinc-100
    },
} as const;

export function SnowfallBackground() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Compute theme-dependent values using useMemo to avoid multiple state updates
    const themeConfig = useMemo(() => {
        const theme = resolvedTheme === "dark" ? "dark" : "light";
        return {
            color: SNOW_COLORS[theme].primary,
            brightness: theme === "dark" ? 0.85 : 0.5,
            depthFade: theme === "dark" ? 6 : 12,
            farPlane: theme === "dark" ? 20 : 5,
        };
    }, [resolvedTheme]);

    useEffect(() => {
        // Set mounted flag after component mounts to avoid hydration mismatch
        // This is necessary for client-side only rendering
        setMounted(true);
    }, []);

    // Don't render until mounted to avoid hydration mismatch
    if (!mounted) {
        return null;
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className={cn(
                "fixed inset-0 -z-10",
                "pointer-events-none",
                "overflow-hidden"
            )}
            aria-hidden="true"
        >
            <PixelSnow
                color={themeConfig.color}
                flakeSize={0.012}
                minFlakeSize={0.8}
                pixelResolution={1000}
                speed={0.6}
                depthFade={themeConfig.depthFade}
                farPlane={themeConfig.farPlane}
                brightness={themeConfig.brightness}
                gamma={0.6}
                density={0.35}
                variant="round"
                direction={90}
                className="h-full w-full"
            />
        </motion.div>
    );
}

