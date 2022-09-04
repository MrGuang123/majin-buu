import React from "react";
import { DefaultProps, ColorThemeList } from "@buu/types";

interface PillProps extends DefaultProps {
    theme?: ColorThemeList;
    children: React.ReactNode;
}

export default function Pill({ className, theme = 'blue', children, style, ...others }: PillProps) {
    const colorTheme = 'blue'

    return (
        <div
            {...others}
            data-composable
            className="pill"
            style={{
                ...style,
                backgroundColor: colorTheme[6],
                textShadow: `1px 1px 0 ${colorTheme[9]}`
            }}
        >
            {children}
        </div>
    )
}

Pill.displayName = '@buu/core/Pill'