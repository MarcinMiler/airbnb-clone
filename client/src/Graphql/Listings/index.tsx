import * as React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import { Listing } from 'src/graphql.schema'

export const listingsQuery = gql`
    query ListingsQuery {
        listings {
            id
            name
            category
            description
            price
            beds
            guests
            lat
            lng
            amenities
        }
    }
`

interface WithListings {
    listings: Listing[]
    loading: boolean
}

interface Props {
    children: (values: WithListings) => React.ReactNode
}

export class ListingsQuery extends React.PureComponent<Props> {
    public render() {
        return (
            <Query query={listingsQuery}>
                {({ data, loading }) => {
                    let listings: Listing[] = []

                    if (data && data.listings) {
                        listings = data.listings
                    }

                    return this.props.children({
                        listings,
                        loading
                    })
                }}
            </Query>
        )
    }
}
