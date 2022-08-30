import React from 'react'
import { nanoid } from 'nanoid'
import Input from '../Input/Input'
import InputWrapper from '../InputWrapper/InputWrapper'
import { DefaultProps } from '@buu/types'

interface TextInputProps extends DefaultProps, Omit<React.HTMLProps<HTMLInputElement>, 'onChange'> {
  type?: 'text' | 'password' | 'email' | 'search' | 'tel' | 'url';
  label?: string;
  value: string;
  onChange(value: string): void;
  id?: string;
}

const TextInput = ({
  className,
  id,
  label,
  type = 'text',
  value,
  style,
  onChange,
  ...others
}: TextInputProps) => {
  const inputId = nanoid()
  return (
    <InputWrapper id={inputId} label={label} className={className} style={style}>
      <Input
        id={inputId}
        type={type}
        value={value}
        onChange={event => onChange(event.currentTarget.value)}
        {...others}
      />
    </InputWrapper>
  )
}

export default TextInput