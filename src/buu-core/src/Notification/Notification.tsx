import React from "react";
import { DefaultProps, Theme } from "@buu/types";
import Text from "../Text/Text";
import ActionIcon from "../components/ActionIcon/ActionIcon";

interface NotificationProps extends DefaultProps, Omit<React.HTMLProps<HTMLDivElement>, 'title'> {
    theme?: Theme;
    icon?: React.ReactNode;
    title?: React.ReactNode;
    onClose(): void;
}

export default function Notification({
    className,
    theme = 'muted',
    title,
    icon,
    children,
    onClose,
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
                    <Text className="title" size="sm">
                        {title}
                    </Text>
                )}

                <Text className="description" size="sm">
                    {children}
                </Text>
            </div>

            <ActionIcon onClick={onClose}>
                cross2icon
            </ActionIcon>
        </div>
    )
}

Notification.displayName = '@buu/core/Notification'