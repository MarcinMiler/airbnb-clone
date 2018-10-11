import * as React from 'react'
import { Formik } from 'formik'

import { RegisterMutation } from 'src/Graphql/Register'
import { RegisterUI } from './Register'

interface FieldProps {
    email: string
    password: string
}

interface Props {
    changePage: () => void
}

export class Register extends React.Component<Props, {}> {
    public render() {
        const { changePage } = this.props

        return (
            <RegisterMutation>
                {({ register }) => (
                    <Formik<FieldProps>
                        initialValues={{ email: '', password: '' }}
                        onSubmit={async (values: FieldProps) => {
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
                            />
                        )}
                    </Formik>
                )}
            </RegisterMutation>
        )
    }
}
