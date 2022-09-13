import React, { forwardRef } from "react";
import { useId } from '@buu/hooks'
import { BuuColor, DefaultProps, useBuuTheme } from "@buu/theme";

interface SwitchProps extends DefaultProps, Omit<React.HTMLProps<HTMLDivElement>, 'label' | 'value' | 'onChange'> {
    value: boolean;
    onChange(value: boolean): void;
    label: React.ReactNode;
    disabled?: boolean;
    id?: string;
    color?: BuuColor;
}

const Switch = forwardRef(({
    className,
    value,
    color,
    onChange,
    label,
    disabled,
    id,
    ...others
}: SwitchProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const uuid = useId(id)

    return (
        <div className="wrapper" {...others}>
            <button
                ref={ref}
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
})

Switch.displayName = '@buu/core/Switch'

export default Switch