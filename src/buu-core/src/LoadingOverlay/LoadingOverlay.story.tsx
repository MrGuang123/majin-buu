import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { BuuProvider } from '@buu/theme'
import Button from "../Button/Button";
import ElementsGroup from "../ElementsGroup/ElementsGroup";
import LoadingOverlay from "./LoadingOverlay";

function LoadingOverlayDemo() {
    const [visible, setVisible] = useState(false)

    return (
        <div style={{ width: 400 }}>
            <div style={{ width: 400, height: 500, backgroundColor: 'blue', position: 'relative' }}>
                <LoadingOverlay visible={visible} />
            </div>

            <ElementsGroup position="center" style={{ marginTop: 30 }}>
                <Button onClick={() => setVisible((v) => !v)}>Toggle overlay</Button>
            </ElementsGroup>
        </div>
    )
}

storiesOf('@buu/core', module).add('LoadingOverlay', () => (
    <LoadingOverlayDemo />
));