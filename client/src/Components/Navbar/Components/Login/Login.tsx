import * as React from 'react'
import { Form, Field } from 'formik'

import LogoSvg from 'src/Images/logo.svg'
import { FormikInput } from 'src/Components/FomikInput'
import { Button } from 'src/Components/Button'
import { Br } from 'src/Components/Br'
import { LogoWrapper, Logo, Text } from './style'

interface Props {
    changePage: () => void
    submit: () => void
}

export const LoginUI: React.SFC<Props> = ({ changePage, submit }) => (
    <Form>
        <LogoWrapper>
            <Logo src={LogoSvg} />
        </LogoWrapper>

        <Br />

        <Field
            name="email"
            placeholder="Email"
            label="Email"
            component={FormikInput}
        />

        <Field
            name="password"
            placeholder="Password"
            label="Password"
            type="password"
            component={FormikInput}
        />

        <Button fullWidth onClick={submit}>
            Login
        </Button>

        <Br />

        <Text onClick={changePage}>Register</Text>
    </Form>
)
