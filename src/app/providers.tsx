"use client";
import { useEffect } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { RainbowKitProvider } from "./RainbowKitProvider";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  const { setTheme } = useTheme();
  useEffect(() => {
    const setThemeFromSystem = () => {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDarkMode ? "dark" : "light");
      console.log(123123, prefersDarkMode);
    };

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", setThemeFromSystem);

    setThemeFromSystem();

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", setThemeFromSystem);
    };
  }, []);

  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class">
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
