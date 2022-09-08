import React from "react";
import { storiesOf } from "@storybook/react";
import { COLOR_THEME_LIST } from "@buu/types";
import ElementsGroup from "../ElementsGroup/ElementsGroup";
import Badge from "./Badge";

const badges = COLOR_THEME_LIST.map(color => {
  return <Badge theme={color} key={color}>{color}</Badge>
})

const pills = COLOR_THEME_LIST.map((color) => (
  <Badge theme={color} key={color} variant="pill">
    {color}
  </Badge>
));

const outlines = COLOR_THEME_LIST.map((color) => (
  <Badge theme={color} key={color} variant="outline">
    {color}
  </Badge>
));

storiesOf('@buu/core/Badge', module).add('General Usage', () => {
  return (
    <>
      <ElementsGroup>{badges}</ElementsGroup>
      <ElementsGroup style={{ marginTop: 20 }}>{pills}</ElementsGroup>
      <ElementsGroup style={{ marginTop: 20 }}>{outlines}</ElementsGroup>
    </>
  )
})