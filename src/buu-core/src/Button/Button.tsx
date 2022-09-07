import React, { forwardRef } from 'react'
import { DefaultProps, ColorThemeList } from '@buu/types'


interface ButtonProps extends DefaultProps, React.HTMLProps<HTMLButtonElement> {
  type?: 'submit' | 'button' | 'reset';
  theme?: ColorThemeList;
  disabled?: boolean;
  children: string;
}

const Button = forwardRef(({
  className,
  theme = 'blue',
  type = 'button',
  disabled = false,
  children,
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
      {children}
    </button>
  )
})

Button.displayName = '@buu/core/Button'

export default Button