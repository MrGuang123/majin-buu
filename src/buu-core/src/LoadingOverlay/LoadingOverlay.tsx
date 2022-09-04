import React from "react";
import { DefaultProps } from "@buu/types";
import Loader from '../Loader/Loader'

interface LoadingOverlayProps extends DefaultProps {
    loaderSize?: number;
    visible: boolean;
}

export default function LoadingOverlay({
    className,
    visible,
    loaderSize,
    ...others
}: LoadingOverlayProps) {
    if (!visible) {
        return null
    }

    return (
        <div className="loadingOverlay" {...others}>
            <Loader size={loaderSize} />
        </div>
    )
}

LoadingOverlay.displayName = '@buu/core/LoadingOverlay'