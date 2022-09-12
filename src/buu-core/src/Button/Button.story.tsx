import React from 'react'
import { storiesOf } from '@storybook/react'
import { COLOR_THEME_LIST } from '@buu/types'
import { BuuProvider } from '@buu/theme'
import ElementsGroup from '../ElementsGroup/ElementsGroup'
import Button from './Button'

const xs = COLOR_THEME_LIST.map((theme) => (
  <Button color={theme} key={theme} size="xs">
    {`${theme} xs`}
  </Button>
));

const sm = COLOR_THEME_LIST.map((theme) => (
  <Button color={theme} key={theme} size="sm">
    {`${theme} sm`}
  </Button>
));

const md = COLOR_THEME_LIST.map((theme) => (
  <Button color={theme} key={theme} size="md">
    {`${theme} md`}
  </Button>
));

const lg = COLOR_THEME_LIST.map((theme) => (
  <Button color={theme} key={theme} size="lg">
    {`${theme} lg`}
  </Button>
));

const xl = COLOR_THEME_LIST.map((theme) => (
  <Button color={theme} key={theme} size="xl">
    {`${theme} xl`}
  </Button>
));

storiesOf('@mantine/core', module).add('Button', () => (
  <>
    <Button color="blue">White (default)</Button>
    <ElementsGroup style={{ marginTop: 10 }}>{xs}</ElementsGroup>
    <ElementsGroup style={{ marginTop: 10 }}>{sm}</ElementsGroup>
    <ElementsGroup style={{ marginTop: 10 }}>{md}</ElementsGroup>
    <ElementsGroup style={{ marginTop: 10 }}>{lg}</ElementsGroup>
    <ElementsGroup style={{ marginTop: 10 }}>{xl}</ElementsGroup>
    <Button style={{ marginTop: 10 }} disabled>
      Disabled
    </Button>
  </>
));