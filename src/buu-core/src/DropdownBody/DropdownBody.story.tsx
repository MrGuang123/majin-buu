import React from 'react';
import { storiesOf } from '@storybook/react';
import { BuuProvider } from '@buu/theme'
import Text from '../Text/Text';
import DropdownBody from './DropdownBody';

storiesOf('@buu/core', module).add('DropdownBody', () => (
  <DropdownBody style={{ width: 260, height: 300 }}>
    <Text>
      hello world
    </Text>
  </DropdownBody>
));