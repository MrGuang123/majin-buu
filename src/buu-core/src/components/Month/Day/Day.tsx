import React from "react";
import { DefaultProps } from "@buu/types";

interface DayProps extends DefaultProps {
    value: Date;
    seleted: boolean;
    outside: boolean;
    weekend: boolean;
    disableOutsideEvents: boolean;
    onClick?(): void;
    elementRef(ref: HTMLButtonElement): void;
    onKeyDown(date: Date, event: React.KeyboardEvent): void;
}

export default function Day({
    className,
    value,
    seleted,
    outside,
    weekend,
    onClick,
    elementRef,
    onKeyDown,
    disableOutsideEvents
}: DayProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            ref={elementRef}
            onKeyDown={(event) => onKeyDown(value, event)}
            className="day"
        >
            {value.getDate()}
        </button>
    )
}

Day.displayName = '@buu/core/Day'