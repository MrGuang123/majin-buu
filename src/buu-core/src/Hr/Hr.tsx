import React from "react";
import { DefaultProps } from "@buu/types";

interface HrProps extends DefaultProps {
    type?: 'solid' | 'dashed' | 'dotted';
}

export default function Hr({ className, type = 'dashed', style, ...others }: HrProps) {
    return (
        <hr
            className="hr"
            style={{ ...style, borderTopStyle: type }}
            {...others}
        />
    )
}

Hr.displayName = '@buu/core/Hr'