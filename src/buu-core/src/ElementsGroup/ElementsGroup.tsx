import React from 'react'
import { DefaultProps } from '@buu/types'

interface ElementsGroupProps extends DefaultProps, React.HTMLProps<HTMLDivElement> {
    position?: 'right' | 'center' | 'left';
    children: React.ReactNode;
}

const ElementsGroup = ({
    className,
    position = 'left',
    children,
    ...others
}: ElementsGroupProps) => {
    return (
        <div className={className} {...others}>
            {children}
        </div>
    )
}

export default ElementsGroup