import React from 'react'
import { DefaultProps } from '@buu/types'
import { clsx } from 'clsx'

interface InputProps extends DefaultProps, React.HTMLProps<HTMLInputElement> {
  invalid?: boolean;
}

const Input = ({ className, invalid = false, ...others }: InputProps) => {
  return <input className={className} {...others} />
}

export default Input
