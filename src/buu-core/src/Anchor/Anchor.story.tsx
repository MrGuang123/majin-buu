import React from "react";
import { storiesOf } from "@storybook/react";
import { BuuProvider } from '@buu/theme'
import Anchor from './Anchor'

storiesOf('@buu/core', module).add('Anchor', () => (
    <BuuProvider>
        <Anchor href="https://www.baidu.com" target="_blank">
            baidu
        </Anchor>
        <Anchor href="https://www.baidu.com" target="_blank" semibold>
            baidu
        </Anchor>
    </BuuProvider>
))