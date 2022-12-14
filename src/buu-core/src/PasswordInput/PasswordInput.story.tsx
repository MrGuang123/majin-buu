import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { BuuProvider } from '@buu/theme'
import PasswordInput from "./PasswordInput";

const WrappedPasswordInput = (props: Omit<React.ComponentProps<typeof PasswordInput>, 'value' | 'onChange'>) => {
  const [value, onChange] = useState('')

  return (
    <div>
      <PasswordInput value={value} onChange={onChange} {...props} />
    </div>
  )
}

storiesOf('@mantine/core', module).add('PasswordInput', () => (
  <div>
    <WrappedPasswordInput label="Password" required placeholder="password" type="password" />
    <WrappedPasswordInput
      label="With error"
      placeholder="With error"
      error="This field is invalid"
      icon="icon"
    />
    <WrappedPasswordInput
      label="With error"
      placeholder="With error"
      error="This field is invalid"
    />
  </div>
));