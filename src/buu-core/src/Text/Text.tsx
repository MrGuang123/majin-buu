import React from 'react'
import { DefaultProps, Size, Theme } from '@buu/types'

interface TextProps extends DefaultProps {
    component?: React.ElementType<any>;
    children?: React.ReactNode;
    size?: Size;
    theme?: Theme;
    bold?: boolean;
}

const Text = <T = Record<string, any>>({
    className,
    component = 'div',
    children,
    size = 'md',
    bold = false,
    theme,
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