import React from 'react'
import { DefaultProps, useBuuTheme } from '@buu/theme'

interface TitleProps extends DefaultProps, React.HTMLProps<HTMLHeadingElement> {
    order?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Title = ({
    className,
    themeOverride,
    order = 1,
    style,
    children,
    ...others
}: TitleProps) => {
    const element = `h${order}`
    const theme = useBuuTheme(themeOverride)
    const [fontSize, lineHeight] = theme.headings[element]

    return React.createElement(
        element,
        { className: className },
        children
    )
}

Title.displayName = '@buu/core/Title'

export default Title