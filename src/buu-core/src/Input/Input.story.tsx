import React from 'react'
import { storiesOf } from '@storybook/react'
import { BuuProvider } from '@buu/theme'
import Input from './Input'

storiesOf('@buu/core', module).add('Input', () => {
  return <div style={{ maxWidth: 300 }}>
    <Input placeholder="Input" />
    <Input placeholder="Your password" icon='icon' style={{ marginTop: 15 }} />
  </div>
})