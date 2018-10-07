import * as React from 'react'

import LogoSvg from 'src/Images/logo.svg'
import { Input } from 'src/Components/Input'
import { Button } from 'src/Components/Button'
import { LogoWrapper, Logo, Br, Text } from './style'

export const Login: React.SFC<{}> = () => (
    <>
        <LogoWrapper>
            <Logo src={LogoSvg} />
        </LogoWrapper>

        <Br />

        <Input onChange={() => null} type="text" placeholder="Email" />

        <Input onChange={() => null} type="text" placeholder="Password" />

        <Button fullWidth>Login</Button>

        <Br />

        <Text>Register</Text>
    </>
)
