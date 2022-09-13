import React from "react";
import { DefaultProps, BuuColor, useBuuTheme } from "@buu/theme";

interface LoaderProps extends DefaultProps, React.HTMLProps<HTMLDivElement> {
    size?: number;
    color?: BuuColor;
}

export default function Loader({
    className,
    size = 36,
    color,
    style,
    ...others
}: LoaderProps) {
    const theme = useBuuTheme()
    return (
        <div
            {...others}
            className="loader"
            style={{
                ...style,
                width: size,
                height: size,
                borderWidth: Math.max(Math.round(size / 6), 2)
            }}
        />
    )
}

Loader.displayName = '@buu/core/Loader'