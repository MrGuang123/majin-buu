import React from 'react'
import { nanoid } from 'nanoid'
import Input from '../Input/Input'
import InputWrapper, { InputWrapperBaseProps } from '../InputWrapper/InputWrapper'
import { DefaultProps } from '@buu/types'

interface TextInputProps extends DefaultProps, InputWrapperBaseProps, Omit<React.HTMLProps<HTMLInputElement>, 'onChange'> {
  type?: 'text' | 'password' | 'email' | 'search' | 'tel' | 'url';
  value: string;
  onChange(value: string): void;
  id?: string;
}

const TextInput = ({
  className,
  id,
  label,
  error,
  required,
  type = 'text',
  value,
  style,
  onChange,
  ...others
}: TextInputProps) => {
  const inputId = nanoid()
  return (
    <InputWrapper required={required} error={error} id={inputId} label={label} className={className} style={style}>
      <Input
        id={inputId}
        type={type}
        value={value}
        onChange={event => onChange(event.currentTarget.value)}
        invalid={!!error}
        {...others}
      />
    </InputWrapper>
  )
}

export default TextInput