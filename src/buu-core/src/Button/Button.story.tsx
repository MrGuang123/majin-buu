import React from 'react'
import { storiesOf } from '@storybook/react'
import { BuuColor, BuuProvider, BuuSize, DEFAULT_THEME } from '@buu/theme'
import ElementsGroup from '../ElementsGroup/ElementsGroup'
import Button from './Button'

const colors = Object.keys(DEFAULT_THEME.colors).filter(
  (color) => color !== 'white' && color !== 'black'
) as BuuColor[];

const xs = colors.map((theme) => (
  <Button color={theme} key={theme} size="xs">
    {`${theme} xs`}
  </Button>
));

const sm = colors.map((theme) => (
  <Button color={theme} key={theme} size="sm">
    {`${theme} sm`}
  </Button>
));

const md = colors.map((theme) => (
  <Button color={theme} key={theme} size="md">
    {`${theme} md`}
  </Button>
));

const lg = colors.map((theme) => (
  <Button color={theme} key={theme} size="lg">
    {`${theme} lg`}
  </Button>
));

const xl = colors.map((theme) => (
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