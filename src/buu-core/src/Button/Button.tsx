import React from 'react'
import { DefaultProps, ColorThemeList } from '@buu/types'


interface ButtonProps extends DefaultProps, React.HTMLProps<HTMLButtonElement> {
  type?: 'submit' | 'button' | 'reset';
  theme?: ColorThemeList;
  disabled?: boolean;
  children: string;
}

const Button = ({
  className,
  theme = 'blue',
  type = 'button',
  disabled = false,
  children,
  ...others
}: ButtonProps) => {
  return (
    <button type={type} disabled={disabled} className={className} {...others}>
      {children}
    </button>
  )
}

export default Button