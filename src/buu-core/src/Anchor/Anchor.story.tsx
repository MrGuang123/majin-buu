import React from "react";
import { storiesOf } from "@storybook/react";
import Anchor from './Anchor'

storiesOf('@buu/core/Anchor', module).add('General usage', () => (
    <Anchor href="https://www.baidu.com" target="_blank">
        baidu
    </Anchor>
))