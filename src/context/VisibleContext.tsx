"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface VisibleContextType {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const VisibleContext = createContext<VisibleContextType | undefined>(undefined);

export function VisibleContextProvider({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(true);

  // Optionally, you can add logic to control visibility based on user preferences
  // For example, hide cursors when user prefers reduced motion
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setVisible(false);
    }
  }, []);

  return (
    <VisibleContext.Provider value={{ visible, setVisible }}>
      {children}
    </VisibleContext.Provider>
  );
}

export function useVisible() {
  const context = useContext(VisibleContext);
  if (context === undefined) {
    throw new Error("useVisible must be used within a VisibleContextProvider");
  }
  return context;
}

