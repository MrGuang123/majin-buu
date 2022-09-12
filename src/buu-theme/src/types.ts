import OpenColor from 'open-color'

export interface BuuTheme {
    __buu_theme: boolean;
    colors: typeof OpenColor;
    fontFamily: string;
}