import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import TextInput from './TextInput'

const WrappedTextInput = (props: Omit<React.ComponentProps<typeof TextInput>, 'value' | 'onChange'>) => {
  const [value, onChange] = useState('')

  return (
    <div style={{ maxWidth: 300, marginTop: 20 }}>
      <TextInput value={value} onChange={onChange} {...props} />
    </div>
  )
}

storiesOf('@buu/core/TextInput', module).add('General usage', () => {
  return (
    <div>
      <WrappedTextInput label="Email" required placeholder='Email' type='email' />
      <WrappedTextInput label="Password" required placeholder='password' type='password' />
      <WrappedTextInput label="with error" placeholder='with error' error='this field is invalid' type='email' />
    </div>
  )
})