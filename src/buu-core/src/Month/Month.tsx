import React, { ReducerAction, useRef } from "react";
import { DefaultProps } from "@buu/types";
import Text from "../Text/Text";
import getMonthDays from "./get-month-days";
import getWeekdaysNames from "./get-weekdays-names";
import Day from './Day/Day'

interface MonthProps extends DefaultProps {
    month: Date;
    locale?: string;
    selected?: Date;
    disableOutsideEvents?: boolean;
    onDayClick?(day: Date): void;
}

export default function Month({
    className,
    month,
    selected,
    onDayClick,
    disableOutsideEvents = false,
    locale = 'en'
}: MonthProps) {
    const daysRefs = useRef<Record<string, HTMLButtonElement>>({})
    const days = getMonthDays(month)

    const focusDay = (date: Date, offset: number) => {
        const offsetted = new Date(date)
        offsetted.setDate(date.getDate() + offset)

        if (offsetted.toISOString() in daysRefs.current) {
            daysRefs.current[offsetted.toISOString()].focus()
        }
    }

    const handleKeyDown = (currentDate: Date, event: React.KeyboardEvent) => {
        const { code } = event.nativeEvent

        if (code === 'ArrowUp') {
            event.preventDefault();
            focusDay(currentDate, -7);
        }

        if (code === 'ArrowDown') {
            event.preventDefault();
            focusDay(currentDate, 7);
        }

        if (code === 'ArrowRight') {
            event.preventDefault();
            focusDay(currentDate, 1);
        }

        if (code === 'ArrowLeft') {
            event.preventDefault();
            focusDay(currentDate, -1);
        }
    }

    const weekdays = getWeekdaysNames(locale).map(weekday => {
        return (
            <th key={weekday}>
                <Text theme="muted" size="xs">
                    {weekday.slice(0, 1).toUpperCase()}
                </Text>
            </th>
        )
    })

    const rows = days.map((row, rowIndex) => {
        const cells = row.map((date, cellIndex) => {
            const weekday = date.getDay()
            const weekend = weekday === 6 || weekday === 0
            const outside = date.getMonth() !== month.getMonth()
            const isSelected = selected instanceof Date && date.getFullYear() === selected.getFullYear() &&
                date.getMonth() === selected.getMonth() && date.getDate() === selected.getDate()

            return (
                <td key={cellIndex}>
                    <Day
                        elementRef={button => {
                            daysRefs.current[date.toISOString()] = button
                        }}
                        onClick={() => typeof onDayClick === 'function' && onDayClick(date)}
                        value={date}
                        outside={outside}
                        weekend={weekend}
                        seleted={isSelected}
                        disableOutsideEvents={disableOutsideEvents}
                        onKeyDown={handleKeyDown}
                    />
                </td>
            )
        })
        return <tr key={rowIndex}>{cells}</tr>
    })

    return (
        <table className="month">
            <thead>
                <tr>{weekdays}</tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
}

Month.displayName = '@buu/core/Month'