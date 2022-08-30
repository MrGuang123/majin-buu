import React from 'react'
import { DefaultProps, Size } from '@buu/types'

interface TextProps extends DefaultProps {
    component?: string;
    children?: React.ReactNode;
    size?: Size;
    theme?: 'error' | 'warning' | 'success' | 'muted';
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

export default Text