import React from "react";
import { DefaultProps } from "@buu/theme";
import Loader from '../Loader/Loader'

interface LoadingOverlayProps extends DefaultProps, React.HTMLProps<HTMLDivElement> {
    loaderSize?: number;
    visible: boolean;
}

export default function LoadingOverlay({
    className,
    visible,
    loaderSize,
    themeOverride,
    ...others
}: LoadingOverlayProps) {
    if (!visible) {
        return null
    }

    return (
        <div className="loadingOverlay" {...others}>
            <Loader size={loaderSize} themeOverride={themeOverride} />
        </div>
    )
}

LoadingOverlay.displayName = '@buu/core/LoadingOverlay'