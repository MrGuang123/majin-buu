import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { BuuProvider } from '@buu/theme'
import Checkbox from "./Checkbox";

function CheckboxWrapper(props: Omit<React.ComponentProps<typeof Checkbox>, 'value' | 'onChange'>) {
    const [value, onChange] = useState(false)
    return <Checkbox value={value} onChange={onChange} {...props} />
}

storiesOf('@buu/core', module).add('Checkbox', () => (
    <>
        <CheckboxWrapper label="open dialog" />
        <CheckboxWrapper label="open dialog" disabled style={{ marginTop: 15 }} />
    </>
))