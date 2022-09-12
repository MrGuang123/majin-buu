import React from 'react';
import { storiesOf } from '@storybook/react';
import { BuuProvider } from '@buu/theme';
import AuthenticationForm from './AuthenticationForm';

storiesOf('@mantine/demos', module).add('AuthenticationForm', () => (
    <BuuProvider>
        <AuthenticationForm />
    </BuuProvider>
));