"use client";

import { Activity } from "lucide-react";
import { useEffect, useState } from "react";

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const hasCounted = sessionStorage.getItem("visitor-counted");
    const endpoint = hasCounted
      ? "/api/visitor"
      : "/api/visitor?increment=true";

    fetch(endpoint)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch visitor count");
        return res.json();
      })
      .then((data: unknown) => {
        const payload = data as { count?: number };
        if (payload && typeof payload.count === "number") {
          setCount(payload.count);
          if (!hasCounted) {
            sessionStorage.setItem("visitor-counted", "true");
          }
        }
      })
      .catch((err) => console.error("Visitor count error:", err));
  }, []);

  if (count === null) return null;

  return (
    <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground opacity-70 transition-opacity hover:opacity-100">
      <Activity className="size-3" />
      <span>{count.toLocaleString()} visitors</span>
    </div>
  );
}
