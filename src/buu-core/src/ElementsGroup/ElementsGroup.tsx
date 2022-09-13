import React from 'react'
import { DefaultProps, useBuuTheme, BuuSize } from '@buu/theme'


export type ElementsGroupPosition = 'right' | 'center' | 'left'
export type ElementsGroupSpacig = BuuSize | number;
interface ElementsGroupProps extends DefaultProps, React.HTMLProps<HTMLDivElement> {
    position?: ElementsGroupPosition;
    noWrap?: boolean;
    grow?: boolean;
    spacing?: ElementsGroupSpacig;
}

const ElementsGroup = ({
    className,
    position = 'left',
    children,
    noWrap = false,
    grow = false,
    spacing = 'md',
    themeOverride,
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