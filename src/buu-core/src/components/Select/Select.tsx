import React, { forwardRef } from "react";
import { useId } from '@buu/hooks'
import { DefaultProps } from "@buu/types";
import InputWrapper, { InputWrapperBaseProps } from "../InputWrapper/InputWrapper";

interface SelectItem {
    value: string;
    label: string;
}

interface SelectProps
    extends DefaultProps,
    InputWrapperBaseProps,
    Omit<React.HTMLProps<HTMLSelectElement>, 'data' | 'onChange' | 'ref'> {
    id?: string;
    value: string;
    placeholder?: string;
    onChange(value: string): void;
    data: SelectItem[];
    disabled?: boolean;
}

const Select = forwardRef(({
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
    disabled,
    ...others
}: SelectProps, ref: React.ForwardedRef<HTMLSelectElement>) => {
    const uuid = useId(id)

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
                    {...others}
                    ref={ref}
                    className="select invalid placeholder"
                    id={uuid}
                    value={value}
                    onChange={event => onChange(event.currentTarget.value)}
                    placeholder={placeholder}
                    disabled={disabled}
                >
                    {options}
                </select>
                classesIcon
            </div>
        </InputWrapper>
    )
})

Select.displayName = '@buu/core/Select'

export default Select