import * as React from 'react'
import { Form, Field } from 'formik'

import { FormikInput } from 'src/Components/FomikInput'
import { Button } from 'src/Components/Button'
import { Br } from 'src/Components/Br'
import { Text } from './style'

interface Props {
    changePage: () => void
    submit: () => void
}

export const RegisterUI: React.SFC<Props> = ({ changePage, submit }) => (
    <Form>
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
            Register
        </Button>

        <Br />

        <Text onClick={changePage}>Login</Text>
    </Form>
)
