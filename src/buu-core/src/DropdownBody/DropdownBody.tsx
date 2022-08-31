import React from "react";
import { DefaultProps } from "@buu/types";

interface DropdownBodyProps extends DefaultProps {
  children: React.ReactNode;
  noPadding?: boolean;
}

const DropdownBody = ({
  className,
  children,
  noPadding = false,
  ...others
}: DropdownBodyProps) => {
  return (
    <div className="className" {...others}>
      {children}
    </div>
  )
}

DropdownBody.displayName = '@buu/core/DropdownBody'

export default DropdownBody