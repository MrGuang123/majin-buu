import React, { forwardRef } from 'react'
import { DefaultProps, Theme } from '@buu/types'

interface ActionIconProps extends DefaultProps, React.HTMLProps<HTMLButtonElement> {
  theme?: Theme;
  children: React.ReactNode;
}

const ActionIcon = (
  { className, theme = 'muted', children, ...others }: ActionIconProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) => {
  return (
    <button
      {...others}
      className={className}
      type="button"
      ref={ref}
    >
      {children}
    </button>
  )
}

ActionIcon.displayName = '@buu/core/ActionIcon'

export default ActionIcon