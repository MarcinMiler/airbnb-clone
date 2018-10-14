import * as React from 'react'
import { Formik } from 'formik'

import { LoginMutation } from 'src/Graphql/Login'
import { LoginSchema } from './LoginSchema'
import { LoginUI } from './Login'

interface FieldProps {
    email: string
    password: string
}

interface Props {
    changePage: () => void
    push: (path: string) => void
}

interface State {
    isLoading: boolean
}

export class Login extends React.Component<Props, State> {
    public readonly state = {
        isLoading: false
    }

    public render() {
        const { isLoading } = this.state
        const { changePage, push } = this.props

        return (
            <LoginMutation>
                {({ login }) => (
                    <Formik<FieldProps>
                        initialValues={{ email: '', password: '' }}
                        validationSchema={LoginSchema}
                        onSubmit={async (values: FieldProps) => {
                            this.setState({ isLoading: true })
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
                                isLoading={isLoading}
                            />
                        )}
                    </Formik>
                )}
            </LoginMutation>
        )
    }
}
