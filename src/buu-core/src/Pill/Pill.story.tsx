import React from "react";
import { COLOR_THEME_LIST } from "@buu/types";
import { storiesOf } from "@storybook/react";
import ElementsGroup from "../ElementsGroup/ElementsGroup";
import Pill from "./Pill";

const pills = COLOR_THEME_LIST.map(theme => (
    <Pill theme={theme} key={theme}>
        {theme}
    </Pill>
))

storiesOf('@buu/core/Pill', module).add('General usage', () => (
    <ElementsGroup>{pills}</ElementsGroup>
))