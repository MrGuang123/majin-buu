import React from "react";
import { storiesOf } from "@storybook/react";
import Month from "./Month";

storiesOf('@buu/core/Month', module).add('General usage', () => (
    <Month month={new Date()} selected={new Date()} disableOutsideEvents autoFocus />
))