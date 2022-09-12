import React, { forwardRef } from 'react'
import { DefaultProps, ColorThemeList, Size } from '@buu/types'
import { useBuuTheme } from '@buu/theme';
import Loader from '../Loader/Loader'


interface ButtonProps extends DefaultProps, Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  size?: Size;
  type?: 'submit' | 'button' | 'reset';
  color?: ColorThemeList;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
}

const loader_size = {
  xs: 8,
  sm: 10,
  md: 12,
  lg: 14,
  xl: 16
}

const Button = forwardRef(({
  className,
  size = 'md',
  color = 'blue',
  type = 'button',
  disabled = false,
  children,
  leftIcon,
  rightIcon,
  loading,
  ...others
}: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
  return (
    <button
      {...others}
      type={type}
      disabled={disabled}
      className={className}
      data-composable
      ref={ref}
    >
      {loading && (
        <Loader color={color || 'blue'} size={loader_size[size]} className="loader" />
      )}
      {!loading && leftIcon && <span className='lefticon'>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className='rightIcon'>{rightIcon}</span>}
    </button>
  )
})

Button.displayName = '@buu/core/Button'

export default Button