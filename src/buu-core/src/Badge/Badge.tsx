import React from 'react'
import { DefaultProps, ColorThemeList, COLOR_THEME_LIST } from '@buu/types'

interface BadgeProps extends DefaultProps, React.HTMLProps<HTMLDivElement> {
  theme?: ColorThemeList;
}

const Badge = ({
  className,
  theme = 'grey',
  children,
  style,
  ...others
}: BadgeProps) => {
  const useTheme = COLOR_THEME_LIST.includes(theme) ? theme : 'grey'

  return (
    <div
      {...others}
      data-composable
      className='className'
      style={{ ...style, backgroundColor: useTheme, color: useTheme }}
    >
      {children}
    </div>
  )
}

Badge.displayName = '@buu/core/Badge'

export default Badge