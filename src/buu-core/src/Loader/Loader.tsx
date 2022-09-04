import React from "react";
import { DefaultProps } from "@buu/types";

interface LoaderProps extends DefaultProps {
    size?: number;
}

export default function Loader({
    className,
    size = 36,
    style
}: LoaderProps) {
    return (
        <div
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