import * as React from 'react'
import { RouteProps, RouteComponentProps, Redirect, Route } from 'react-router'
import { ChildProps, graphql } from 'react-apollo'
import gql from 'graphql-tag'

type Props = RouteProps

interface MeQueryMe {
    id: number
    email: string
}
interface MeQuery {
    me: MeQueryMe
}

export class C extends React.PureComponent<ChildProps<Props, MeQuery>> {
    public renderRoute = (routeProps: RouteComponentProps) => {
        const { data, component } = this.props

        if (!data || data.loading) {
            return null
        }

        if (!data.me) {
            return (
                <Redirect
                    to={{
                        pathname: '/'
                    }}
                />
            )
        }

        const Component = component as any

        return <Component {...routeProps} />
    }

    public render() {
        const { data: _, component: __, ...rest } = this.props
        return <Route {...rest} render={this.renderRoute} />
    }
}

const meQuery = gql`
    query MeQuery {
        me {
            id
            email
        }
    }
`

export const AuthRoute = graphql<Props, MeQuery>(meQuery)(C)
