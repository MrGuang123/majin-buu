import React from "react";
import { storiesOf } from "@storybook/react";
import { BuuProvider } from '@buu/theme'
import ActionIcon from "./ActionIcon";

storiesOf('@buu/core', module).add('ActionIcon', () => {
  return (
    <BuuProvider>
      <div>
        <ActionIcon>icon1</ActionIcon>
      </div>
      <div>
        <ActionIcon theme="danger">icon2</ActionIcon>
      </div>
      <div>
        <ActionIcon theme="warning">icon3</ActionIcon>
      </div>
      <div>
        <ActionIcon theme="success">icon4</ActionIcon>
      </div>
    </BuuProvider>
  )
})