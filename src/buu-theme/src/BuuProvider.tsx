import React from "react";
import { BuuThemeOverride } from "./types";
import { ThemeProvider } from "./theme-context";
import { DEFAULT_THEME } from './default-theme'

interface BuuProviderProps {
    children: React.ReactNode;
    theme?: BuuThemeOverride;
}

export function BuuProvider({ children, theme }: BuuProviderProps) {
    return <ThemeProvider theme={{ ...DEFAULT_THEME, ...theme }}>{children}</ThemeProvider>
}