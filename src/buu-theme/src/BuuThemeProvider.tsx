import React from 'react'
import { ThemeProvider } from './theme-context'
import { DEFAULT_THEME } from './default-theme'

interface BuuProviderProps {
    children: React.ReactNode;
}

export function BuuProvider({ children }: BuuProviderProps) {
    return <ThemeProvider theme={DEFAULT_THEME}>{children}</ThemeProvider>
}