import React from 'react'
import { DefaultProps } from '@buu/types'

interface ColorSwatchProps extends DefaultProps {
    color: string;
    size?: number;
}

const ColorSwatch = ({
    className,
    color,
    size = 25,
    style,
    ...others
}: ColorSwatchProps) => {
    return (
        <div
            className='className'
            style={{ ...style, width: size, height: size, borderRadius: 25, backgroundColor: color }}
            data-composable
            {...others}
        />
    )
}

ColorSwatch.displayName = '@buu/core/ColorSwatch'

export default ColorSwatch