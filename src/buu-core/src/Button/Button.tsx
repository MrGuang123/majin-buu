import React, { forwardRef } from 'react'
import { useBuuTheme, DefaultProps, BuuColor, BuuSize } from '@buu/theme';


interface ButtonProps extends DefaultProps, Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  size?: BuuSize;
  type?: 'submit' | 'button' | 'reset';
  color?: BuuColor;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
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
      <span>{children}</span>
      {rightIcon && <span className='rightIcon'>{rightIcon}</span>}
    </button>
  )
})

Button.displayName = '@buu/core/Button'

export default Button