import { useTheme } from "./theme-context";
import { BuuTheme } from "./types";

export function useBuuTheme() {
    const theme = useTheme<BuuTheme>()

    if (!theme.__buu_theme) {
        throw new Error('buuThemeProvider was not found')
    }

    return theme
}