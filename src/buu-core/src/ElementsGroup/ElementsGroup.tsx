import React from 'react'
import { DefaultProps } from '@buu/types'


export type ElementsGroupPosition = 'right' | 'center' | 'left'
interface ElementsGroupProps extends DefaultProps, React.HTMLProps<HTMLDivElement> {
    position?: ElementsGroupPosition;
    noWrap?: boolean;
    grow?: boolean;
    spacing?: number;
}

const ElementsGroup = ({
    className,
    position = 'left',
    children,
    noWrap = false,
    grow = false,
    spacing = 10,
    ...others
}: ElementsGroupProps) => {
    return (
        <div className={className} {...others}>
            {children}
        </div>
    )
}

ElementsGroup.displayName = '@buu/core/ElementsGroup'

export default ElementsGroup