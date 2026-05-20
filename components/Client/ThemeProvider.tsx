"use client";

import React, { createContext, useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export interface ThemeProperties {
  name: string;
  isDark: boolean;
  bgPrimary: string;
  fgPrimary: string;
  accent: string;
  bgCard: string;
  bgDark: string;
}

export const THEMES: Record<string, ThemeProperties> = {
  // 1 Dark Theme
  forest: {
    name: "Forest Sanctuary",
    isDark: true,
    bgPrimary: "#2B3530",
    fgPrimary: "#DCD4C4",
    accent: "#CED1BF",
    bgCard: "#232b27",
    bgDark: "#1f2622",
  },
  // 1 Light Theme
  wabi: {
    name: "Wabi-Sabi Silk",
    isDark: false,
    bgPrimary: "#F5F2EB",
    fgPrimary: "#2B302D",
    accent: "#8C867A",
    bgCard: "#EBE5DA",
    bgDark: "#E0D8C8",
  },
};

const ThemeContext = createContext<string>("forest");

export const useThemeInfo = () => {
  const currentKey = useContext(ThemeContext);
  return {
    key: currentKey,
    properties: THEMES[currentKey] || THEMES.forest,
  };
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const currentThemeKey = useSelector(
    (state: RootState) => state.theme?.currentTheme || "forest"
  );

  useEffect(() => {
    const theme = THEMES[currentThemeKey] || THEMES.forest;
    const root = document.documentElement;

    // Apply main theme properties
    root.style.setProperty("--bg-primary", theme.bgPrimary);
    root.style.setProperty("--fg-primary", theme.fgPrimary);
    root.style.setProperty("--accent", theme.accent);
    root.style.setProperty("--bg-card", theme.bgCard);
    root.style.setProperty("--bg-dark", theme.bgDark);

    // Apply dark/light specific adaptive variable overrides for full-page layout consistency
    if (theme.isDark) {
      root.classList.remove("theme-light");
      root.classList.add("theme-dark");
      
      root.style.setProperty("--logo-filter", "none");
      root.style.setProperty("--text-white", "#ffffff");
      root.style.setProperty("--text-white-70", "rgba(255, 255, 255, 0.7)");
      root.style.setProperty("--text-white-60", "rgba(255, 255, 255, 0.6)");
      root.style.setProperty("--text-white-50", "rgba(255, 255, 255, 0.5)");
      root.style.setProperty("--text-white-40", "rgba(255, 255, 255, 0.4)");
      root.style.setProperty("--text-white-30", "rgba(255, 255, 255, 0.3)");
      root.style.setProperty("--text-white-20", "rgba(255, 255, 255, 0.2)");
      root.style.setProperty("--text-white-10", "rgba(255, 255, 255, 0.1)");
      root.style.setProperty("--border-white-10", "rgba(255, 255, 255, 0.1)");
      root.style.setProperty("--border-white-5", "rgba(255, 255, 255, 0.05)");
      root.style.setProperty("--bg-white-5", "rgba(255, 255, 255, 0.05)");
      root.style.setProperty("--bg-white-50", "rgba(255, 255, 255, 0.5)");
    } else {
      root.classList.remove("theme-dark");
      root.classList.add("theme-light");

      root.style.setProperty("--logo-filter", "invert(1) brightness(0.18)");
      // Extract raw RGB to apply transparency cleanly
      const fgHex = theme.fgPrimary;
      // Simple converter for Hex to RGB
      const r = parseInt(fgHex.slice(1, 3), 16);
      const g = parseInt(fgHex.slice(3, 5), 16);
      const b = parseInt(fgHex.slice(5, 7), 16);
      const rgbBase = `${r}, ${g}, ${b}`;

      root.style.setProperty("--text-white", theme.fgPrimary);
      root.style.setProperty("--text-white-70", `rgba(${rgbBase}, 0.7)`);
      root.style.setProperty("--text-white-60", `rgba(${rgbBase}, 0.6)`);
      root.style.setProperty("--text-white-50", `rgba(${rgbBase}, 0.5)`);
      root.style.setProperty("--text-white-40", `rgba(${rgbBase}, 0.4)`);
      root.style.setProperty("--text-white-30", `rgba(${rgbBase}, 0.3)`);
      root.style.setProperty("--text-white-20", `rgba(${rgbBase}, 0.2)`);
      root.style.setProperty("--text-white-10", `rgba(${rgbBase}, 0.1)`);
      root.style.setProperty("--border-white-10", `rgba(${rgbBase}, 0.15)`);
      root.style.setProperty("--border-white-5", `rgba(${rgbBase}, 0.08)`);
      root.style.setProperty("--bg-white-5", `rgba(${rgbBase}, 0.06)`);
      root.style.setProperty("--bg-white-50", `rgba(${rgbBase}, 0.1)`);
    }
  }, [currentThemeKey]);

  return (
    <ThemeContext.Provider value={currentThemeKey}>
      {children}
    </ThemeContext.Provider>
  );
};
