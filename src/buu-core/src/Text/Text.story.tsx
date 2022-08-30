import React from 'react'
import { storiesOf } from '@storybook/react'
import Text from './Text'

storiesOf('@buu/core/Text', module).add('General usage', () => {
    return (
        <div>
            <Text>Default text</Text>
            <Text bold>Bold text</Text>
            <Text theme='success'>success text</Text>
            <Text theme='warning'>warning text</Text>
            <Text theme='error'>error text</Text>
            <Text theme='muted'>muted text</Text>
            <Text size='xs'>xs text</Text>
            <Text size='sm'>sm text</Text>
            <Text size='md'>md text</Text>
            <Text size='lg'>lg text</Text>
            <Text size='xl'>xl text</Text>
            <Text component='p' theme='muted' bold>bold muted pagraph text</Text>
            <Text>
                aadfasd
                adfadssa
                asdfasdf
                asfdasdf
            </Text>
        </div>
    )
})