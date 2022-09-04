import React from "react";
import { nanoid } from "nanoid";
import { DefaultProps } from "@buu/types";
import InputWrapper, { InputWrapperBaseProps } from "../InputWrapper/InputWrapper";

interface SelectItem {
    value: string;
    label: string;
}

interface SelectProps extends DefaultProps, InputWrapperBaseProps {
    id?: string;
    value: string;
    placeholder?: string;
    onChange(value: string): void;
    data: SelectItem[];
}

export default function Select({
    id,
    className,
    required,
    label,
    error,
    style,
    data,
    value,
    onChange,
    placeholder,
    ...others
}: SelectProps) {
    const uuid = nanoid()

    const options = data.map(item => (
        <option key={item.value} value={item.value}>
            {item.label}
        </option>
    ))

    if (placeholder) {
        options.unshift(
            <option key="placeholder" value='' disabled>
                {placeholder}
            </option>
        )
    }

    return (
        <InputWrapper
            required={required}
            id={uuid}
            label={label}
            error={error}
            className={className}
            style={style}
        >
            <div className="wrapper">
                <select
                    className="select invalid placeholder"
                    id={uuid}
                    value={value}
                    onChange={event => onChange(event.currentTarget.value)}
                    placeholder={placeholder}
                    {...others}
                >
                    {options}
                </select>
                classesIcon
            </div>
        </InputWrapper>
    )
}

Select.displayName = '@buu/core/Select'