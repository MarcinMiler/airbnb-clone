import * as React from 'react'

import { Input } from 'src/Components/Input'
import { Button } from 'src/Components/Button'
import { Br } from 'src/Components/Br'
import { Text } from './style'

interface Props {
    changePage: () => void
}

export const Register: React.SFC<Props> = ({ changePage }) => (
    <>
        <Input onChange={() => null} type="text" placeholder="Email" />

        <Input onChange={() => null} type="text" placeholder="Name" />

        <Input onChange={() => null} type="text" placeholder="Surname" />

        <Input onChange={() => null} type="password" placeholder="Password" />

        <Button fullWidth>Register</Button>

        <Br />

        <Text onClick={changePage}>Login</Text>
    </>
)
