import * as React from 'react'
import { Formik } from 'formik'

import { LoginMutation } from 'src/Graphql/Login'
import { LoginUI } from './Login'

interface FieldProps {
    email: string
    password: string
}

interface Props {
    changePage: () => void
}
export class Login extends React.Component<Props, {}> {
    public render() {
        const { changePage } = this.props
        return (
            <LoginMutation>
                {({ login }) => (
                    <Formik<FieldProps>
                        initialValues={{ email: '', password: '' }}
                        onSubmit={async (values: FieldProps) => {
                            const lol = await login({
                                variables: { ...values }
                            })
                            console.log(lol)
                        }}
                    >
                        {({ submitForm }) => (
                            <LoginUI
                                submit={submitForm}
                                changePage={changePage}
                            />
                        )}
                    </Formik>
                )}
            </LoginMutation>
        )
    }
}
