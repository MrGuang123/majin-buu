import React from 'react'
import { useBuuTheme, DefaultProps, BuuColor, BuuSize } from '@buu/theme'

interface TextProps extends DefaultProps {
    component?: React.ElementType<any>;
    children?: React.ReactNode;
    size?: BuuSize;
    color?: BuuColor;
    bold?: boolean;
    semibold?: boolean;
}

const Text = <T = Record<string, any>>({
    className,
    component = 'div',
    children,
    size = 'md',
    bold = false,
    semibold = false,
    color,
    themeOverride,
    ...others
}: TextProps & T) => {
    return React.createElement(
        component,
        {
            className: className,
            ...others
        },
        children
    )
}

Text.displayName = '@buu/core/Text'

export default Text