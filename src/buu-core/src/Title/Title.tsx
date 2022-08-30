import React from 'react'
import { DefaultProps } from '@buu/types'

interface TitleProps extends DefaultProps, Omit<React.HTMLProps<HTMLHeadingElement>, 'children'> {
    order?: 1 | 2 | 3 | 4 | 5 | 6;
    children?: React.ReactNode;
}

const Title = ({
    className,
    order = 1,
    children
}: TitleProps) => {
    const element = `h${order}`

    return React.createElement(
        element,
        { className: className },
        children
    )
}

export default Title