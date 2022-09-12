import React from "react";
import { storiesOf } from "@storybook/react";
import { COLOR_THEME_LIST } from "@buu/types";
import { BuuProvider } from '@buu/theme'
import ElementsGroup from "../ElementsGroup/ElementsGroup";
import Badge from "./Badge";

const badges = COLOR_THEME_LIST.map(color => {
  return <Badge color={color} key={color}>{color}</Badge>
})

const pills = COLOR_THEME_LIST.map((color) => (
  <Badge color={color} key={color} variant="pill">
    {color}
  </Badge>
));

const outlines = COLOR_THEME_LIST.map((color) => (
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