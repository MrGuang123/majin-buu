import React from 'react'
import { DefaultProps, ColorThemeList, COLOR_THEME_LIST } from '@buu/types'

interface BadgeProps extends DefaultProps {
  theme?: ColorThemeList;
  children: React.ReactNode;
}

const Badge = ({ className, theme = 'grey', children, style }: BadgeProps) => {
  const useTheme = COLOR_THEME_LIST.includes(theme) ? theme : 'grey'

  return (
    <div
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