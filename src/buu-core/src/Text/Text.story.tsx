import React from 'react'
import { storiesOf } from '@storybook/react'
import { BuuProvider } from '@buu/theme'
import Text from './Text'

storiesOf('@buu/core', module).add('Text', () => {
    return (
        <div>
            <Text>Default text</Text>
            <Text semibold>Default text</Text>
            <Text bold>Bold text</Text>
            <Text color='teal'>success text</Text>
            <Text color='yellow'>warning text</Text>
            <Text color='blue'>primary text</Text>
            <Text color='red'>error text</Text>
            <Text color='gray'>muted text</Text>
            <Text size='xs'>xs text</Text>
            <Text size='sm'>sm text</Text>
            <Text size='md'>md text</Text>
            <Text size='lg'>lg text</Text>
            <Text size='xl'>xl text</Text>
            <Text component='p' color='gray' bold>bold muted pagraph text</Text>
            <Text>
                aadfasd
                adfadssa
                asdfasdf
                asfdasdf
            </Text>
        </div>
    )
})