import React from "react";
import { nanoid } from "nanoid";
import { DefaultProps } from "@buu/types";

interface SwitchProps extends DefaultProps {
    value: boolean;
    onChange(value: boolean): void;
    label: React.ReactNode;
    disabled?: boolean;
    id?: string;
}

export default function Switch({
    className,
    value,
    onChange,
    label,
    disabled,
    id,
    ...others
}: SwitchProps) {
    const uuid = nanoid()

    return (
        <div className="wrapper" {...others}>
            <button
                disabled={disabled}
                className="switch"
                type="button"
                role="checkbox"
                onClick={() => onChange(!value)}
                aria-checked={value}
                id={uuid}
            />

            <label className="label" htmlFor={uuid}>
                {label}
            </label>
        </div>
    )
}

Switch.displayName = '@buu/core/Switch'