import React from "react";
import { storiesOf } from "@storybook/react";
import { BuuProvider } from '@buu/theme'
import ElementsGroup from "../ElementsGroup/ElementsGroup";
import Avatar from "./Avatar";

const image = 'https://image.png'

storiesOf('@buu/core', module).add('Avatar', () => (
    <ElementsGroup>
        <Avatar size={80} src={image} />
        <Avatar size={80} src={null} />
        <Avatar size={80} src="broken-link" />
        <Avatar size={50} src={image} />
        <Avatar size={40} src={image} />
        <Avatar size={20} src={image} />
    </ElementsGroup>
))