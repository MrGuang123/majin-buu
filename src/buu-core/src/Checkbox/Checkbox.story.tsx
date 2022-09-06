import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./Checkbox";

function CheckboxWrapper(props: Omit<React.ComponentProps<typeof Checkbox>, 'value' | 'onChange'>) {
    const [value, onChange] = useState(false)
    return <Checkbox value={value} onChange={onChange} {...props} />
}

storiesOf('@buu/core/Checkbox', module).add('General usage', () => (
    <CheckboxWrapper label="open dialog" />
))