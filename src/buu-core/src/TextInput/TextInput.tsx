import React, { forwardRef } from 'react'
import { useId } from '@buu/hooks'
import Input from '../Input/Input'
import InputWrapper, { InputWrapperBaseProps } from '../InputWrapper/InputWrapper'
import { DefaultProps } from '@buu/theme'

interface TextInputProps extends DefaultProps, InputWrapperBaseProps, Omit<React.HTMLProps<HTMLInputElement>, 'onChange' | 'ref'> {
  type?: 'text' | 'password' | 'email' | 'search' | 'tel' | 'url';
  value: string;
  onChange(value: string): void;
  id?: string;
  icon?: React.ReactNode;
}

const TextInput = forwardRef(({
  className,
  id,
  label,
  error,
  required,
  type = 'text',
  value,
  style,
  onChange,
  icon,
  themeOverride,
  ...others
}: TextInputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
  const inputId = useId(id)
  return (
    <InputWrapper
      required={required}
      error={error}
      id={inputId}
      label={label}
      className={className}
      style={style}
      themeOverride={themeOverride}
    >
      <Input
        {...others}
        ref={ref}
        id={inputId}
        type={type}
        value={value}
        onChange={event => onChange(event.currentTarget.value)}
        invalid={!!error}
        icon={icon}
        themeOverride={themeOverride}
      />
    </InputWrapper>
  )
})

TextInput.displayName = '@buu/core/TextInput'

export default TextInput