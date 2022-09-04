import React from "react";
import { storiesOf } from "@storybook/react";
import ElementsGroup from "../ElementsGroup/ElementsGroup";
import Avatar from "./Avatar";

const image = 'https://image.png'

storiesOf('@buu/core/Avatar', module).add('General usage', () => (
    <ElementsGroup>
        <Avatar size={80} src={image} />
        <Avatar size={50} src={image} />
        <Avatar size={40} src={image} />
        <Avatar size={20} src={image} />
    </ElementsGroup>
))