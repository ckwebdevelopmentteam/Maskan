"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setTheme } from "@/store";
import { THEMES } from "@/components/Client/ThemeProvider";
import { motion } from "motion/react";

export default function ThemeSwitcher() {
  const dispatch = useDispatch();
  const currentThemeKey = useSelector(
    (state: RootState) => state.theme?.currentTheme || "concrete"
  );

  const darkThemes = Object.entries(THEMES).filter(([, t]) => t.isDark);
  const lightThemes = Object.entries(THEMES).filter(([, t]) => !t.isDark);

  const renderThemeButton = (key: string, theme: typeof THEMES[string]) => {
    const isActive = currentThemeKey === key;

    return (
      <motion.button
        key={key}
        onClick={() => dispatch(setTheme(key))}
        className={`relative flex items-center justify-between w-full px-4 py-3 rounded-xl cursor-pointer text-left transition-all duration-300 ${
          isActive
            ? "bg-[var(--bg-primary)] text-[var(--fg-primary)] shadow-md border border-[var(--fg-primary)]/30"
            : "bg-[var(--bg-primary)]/30 hover:bg-[var(--bg-primary)]/50 text-[var(--fg-primary)]/80 hover:text-[var(--fg-primary)] border border-transparent"
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="text-sm font-medium tracking-wide">{theme.name}</span>
        
        {/* Visual Preview Dots */}
        <div className="flex items-center gap-1.5 ml-2">
          {/* Main Background Dot */}
          <span 
            className="w-3.5 h-3.5 rounded-full border border-white/20 shadow-sm" 
            style={{ backgroundColor: theme.bgPrimary }}
            title="Background"
          />
          {/* Accent Color Dot */}
          <span 
            className="w-3.5 h-3.5 rounded-full border border-white/20 shadow-sm" 
            style={{ backgroundColor: theme.accent }}
            title="Accent Highlight"
          />
          {/* Text/Foreground Dot */}
          <span 
            className="w-3.5 h-3.5 rounded-full border border-white/20 shadow-sm" 
            style={{ backgroundColor: theme.fgPrimary }}
            title="Text Primary"
          />
        </div>

        {/* Active Glow Indicator */}
        {isActive && (
          <motion.div
            className="absolute left-1.5 w-1 h-1/2 bg-[var(--accent)] rounded-full"
            layoutId="activeThemeIndicator"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </motion.button>
    );
  };

  return (
    <div className="space-y-6 pt-6 border-t border-[var(--fg-primary)]/10 text-[var(--fg-primary)]">
      <div>
        <h4 className="text-xs uppercase tracking-[0.25em] text-[var(--fg-primary)]/60 font-semibold mb-2 font-mono">
          Select Website Theme
        </h4>
        <p className="text-[11px] text-[var(--fg-primary)]/50 font-light leading-relaxed">
          Instantly shift Maskan&apos;s architectural mood and colors.
        </p>
      </div>

      {/* Dark Theme Section */}
      <div className="space-y-2.5">
        <span className="text-[10px] uppercase tracking-wider text-[var(--fg-primary)]/40 font-semibold font-mono block">
          Dark Themes
        </span>
        <div className="grid grid-cols-1 gap-2">
          {darkThemes.map(([key, theme]) => renderThemeButton(key, theme))}
        </div>
      </div>

      {/* Light Theme Section */}
      <div className="space-y-2.5 pt-2">
        <span className="text-[10px] uppercase tracking-wider text-[var(--fg-primary)]/40 font-semibold font-mono block">
          Light Themes
        </span>
        <div className="grid grid-cols-1 gap-2">
          {lightThemes.map(([key, theme]) => renderThemeButton(key, theme))}
        </div>
      </div>
    </div>
  );
}
