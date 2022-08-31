import React from 'react'
import { storiesOf } from '@storybook/react'
import Input from './Input'

storiesOf('@buu/core/Input', module).add('General Usage', () => {
  return <div style={{ maxWidth: 300 }}>
    <Input placeholder="Input" />
    <Input placeholder="Your password" icon='icon' style={{ marginTop: 15 }} />
  </div>
})