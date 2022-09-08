import React from 'react'
import { DefaultProps } from '@buu/types'

interface ElementsGroupProps extends DefaultProps, React.HTMLProps<HTMLDivElement> {
    position?: 'right' | 'center' | 'left';
    noWrap?: boolean;
}

const ElementsGroup = ({
    className,
    position = 'left',
    children,
    noWrap = false,
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