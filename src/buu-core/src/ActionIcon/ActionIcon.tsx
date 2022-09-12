import React, { forwardRef } from 'react'
import { DefaultProps, Theme } from '@buu/types'
import { useBuuTheme } from '@buu/theme'

interface ActionIconProps extends DefaultProps, Omit<React.HTMLProps<HTMLButtonElement>, 'ref'> {
  theme?: Theme;
  children: React.ReactNode;
}

const ActionIcon = forwardRef((
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
})

ActionIcon.displayName = '@buu/core/ActionIcon'

export default ActionIcon