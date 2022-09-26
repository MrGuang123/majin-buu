import OpenColor from 'open-color';
import { createUseStyles } from 'react-jss';
import { theming, BuuTheme, BuuSize } from '@buu/theme';

export type PaperPadding = number | BuuSize;

export default createUseStyles(
    (theme: BuuTheme) => ({
        paper: {
            backgroundColor: OpenColor.white,
            boxSizing: 'border-box',
            borderRadius: 4,
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.2)',
            padding: ({ padding }: { padding: PaperPadding }) =>
                typeof padding === 'number' ? padding : theme.spacing[padding],
        },
    }),
    { theming }
);