import React from "react";
import { storiesOf } from "@storybook/react";
import { BuuProvider } from '@buu/theme'
import ActionIcon from "./ActionIcon";

storiesOf('@buu/core', module).add('ActionIcon', () => {
  return (
    <BuuProvider>
      <div color="gray">
        <ActionIcon>icon1</ActionIcon>
      </div>
      <div>
        <ActionIcon color="blue">icon2</ActionIcon>
      </div>
      <div>
        <ActionIcon color="red">icon3</ActionIcon>
      </div>
      <div>
        <ActionIcon color="yellow">icon4</ActionIcon>
      </div>
      <div>
        <ActionIcon color="teal">icon5</ActionIcon>
      </div>
    </BuuProvider>
  )
})