import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import TextInput from './TextInput'

const WrappedTextInput = (props: Omit<React.ComponentProps<typeof TextInput>, 'value' | 'onChange'>) => {
  const [value, onChange] = useState('')

  return (
    <div style={{ maxWidth: 300 }}>
      <TextInput value={value} onChange={onChange} {...props} />
    </div>
  )
}

storiesOf('@buu/core/TextInput', module).add('General usage', () => {
  return <WrappedTextInput label="Email" placeholder='Email' type='email' />
})