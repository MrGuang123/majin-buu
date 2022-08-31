import React from "react";
import { DefaultProps } from "@buu/types";

interface DropdownBodyProps extends DefaultProps {
  children: React.ReactNode;
  elementRef?: React.RefObject<HTMLDivElement>;
  noPadding?: boolean;
}

const DropdownBody = ({
  className,
  children,
  noPadding = false,
  elementRef,
  ...others
}: DropdownBodyProps) => {
  return (
    <div className="className" ref={elementRef} {...others}>
      {children}
    </div>
  )
}

DropdownBody.displayName = '@buu/core/DropdownBody'

export default DropdownBody