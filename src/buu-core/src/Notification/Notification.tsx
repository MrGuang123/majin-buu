import React from "react";
import { DefaultProps, BuuColor, useBuuTheme } from "@buu/theme";
import Text from "../Text/Text";
import ActionIcon from "../ActionIcon/ActionIcon";

interface NotificationProps extends DefaultProps, Omit<React.HTMLProps<HTMLDivElement>, 'title'> {
    color?: BuuColor;
    icon?: React.ReactNode;
    title?: React.ReactNode;
    onClose(): void;
}

export default function Notification({
    className,
    color = 'blue',
    title,
    icon,
    children,
    onClose,
    themeOverride,
    ...others
}: NotificationProps) {
    return (
        <div
            className="notification"
            {...others}
        >
            {icon && <div className="icon">{icon}</div>}
            <div className="body">
                {title && (
                    <Text className="title" size="sm" semibold themeOverride={themeOverride}>
                        {title}
                    </Text>
                )}

                <Text className="description" size="sm" themeOverride={themeOverride}>
                    {children}
                </Text>
            </div>

            <ActionIcon onClick={onClose} themeOverride={themeOverride}>
                cross2icon
            </ActionIcon>
        </div>
    )
}

Notification.displayName = '@buu/core/Notification'