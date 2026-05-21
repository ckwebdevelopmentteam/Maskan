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
  monoMixed: {
    name: "Black White Mix",
    isDark: false,
    bgPrimary: "#F7F7F4",
    fgPrimary: "#151515",
    accent: "#151515",
    bgCard: "#151515",
    bgDark: "#FFFFFF",
  },
  pureWhite: {
    name: "Pure White",
    isDark: false,
    bgPrimary: "#FFFFFF",
    fgPrimary: "#151515",
    accent: "#151515",
    bgCard: "#F2F2EE",
    bgDark: "#E6E6E0",
  },
  pureBlack: {
    name: "Pure Black",
    isDark: true,
    bgPrimary: "#151515",
    fgPrimary: "#FFFFFF",
    accent: "#FFFFFF",
    bgCard: "#202020",
    bgDark: "#0D0D0D",
  },
  concrete: {
    name: "Concrete Steel",
    isDark: true,
    bgPrimary: "#151918",
    fgPrimary: "#E7E0D4",
    accent: "#C58A5A",
    bgCard: "#202522",
    bgDark: "#0F1211",
  },
  limestone: {
    name: "Limestone Brass",
    isDark: false,
    bgPrimary: "#F4F0E8",
    fgPrimary: "#25231F",
    accent: "#A86F3C",
    bgCard: "#E9E1D4",
    bgDark: "#D8CDBD",
  },
  steel: {
    name: "Steel Blueprint",
    isDark: true,
    bgPrimary: "#172029",
    fgPrimary: "#E8ECE7",
    accent: "#8EA4A8",
    bgCard: "#202C35",
    bgDark: "#10171D",
  },
  forest: {
    name: "Forest Sanctuary",
    isDark: true,
    bgPrimary: "#2B3530",
    fgPrimary: "#DCD4C4",
    accent: "#CED1BF",
    bgCard: "#232b27",
    bgDark: "#1f2622",
  },
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

const DEFAULT_THEME = "concrete";

const ThemeContext = createContext<string>(DEFAULT_THEME);

export const useThemeInfo = () => {
  const currentKey = useContext(ThemeContext);
  return {
    key: currentKey,
    properties: THEMES[currentKey] || THEMES[DEFAULT_THEME],
  };
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const currentThemeKey = useSelector(
    (state: RootState) => state.theme?.currentTheme || DEFAULT_THEME
  );

  useEffect(() => {
    const theme = THEMES[currentThemeKey] || THEMES[DEFAULT_THEME];
    const root = document.documentElement;
    root.classList.toggle("theme-mono-mixed", currentThemeKey === "monoMixed");

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

      if (currentThemeKey === "monoMixed") {
        root.style.setProperty("--text-white", "#ffffff");
        root.style.setProperty("--text-white-70", "rgba(255, 255, 255, 0.7)");
        root.style.setProperty("--text-white-60", "rgba(255, 255, 255, 0.6)");
        root.style.setProperty("--text-white-50", "rgba(255, 255, 255, 0.5)");
        root.style.setProperty("--text-white-40", "rgba(255, 255, 255, 0.4)");
        root.style.setProperty("--text-white-30", "rgba(255, 255, 255, 0.3)");
        root.style.setProperty("--text-white-20", "rgba(255, 255, 255, 0.2)");
        root.style.setProperty("--text-white-10", "rgba(255, 255, 255, 0.1)");
        root.style.setProperty("--border-white-10", "rgba(255, 255, 255, 0.14)");
        root.style.setProperty("--border-white-5", "rgba(255, 255, 255, 0.08)");
      }
    }
  }, [currentThemeKey]);

  return (
    <ThemeContext.Provider value={currentThemeKey}>
      {children}
    </ThemeContext.Provider>
  );
};
