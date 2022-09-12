import type { CSSProperties } from 'react';
import type OpenColor from 'open-color'

export type BuuSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type BuuColor = Exclude<keyof OpenColor, 'white' | 'black'>

type HeadingStyle = [number, number]

export interface BuuTheme {
    __buu_theme: boolean;
    colors: OpenColor;
    fontFamily: string;
    primaryColor: BuuColor;
    fontSize: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
    };
    headings: {
        h1: HeadingStyle;
        h2: HeadingStyle;
        h3: HeadingStyle;
        h4: HeadingStyle;
        h5: HeadingStyle;
        h6: HeadingStyle;
    };
}

export type BuuThemeOverride = Partial<Omit<BuuTheme, '__buu_theme'>>


// export type BuuColorTheme = 'primary' | 'danger' | 'warning' | 'success' | 'muted'

export interface DefaultProps {
    className?: string;
    style?: CSSProperties;
    themeOverride?: BuuThemeOverride;
}