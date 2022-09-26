import React from 'react';
import { storiesOf } from '@storybook/react';
import { BuuProvider, DEFAULT_THEME } from '@buu/theme';
import ElementsGroup from '../ElementsGroup/ElementsGroup';
import Text from '../Text/Text';
import Paper from './Paper';

storiesOf('@buu/core', module).add('Paper', () => (
    <BuuProvider>
        <ElementsGroup grow style={{ backgroundColor: DEFAULT_THEME.colors.gray[0], padding: 40 }}>
            <Paper style={{ width: 260 }}>
                <Text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, temporibus excepturi,
                    placeat quam eius quisquam ad nostrum magnam molestias voluptates minima minus natus
                    dignissimos reiciendis quasi repellat quos voluptas ullam.
                </Text>
            </Paper>

            <Paper style={{ width: 260 }} padding="xs">
                <Text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, temporibus excepturi,
                    placeat quam eius quisquam ad nostrum magnam molestias voluptates minima minus natus
                    dignissimos reiciendis quasi repellat quos voluptas ullam.
                </Text>
            </Paper>

            <Paper style={{ width: 260 }} padding="sm">
                <Text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, temporibus excepturi,
                    placeat quam eius quisquam ad nostrum magnam molestias voluptates minima minus natus
                    dignissimos reiciendis quasi repellat quos voluptas ullam.
                </Text>
            </Paper>

            <Paper style={{ width: 260 }} padding="md">
                <Text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, temporibus excepturi,
                    placeat quam eius quisquam ad nostrum magnam molestias voluptates minima minus natus
                    dignissimos reiciendis quasi repellat quos voluptas ullam.
                </Text>
            </Paper>

            <Paper style={{ width: 260 }} padding="xl">
                <Text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, temporibus excepturi,
                    placeat quam eius quisquam ad nostrum magnam molestias voluptates minima minus natus
                    dignissimos reiciendis quasi repellat quos voluptas ullam.
                </Text>
            </Paper>
        </ElementsGroup>
    </BuuProvider>
));