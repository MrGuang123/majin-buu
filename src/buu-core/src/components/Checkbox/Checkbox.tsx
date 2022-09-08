import React, { forwardRef } from "react";
import { useId } from '@buu/hooks'
import { DefaultProps } from "@buu/types";

interface CheckboxProps extends DefaultProps, Omit<React.HTMLProps<HTMLDivElement>, 'label' | 'value' | 'onChange'> {
    value: boolean;
    onChange(value: boolean): void;
    label: React.ReactNode;
    disabled?: boolean;
    id?: string;
}

const Checkbox = forwardRef(
    (
        { className, value, onChange, label, disabled, id, ...others }: CheckboxProps,
        ref: React.ForwardedRef<HTMLButtonElement>
    ) => {
        const uuid = useId(id)

        return (
            <div className="wrapper" {...others}>
                <button
                    ref={ref}
                    disabled={disabled}
                    className="checkbox"
                    type="button"
                    role="checkbox"
                    onClick={() => onChange(!value)}
                    id={uuid}
                >
                    {value && 'icon check'}
                </button>

                <label className="label" htmlFor={uuid}>
                    {label}
                </label>
            </div>
        )
    })

Checkbox.displayName = '@buu/core/Checkbox'

export default Checkbox