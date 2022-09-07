import React from 'react'
import { DefaultProps } from '@buu/types'

interface ColorSwatchProps extends DefaultProps, React.HTMLProps<HTMLDivElement> {
    color: string;
    size?: number;
}

const ColorSwatch = ({
    color,
    size = 25,
    style,
    ...others
}: ColorSwatchProps) => {
    return (
        <div
            style={{ ...style, width: size, height: size, borderRadius: 25, backgroundColor: color }}
            data-composable
            {...others}
        />
    )
}

ColorSwatch.displayName = '@buu/core/ColorSwatch'

export default ColorSwatch