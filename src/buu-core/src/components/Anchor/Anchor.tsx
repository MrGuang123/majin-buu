import React, { forwardRef } from "react";
import { DefaultProps } from "@buu/types";

interface AnchorProps extends DefaultProps, React.HTMLProps<HTMLAnchorElement> { }

const Anchor = forwardRef(({ className, children, ...others }: AnchorProps, ref: React.ForwardedRef<HTMLAnchorElement>) => (
    <a className="anthor" ref={ref} {...others}>
        {children}
    </a>
))

Anchor.displayName = '@buu/core/Anchor'

export default Anchor