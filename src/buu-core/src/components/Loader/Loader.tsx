import React from "react";
import { DefaultProps } from "@buu/types";

interface LoaderProps extends DefaultProps, React.HTMLProps<HTMLDivElement> {
    size?: number;
}

export default function Loader({
    className,
    size = 36,
    style,
    ...others
}: LoaderProps) {
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