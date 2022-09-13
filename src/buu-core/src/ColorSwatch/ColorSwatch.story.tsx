import React from "react";
import { storiesOf } from "@storybook/react";
import { BuuProvider, DEFAULT_THEME } from '@buu/theme'
import ElementsGroup from "../ElementsGroup/ElementsGroup";
import ColorSwatch from "./ColorSwatch";

const swatches = Object.keys(DEFAULT_THEME.colors)
    .filter((color) => color !== 'white' && color !== 'black')
    .map((theme) => <ColorSwatch color="blue" key={theme} />);

storiesOf('@buu/core', module).add('ColorSwatch', () => {
    return (
        <ElementsGroup>{swatches}</ElementsGroup>
    )
})