import React, { forwardRef } from "react";
import { DefaultProps } from "@buu/theme";

interface DropdownBodyProps extends DefaultProps, Omit<React.HTMLProps<HTMLDivElement>, 'ref'> {
  children: React.ReactNode;
  noPadding?: boolean;
}

const DropdownBody = forwardRef(({
  className,
  children,
  noPadding = false,
  ...others
}: DropdownBodyProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  return (
    <div className="className" ref={ref} {...others}>
      {children}
    </div>
  )
})

DropdownBody.displayName = '@buu/core/DropdownBody'

export default DropdownBody