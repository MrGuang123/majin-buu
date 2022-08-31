import React from 'react'
import { DefaultProps, Theme } from '@buu/types'

interface ActionIconProps extends DefaultProps, React.HTMLProps<HTMLButtonElement> {
  theme?: Theme;
  children: React.ReactNode;
}

const ActionIcon = ({
  className,
  theme = 'muted',
  children,
  ...others
}: ActionIconProps) => {
  return (
    <button
      {...others}
      className={className}
      type="button"
    >
      {children}
    </button>
  )
}

ActionIcon.displayName = '@buu/core/ActionIcon'

export default ActionIcon