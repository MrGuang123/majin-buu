import React from "react";
import { storiesOf } from "@storybook/react";
import ActionIcon from "./ActionIcon";

storiesOf('@buu/core/ActionIcon', module).add('General Usage', () => {
  return (
    <div>
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
    </div>
  )
})