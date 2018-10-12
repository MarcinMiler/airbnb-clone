import * as React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import { Listing } from 'src/graphql.schema'

export const listingQuery = gql`
    query ListingQuery($id: ID!) {
        listing(id: $id) {
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

interface WithListing {
    listing: Listing | null
    loading: boolean
}

interface Props {
    id: string
    children: (values: WithListing) => React.ReactNode | null
}

export class ListingQuery extends React.PureComponent<Props> {
    public render() {
        const { id } = this.props

        return (
            <Query query={listingQuery} variables={{ id }}>
                {({ data, loading }) => {
                    let listing: Listing | null = null

                    if (data && data.listing) {
                        listing = data.listing
                    }

                    return this.props.children({
                        listing,
                        loading
                    })
                }}
            </Query>
        )
    }
}
