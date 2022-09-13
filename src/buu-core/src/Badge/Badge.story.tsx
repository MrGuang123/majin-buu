import React from "react";
import { storiesOf } from "@storybook/react";
import { BuuProvider, DEFAULT_THEME, BuuColor } from '@buu/theme'
import ElementsGroup from "../ElementsGroup/ElementsGroup";
import Badge from "./Badge";

const colors = Object.keys(DEFAULT_THEME.colors).filter(
  (color) => color !== 'white' && color !== 'black'
);

const badges = colors.map((color: BuuColor) => {
  return <Badge color={color} key={color}>{color}</Badge>
})

const pills = colors.map((color: BuuColor) => (
  <Badge color={color} key={color} variant="pill">
    {color}
  </Badge>
));

const outlines = colors.map((color: BuuColor) => (
  <Badge color={color} key={color} variant="outline">
    {color}
  </Badge>
));

storiesOf('@buu/core', module).add('Badge', () => {
  return (
    <>
      <ElementsGroup>{badges}</ElementsGroup>
      <ElementsGroup style={{ marginTop: 20 }}>{pills}</ElementsGroup>
      <ElementsGroup style={{ marginTop: 20 }}>{outlines}</ElementsGroup>
    </>
  )
})