import React, { useState } from "react";
import { useBuuTheme, DefaultProps } from '@buu/theme'

interface AvatarProps extends DefaultProps, Omit<React.HTMLProps<HTMLDivElement>, 'ref'> {
    src: string;
    size?: number;
    alt?: string;
}

export default function Avatar({ className, size = 60, style, src, alt, ...others }: AvatarProps) {
    const [error, setError] = useState(!src)

    return (
        <div
            {...others}
            data-composable
            className="avatar"
            style={{ ...style, width: size, height: size, borderRadius: size }}
        >
            {error ? (
                <div className="placeholder" style={{ width: size, height: size, borderRadius: size }}>
                    AvatarIcon
                </div>
            ) : (
                <img className="image" src={src} alt={alt} onError={() => setError(true)} />
            )}
        </div>
    )
}

Avatar.displayName = '@buu/core/Avatar'