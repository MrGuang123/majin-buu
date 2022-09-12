import React from "react";
import { storiesOf } from '@storybook/react'
import { BuuProvider } from '@buu/theme'
import Loader from './Loader'

storiesOf('@buu/core', module).add('Loader', () => (
    <>
        <Loader style={{ marginTop: 20 }} size={60} />
        <Loader style={{ marginTop: 20 }} size={42} />
        <Loader style={{ marginTop: 20 }} size={36} />
        <Loader style={{ marginTop: 20 }} size={30} />
        <Loader style={{ marginTop: 20 }} size={24} />
        <Loader style={{ marginTop: 20 }} size={18} />
        <Loader style={{ marginTop: 20 }} size={12} />
    </>
))