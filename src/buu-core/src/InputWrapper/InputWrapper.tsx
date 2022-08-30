import React from 'react'
import { DefaultProps } from '@buu/types'

export interface InputWrapperBaseProps {
  label?: string;
  error?: string;
  required?: boolean;
}

interface InputWrapperProps extends DefaultProps, InputWrapperBaseProps {
  id: string;
  children: React.ReactChild;
}

const InputWrapper = ({
  className,
  label,
  children,
  id,
  required,
  ...others
}: InputWrapperProps) => {
  return (
    <div className={className} {...others}>
      {label && (
        <label className={className} htmlFor={id}>{label}</label>
      )}
    </div>
  )
}

export default InputWrapper