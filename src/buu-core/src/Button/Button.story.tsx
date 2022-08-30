import React from 'react'
import { storiesOf } from '@storybook/react'
import { COLOR_THEME_LIST } from '@buu/types'
import Button from './Button'

const themes = COLOR_THEME_LIST.map(theme => {
  return (
    <div key={theme} style={{ marginTop: 10 }}>
      <Button theme={theme}>{theme}</Button>
    </div>
  )
})

storiesOf('@buu/core/Button', module).add('General usage', () => {
  return (
    <div>
      <div style={{ marginTop: 10 }}>
        <Button theme='blue'>Blue</Button>
      </div>
      {themes}
      <div style={{ marginTop: 10 }}>
        <Button disabled>Disabled</Button>
      </div>
    </div>
  )
})