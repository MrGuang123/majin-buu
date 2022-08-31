import React from 'react'
import { DefaultProps } from '@buu/types'
import { clsx } from 'clsx'

interface InputProps extends DefaultProps, React.HTMLProps<HTMLInputElement> {
  invalid?: boolean;
  icon?: React.ReactNode;
  inputClassName?: string;
}

const Input = ({
  className,
  invalid = false,
  icon,
  style,
  inputClassName,
  ...others
}: InputProps) => {
  return (
    <div className='className' style={style}>
      {icon && <div>{icon}</div>}
      <input className={inputClassName} {...others} />
    </div>
  )
}

Input.displayName = '@buu/core/Input'

export default Input
