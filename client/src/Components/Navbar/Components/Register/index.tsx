import * as React from 'react'
import { Formik } from 'formik'

import { RegisterMutation } from 'src/Graphql/Register'
import { RegisterSchema } from './RegisterSchema'
import { RegisterUI } from './Register'

interface FieldProps {
    email: string
    password: string
}

interface Props {
    changePage: () => void
}

interface State {
    isLoading: boolean
}

export class Register extends React.Component<Props, State> {
    public readonly state = {
        isLoading: false
    }

    public render() {
        const { isLoading } = this.state
        const { changePage } = this.props

        return (
            <RegisterMutation>
                {({ register }) => (
                    <Formik<FieldProps>
                        initialValues={{ email: '', password: '' }}
                        validationSchema={RegisterSchema}
                        onSubmit={async (values: FieldProps) => {
                            this.setState({ isLoading: true })
                            const response = await register({
                                variables: { ...values }
                            })

                            const { ok } = response.data.register

                            if (ok) {
                                changePage()
                            }
                        }}
                    >
                        {({ submitForm }) => (
                            <RegisterUI
                                changePage={changePage}
                                submit={submitForm}
                                isLoading={isLoading}
                            />
                        )}
                    </Formik>
                )}
            </RegisterMutation>
        )
    }
}
