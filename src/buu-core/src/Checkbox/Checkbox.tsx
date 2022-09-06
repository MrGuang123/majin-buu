import React from "react";
import { useId } from '@buu/hooks'
import { DefaultProps } from "@buu/types";

interface CheckboxProps extends DefaultProps {
    value: boolean;
    onChange(value: boolean): void;
    label: React.ReactNode;
    disabled?: boolean;
    id?: string;
}

export default function Checkbox({
    className,
    value,
    onChange,
    label,
    disabled,
    id,
    ...others
}: CheckboxProps) {
    const uuid = useId(id)

    return (
        <div className="wrapper" {...others}>
            <button
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
}

Checkbox.displayName = '@buu/core/Checkbox'