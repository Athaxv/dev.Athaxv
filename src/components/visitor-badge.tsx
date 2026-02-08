"use client";

import { EyeIcon } from "lucide-react";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface VisitorBadgeProps {
  className?: string;
}

export function VisitorBadge({ className }: VisitorBadgeProps) {
  const [count, setCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const motionCount = useMotionValue(0);
  const animatedCount = useTransform(motionCount, (latest) =>
    Math.round(latest).toLocaleString()
  );

  useEffect(() => {
    const STORAGE_KEY_COUNT = "athaxv-portfolio-visitor-count";
    const STORAGE_KEY_VISITED = "athaxv-portfolio-has-visited";

    const initializeCount = () => {
      try {
        // Check if this is a new visitor
        const hasVisited = localStorage.getItem(STORAGE_KEY_VISITED);
        let currentCount = parseInt(
          localStorage.getItem(STORAGE_KEY_COUNT) || "0",
          10
        );

        // If new visitor, increment the count
        if (!hasVisited) {
          currentCount += 1;
          localStorage.setItem(STORAGE_KEY_COUNT, currentCount.toString());
          localStorage.setItem(STORAGE_KEY_VISITED, "true");
        }

        setCount(currentCount);
        setIsLoading(false);

        // Animate the counter
        animate(motionCount, currentCount, {
          duration: 2,
          ease: "easeOut",
        });
      } catch (error) {
        // Fallback if localStorage is not available
        const fallbackCount = 1;
        setCount(fallbackCount);
        setIsLoading(false);
        animate(motionCount, fallbackCount, {
          duration: 2,
          ease: "easeOut",
        });
      }
    };

    initializeCount();
  }, [motionCount]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
      className={cn(
        "absolute right-4 bottom-4 z-10",
        "flex items-center gap-2 px-3 py-1.5",
        "rounded-full border border-white/20",
        "bg-black/40 backdrop-blur-md",
        "text-white shadow-lg",
        "transition-all duration-300 hover:scale-105 hover:bg-black/50",
        className
      )}
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, -10, 10, -5, 5, 0] }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <EyeIcon className="size-4" />
      </motion.div>

      <div className="flex items-baseline gap-1">
        {isLoading ? (
          <motion.div
            className="h-4 w-8 rounded bg-white/20"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        ) : (
          <motion.span className="font-mono text-sm font-semibold tabular-nums">
            {animatedCount}
          </motion.span>
        )}
        {/* <span className="text-xs text-white/70">visitors</span> */}
      </div>

      {/* Subtle pulse animation */}
      <motion.div
        className="absolute inset-0 rounded-full bg-white/10"
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0, 0.3, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
      />
    </motion.div>
  );
}
