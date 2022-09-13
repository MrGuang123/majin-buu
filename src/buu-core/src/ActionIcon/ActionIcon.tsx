import React, { forwardRef } from 'react'
import { useBuuTheme, DefaultProps, BuuColor } from '@buu/theme'

interface ActionIconProps extends DefaultProps, Omit<React.HTMLProps<HTMLButtonElement>, 'ref'> {
  color?: BuuColor;
}

const ActionIcon = forwardRef((
  { className, color, children, themeOverride, ...others }: ActionIconProps,
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