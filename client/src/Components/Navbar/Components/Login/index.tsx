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
    push: (path: string) => void
}

export class Login extends React.Component<Props, {}> {
    public render() {
        const { changePage, push } = this.props

        return (
            <LoginMutation>
                {({ login }) => (
                    <Formik<FieldProps>
                        initialValues={{ email: '', password: '' }}
                        onSubmit={async (values: FieldProps) => {
                            const response = await login({
                                variables: { ...values }
                            })
                            const { token, ok } = response.data.login

                            if (token && ok) {
                                localStorage.setItem('token', token)
                                push('/listings')
                            }
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
