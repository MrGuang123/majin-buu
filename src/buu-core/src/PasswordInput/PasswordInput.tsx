import React from 'react'
import { useId } from '@buu/hooks'
import { DefaultProps } from '@buu/types'
import InputWrapper, { InputWrapperBaseProps } from '../InputWrapper/InputWrapper'
import ActionIcon from '../ActionIcon/ActionIcon'
import Input from '../Input/Input'
import { useState } from '@storybook/addons'

interface PasswordInputProps
  extends DefaultProps,
  InputWrapperBaseProps,
  Omit<React.HTMLProps<HTMLInputElement>, 'onChange'> {
  value: string;
  onChange(value: string): void;
  id?: string;
  icon?: React.ReactNode;
}

const PasswordInput = ({
  className,
  id,
  value,
  label,
  error,
  required,
  style,
  onChange,
  icon,
  ...others
}: PasswordInputProps) => {
  const [showPwd, setShowPwd] = useState(false)
  const inputId = useId(id)

  return (
    <InputWrapper
      className={className}
      required={required}
      id={inputId}
      label={label}
      error={error}
      style={style}
    >
      <div className={className}>
        <Input
          {...others}
          inputClassName={className}
          type={showPwd ? 'text' : 'password'}
          value={value}
          invalid={!!error}
          icon={icon}
          onChange={event => onChange(event.currentTarget.value)}
        />
        <ActionIcon
          className='className'
          onClick={() => setShowPwd(current => !current)}
        >
          {showPwd ? 'openIcon' : 'closeIcon'}
        </ActionIcon>
      </div>
    </InputWrapper>
  )
}

PasswordInput.displayName = '@buu/core/PasswordInput'

export default PasswordInput