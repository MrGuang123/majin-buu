import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import Select from "./Select";

const data = [
    { label: 'React', value: 'react' },
    { label: 'Angular', value: 'Angular' },
    { label: 'Vue', value: 'Vue' },
]

function WrappedSelect(
    props: Omit<React.ComponentProps<typeof Select>, 'value' | 'onChange' | 'data'>
) {
    const [value, onChange] = useState('')

    return (
        <div>
            <Select value={value} onChange={onChange} data={data} {...props} />
        </div>
    )
}

storiesOf('@buu/core/Select', module).add('General usage', () => (
    <div>
        <WrappedSelect label="Your favourite library" required placeholder="Your favourite library" />
        <WrappedSelect label="Your favourite library" placeholder="Your favourite library" />
        <WrappedSelect label="Your favourite library" required placeholder="Your favourite library" />
        <WrappedSelect
            label="Your favourite library"
            required
            placeholder="Your favourite library"
            disabled
        />
        <WrappedSelect
            label="Your favourite library"
            placeholder="Your favourite library"
            error="Your favourite library cannot be Angular"
        />
    </div>
))