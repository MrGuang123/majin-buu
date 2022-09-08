import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from '../Text/Text';
import DropdownBody from './DropdownBody';

storiesOf('@buu/core/DropdownBody', module).add('General Usage', () => (
  <DropdownBody style={{ width: 260, height: 300 }}>
    <Text>
      hello world
    </Text>
  </DropdownBody>
));