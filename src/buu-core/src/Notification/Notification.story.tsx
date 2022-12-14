import React from 'react';
import { storiesOf } from '@storybook/react';
import { BuuProvider } from '@buu/theme'
import Notification from './Notification';

storiesOf('@mantine/core', module).add('Notification', () => (
    <div style={{ maxWidth: 400 }}>
        <Notification
            color="blue"
            onClose={() => { }}
            title="Muted notification with icon"
            icon="FaceIcon"
        >
            Something generic happened but with icon
        </Notification>

        <Notification
            color="blue"
            onClose={() => { }}
            style={{ marginTop: 20 }}
            title="Sucess notification with icon"
            icon="CheckIcon"
        >
            Your action was a complete success!
        </Notification>

        <Notification
            color="blue"
            onClose={() => { }}
            style={{ marginTop: 20 }}
            title="Danger notification with icon"
            icon="Cross2Icon"
        >
            You have done something wrong, too bad
        </Notification>

        <Notification
            color="blue"
            onClose={() => { }}
            style={{ marginTop: 20 }}
            title="Warning notification with icon"
            icon="ExclamationTriangleIcon"
        >
            This action will not work very soon
        </Notification>

        <Notification
            color="blue"
            onClose={() => { }}
            style={{ marginTop: 20 }}
            title="Primary notification with icon"
            icon="BookmarkIcon"
        >
            You have achieved someting important
        </Notification>

        <Notification
            color="blue"
            onClose={() => { }}
            title="Muted notification without icon"
            style={{ marginTop: 20 }}
        >
            Something generic happened
        </Notification>

        <Notification
            color="blue"
            onClose={() => { }}
            style={{ marginTop: 20 }}
            title="Sucess notification without icon"
        >
            Your action was a complete success!
        </Notification>

        <Notification
            color="blue"
            onClose={() => { }}
            style={{ marginTop: 20 }}
            title="Danger notification without icon"
        >
            You have done something wrong, too bad
        </Notification>

        <Notification
            color="blue"
            onClose={() => { }}
            style={{ marginTop: 20 }}
            title="Warning notification without icon"
        >
            This action will not work very soon
        </Notification>

        <Notification
            color="blue"
            onClose={() => { }}
            style={{ marginTop: 20 }}
            title="Primary notification"
        >
            You have achieved someting important
        </Notification>

        <Notification
            color="blue"
            onClose={() => { }}
            style={{ marginTop: 20 }}
            title="Notification with a lot of content"
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nam cumque natus ea aliquid quo
            illo enim totam sunt voluptatum, dolorum blanditiis sint, porro aut asperiores ut maxime
            doloremque. Cumque.
        </Notification>

        <Notification
            color="blue"
            onClose={() => { }}
            style={{ marginTop: 20 }}
            title="Icon notification with a lot of content"
            icon="FaceIcon"
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nam cumque natus ea aliquid quo
            illo enim totam sunt voluptatum, dolorum blanditiis sint, porro aut asperiores ut maxime
            doloremque. Cumque.
        </Notification>

        <Notification color="blue" onClose={() => { }} style={{ marginTop: 20 }}>
            Notification without title
        </Notification>

        <Notification color="blue" onClose={() => { }} style={{ marginTop: 20 }} icon="CheckIcon">
            Notification without title but with icon
        </Notification>
    </div>
));