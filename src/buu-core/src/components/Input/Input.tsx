import React, { forwardRef } from 'react'
import { DefaultProps } from '@buu/types'
import { clsx } from 'clsx'

interface InputProps extends DefaultProps, Omit<React.HTMLProps<HTMLInputElement>, 'ref'> {
  invalid?: boolean;
  icon?: React.ReactNode;
  inputClassName?: string;
}

const Input = forwardRef(({
  className,
  invalid = false,
  icon,
  style,
  inputClassName,
  ...others
}: InputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
  return (
    <div className='className' style={style}>
      {icon && <div>{icon}</div>}
      <input {...others} ref={ref} className={inputClassName} />
    </div>
  )
})

Input.displayName = '@buu/core/Input'

export default Input
