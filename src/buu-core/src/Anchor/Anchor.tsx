import React, { forwardRef } from "react";
import Text from '../Text/Text'

type HTMLAnchorProps = Omit<React.HTMLProps<HTMLAnchorElement>, 'size'>
interface AnchorProps extends React.ComponentProps<typeof Text>, HTMLAnchorProps { }

const Anchor = forwardRef(({ className, children, ...others }: AnchorProps, ref: React.ForwardedRef<HTMLAnchorElement>) => (
    <Text<HTMLAnchorProps>
        component="a"
        className="anchor"
        ref={ref}
        theme="primary"
        {...others}
    >
        {children}
    </Text>
))

Anchor.displayName = '@buu/core/Anchor'

export default Anchor