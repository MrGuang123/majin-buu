import React from 'react'
import { DefaultProps, ColorThemeList, COLOR_THEME_LIST } from '@buu/types'

type BadgeVariant = 'badge' | 'pill' | 'outline';

interface BadgeProps extends DefaultProps, React.HTMLProps<HTMLDivElement> {
  theme?: ColorThemeList;
  variant?: BadgeVariant;
}

function getVariantStyle(variant: BadgeVariant, theme: ColorThemeList) {
  const ocTheme = COLOR_THEME_LIST.includes(theme) ? theme : 'gray';

  switch (variant) {
    case 'badge':
      return { backgroundColor: ocTheme[0], color: ocTheme[9] };

    case 'pill':
      return { backgroundColor: ocTheme[6], textShadow: `1px 1px 0 ${ocTheme[8]}` };

    case 'outline':
      return { borderColor: ocTheme[6], color: ocTheme[6] };

    default:
      return {};
  }
}

const Badge = ({
  className,
  theme = 'grey',
  variant = 'badge',
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
      style={{ ...style, ...getVariantStyle(variant, theme) }}
    >
      {children}
    </div>
  )
}

Badge.displayName = '@buu/core/Badge'

export default Badge