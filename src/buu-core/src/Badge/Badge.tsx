import React from 'react'
import { useBuuTheme, DefaultProps, BuuColor } from '@buu/theme';

type BadgeVariant = 'badge' | 'pill' | 'outline';

interface BadgeProps extends DefaultProps, React.HTMLProps<HTMLDivElement> {
  color?: BuuColor;
  variant?: BadgeVariant;
}

function getVariantStyle(variant: BadgeVariant, color: BuuColor) {
  const ocTheme = color || 'gray';

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
  color,
  variant = 'badge',
  children,
  style,
  ...others
}: BadgeProps) => {

  return (
    <div
      {...others}
      data-composable
      className='className'
      style={{ ...style, ...getVariantStyle(variant, color) }}
    >
      {children}
    </div>
  )
}

Badge.displayName = '@buu/core/Badge'

export default Badge