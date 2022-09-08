import React from 'react'
import { DefaultProps } from '@buu/types'
import Text from '../Text/Text'

export interface InputWrapperBaseProps {
  label?: string;
  error?: string;
  required?: boolean;
}

interface InputWrapperProps extends DefaultProps, InputWrapperBaseProps, React.HTMLProps<HTMLDivElement> {
  id: string;
  children: React.ReactChild;
}

const InputWrapper = ({
  className,
  label,
  children,
  id,
  required,
  error,
  ...others
}: InputWrapperProps) => {
  return (
    <div className={className} {...others}>
      {label && (
        <label className={className} htmlFor={id}>
          {label} {required && <span>*</span>}
        </label>
      )}
      {children}
      {error && (
        <Text theme='danger' size='sm' className='error'>{error}</Text>
      )}
    </div>
  )
}

InputWrapper.displayName = '@buu/core/InputWrapper'

export default InputWrapper