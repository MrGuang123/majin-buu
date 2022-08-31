import React from "react";
import { storiesOf } from "@storybook/react";
import { COLOR_THEME_LIST } from "@buu/types";
import ElementsGroup from "../ElementsGroup/ElementsGroup";
import Badge from "./Badge";

const badges = COLOR_THEME_LIST.map(color => {
  return <Badge theme={color} key={color}>{color}</Badge>
})

storiesOf('@buu/core/Badge', module).add('General Usage', () => {
  return <ElementsGroup>{badges}</ElementsGroup>
})