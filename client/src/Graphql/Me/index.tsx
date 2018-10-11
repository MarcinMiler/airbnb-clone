import * as React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const meQuery = gql`
    {
        me {
            id
            email
        }
    }
`

interface WithMe {
    me: any
    loading: boolean
}

interface Props {
    children: (data: WithMe) => React.ReactNode
}

export class MeQuery extends React.PureComponent<Props> {
    public render() {
        return (
            <Query query={meQuery}>
                {({ data, loading }) => {
                    let me = null

                    if (data && data.me) {
                        me = data.me
                    }

                    return this.props.children({
                        me,
                        loading
                    })
                }}
            </Query>
        )
    }
}
