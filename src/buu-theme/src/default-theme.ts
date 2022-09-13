import OpenColor from 'open-color'
import { BuuTheme } from './types'

export const DEFAULT_THEME: BuuTheme = {
    __buu_theme: true,
    colors: OpenColor,
    fontFamily: 'pingfang',
    primaryColor: 'green',
    fontSize: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 18,
        xl: 20,
    },
    spacing: {
        xs: 10,
        sm: 12,
        md: 16,
        lg: 20,
        xl: 24,
    },
    headings: {
        h1: [38, 1.2],
        h2: [30, 1.3],
        h3: [24, 1.35],
        h4: [20, 1.4],
        h5: [16, 1.5],
        h6: [14, 1.5],
    }
}

export default DEFAULT_THEME