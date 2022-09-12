import React from "react";
import { DefaultProps } from "@buu/types";
import { useBuuTheme } from '@buu/theme'

interface HrProps extends DefaultProps, React.HTMLProps<HTMLHRElement> {
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