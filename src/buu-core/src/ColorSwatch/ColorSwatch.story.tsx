import React from "react";
import { COLOR_THEME_LIST } from "@buu/types";
import { storiesOf } from "@storybook/react";
import ElementsGroup from "../ElementsGroup/ElementsGroup";
import ColorSwatch from "./ColorSwatch";

const swatches = COLOR_THEME_LIST.map(theme => <ColorSwatch color={theme} key={theme} />)

storiesOf('@buu/core/ColorSwatch', module).add('General Usage', () => {
    return (
        <ElementsGroup>{swatches}</ElementsGroup>
    )
})