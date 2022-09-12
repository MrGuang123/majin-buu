import type OpenColor from "open-color";

import { useTheme } from "./theme-context";
import { BuuTheme, BuuThemeOverride } from "./types";

export function useBuuTheme(themeOverride?: BuuThemeOverride) {
    const theme = useTheme<BuuTheme>()

    if (!theme.__buu_theme) {
        throw new Error('buuProvider was not found')
    }

    return { ...theme, ...themeOverride }
}