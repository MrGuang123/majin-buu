import React from 'react'
import { DefaultProps } from '@buu/types'

interface ColorSwatchProps extends DefaultProps {
    color: string;
}

const ColorSwatch = ({
    className,
    color,
    style,
    ...others
}: ColorSwatchProps) => {
    return (
        <div
            className='className'
            style={{ ...style, backgroundColor: color }}
            data-composable
            {...others}
        />
    )
}

ColorSwatch.displayName = '@buu/core/ColorSwatch'

export default ColorSwatch