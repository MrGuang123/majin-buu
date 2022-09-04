import React from "react";
import { DefaultProps } from "@buu/types";
import Text from "../Text/Text";

interface ErrorNotificationProps extends DefaultProps {
    title?: React.ReactNode;
    description?: React.ReactNode;
    error?: Error;
}

export default function ErrorNotification({
    className,
    title,
    description,
    error,
    ...others
}: ErrorNotificationProps) {
    return (
        <div className="errorNotification" {...others}>
            {title && (
                <Text bold className="title" size="sm">
                    {title}
                </Text>
            )}
            <div className="body">
                {description && (
                    <Text className="description" size="sm">
                        {description}
                    </Text>
                )}
                {error instanceof Error && (
                    <Text className="error" theme="danger" size="sm">
                        {error.message}
                    </Text>
                )}
            </div>
        </div>
    )
}

ErrorNotification.displayName = '@buu/core/ErrorNotification'