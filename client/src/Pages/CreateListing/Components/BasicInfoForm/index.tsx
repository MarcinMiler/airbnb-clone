import * as React from 'react'

import { Input } from 'src/Components/Input'
import { Title } from './style'

export const BasicInfoForm: React.SFC<{}> = () => (
    <>
        <Title>Basic informations</Title>

        <Input onChange={() => null} placeholder="Name" label="Name" />

        <Input onChange={() => null} placeholder="Category" label="Category" />

        <Input onChange={() => null} placeholder="Picture" label="Picture" />

        <Input
            onChange={() => null}
            placeholder="Description"
            label="Description"
        />
    </>
)
