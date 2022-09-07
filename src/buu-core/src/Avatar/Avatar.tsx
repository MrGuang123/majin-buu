import React from "react";
import { DefaultProps } from "@buu/types";

interface AvatarProps extends DefaultProps, React.HTMLProps<HTMLDivElement> {
    src: string;
    size?: number;
    alt?: string;
}

export default function Avatar({ className, size = 60, style, src, alt, ...others }: AvatarProps) {
    return (
        <div
            {...others}
            data-composable
            className="avatar"
            style={{ ...style, width: size, height: size, borderRadius: size }}
        >
            <img className="image" src={src} alt={alt} />
        </div>
    )
}

Avatar.displayName = '@buu/core/Avatar'