import React from "react";
import { DefaultProps } from "@buu/types";

interface AvatarProps extends DefaultProps {
    src: string;
    size?: number;
    alt?: string;
}

export default function Avatar({ className, size = 60, style, src, alt, ...others }: AvatarProps) {
    return (
        <div
            data-composable
            className="avatar"
            style={{ ...style, width: size, height: size, borderRadius: size }}
            {...others}
        >
            <img className="image" src={src} alt={alt} />
        </div>
    )
}

Avatar.displayName = '@buu/core/Avatar'