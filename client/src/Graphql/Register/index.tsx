import * as React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const registerMutation = gql`
    mutation Register($email: String!, $password: String!) {
        register(input: { email: $email, password: $password }) {
            ok
        }
    }
`

interface WithRegister {
    register: any
}

interface Props {
    children: (data: WithRegister) => React.ReactNode
}

export class RegisterMutation extends React.PureComponent<Props> {
    public render() {
        return (
            <Mutation mutation={registerMutation}>
                {mutate => this.props.children({ register: mutate })}
            </Mutation>
        )
    }
}
