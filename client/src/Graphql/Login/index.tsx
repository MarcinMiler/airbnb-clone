import * as React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const loginMutation = gql`
    mutation LoginMutation($email: String!, $password: String!) {
        login(input: { email: $email, password: $password }) {
            ok
            token
        }
    }
`

interface WithLogin {
    login: any
}

interface Props {
    children: (data: WithLogin) => React.ReactNode
}

export class LoginMutation extends React.PureComponent<Props> {
    public render() {
        return (
            <Mutation mutation={loginMutation}>
                {mutate => this.props.children({ login: mutate })}
            </Mutation>
        )
    }
}
