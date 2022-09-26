import React, { forwardRef } from "react";
import { DefaultProps, useBuuTheme, BuuSize } from "@buu/theme";

interface PaperProps extends DefaultProps, Omit<React.HTMLProps<HTMLDivElement>, 'ref'> {
    children: React.ReactNode;
    padding?: number | BuuSize;
}

const Paper = forwardRef(({
    className,
    children,
    padding = 0,
    themeOverride,
    ...others

}: PaperProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
        <div data-composable className="paper" ref={ref} {...others}>
            {children}
        </div>
    )
})

Paper.displayName = '@buu/core/Paper'

export default Paper