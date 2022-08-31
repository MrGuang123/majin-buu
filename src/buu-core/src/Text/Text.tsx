import React from 'react'
import { DefaultProps, Size, Theme } from '@buu/types'

interface TextProps extends DefaultProps {
    component?: string;
    children?: React.ReactNode;
    size?: Size;
    theme?: Theme;
    bold?: boolean;
}

const Text = ({
    className,
    component = 'div',
    children,
    size = 'md',
    bold = false,
    theme,
    ...others
}: TextProps) => {
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