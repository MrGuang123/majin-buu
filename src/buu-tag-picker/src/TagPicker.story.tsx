import React, { useState } from "react";
import { storiesOf } from '@storybook/react'
import { nanoid } from "nanoid";
import { COLOR_THEME_LIST } from "@buu/types";
import TagPicker from "./TagPickerContainer";
import { TagPickerTag } from "./types";

type TagPickerWrapperProps = Omit<
    React.ComponentProps<typeof TagPicker>,
    | 'value'
    | 'onChange'
    | 'data'
    | 'colors'
    | 'description'
    | 'createLabel'
    | 'deleteLabel'
    | 'noValueLabel'
    | 'onTagCreate'
    | 'onTagDelete'
    | 'onTagUpdate'
>;

const defaultData: TagPickerTag[] = [
    { id: '1', name: 'hello', color: 'red' },
    { id: '2', name: 'world', color: 'blue' },
]

function TagPickerWrapper(props: TagPickerWrapperProps) {
    const [value, onChange] = useState<TagPickerTag>(null)
    const [data, setData] = useState(defaultData)

    return (
        <TagPicker
            value={value}
            onChange={onChange}
            data={data}
            searchPlaceholder="Search categories"
            colors={COLOR_THEME_LIST.map(theme => ({ name: theme, color: theme }))}
            description="select or create new one"
            createLabel="create new"
            deleteLabel="delete one"
            noValueLabel="not seleted"
            onTagCreate={(values) => {
                const tag = { ...values, id: nanoid() }
                setData(current => [...current, { ...values, id: nanoid() }])
                return tag;
            }}
            onTagDelete={id => setData(current => current.filter(item => item.id !== id))}
            onTagUpdate={(id, values) => {
                setData(current => {
                    const copy = [...current]
                    const index = current.findIndex(item => item.id === id)
                    copy[index] = { id, ...values }
                    return copy
                })
            }}
            {...props}
        />
    )
}

storiesOf('@buu/tag-picker/TagPicker', module).add('General Usage', () => <TagPickerWrapper />)