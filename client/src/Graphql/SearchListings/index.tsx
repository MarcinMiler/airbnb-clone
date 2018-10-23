import * as React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import { Listing } from 'src/graphql.schema'

export const searchListingsQuery = gql`
    query SearchListings(
        $address: [String]
        $guests: Int
        $priceMin: Int
        $priceMax: Int
    ) {
        searchListings(
            input: {
                address: $address
                guests: $guests
                priceMin: $priceMin
                priceMax: $priceMax
            }
        ) {
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
            address
            addressTags
        }
    }
`

interface WithListings {
    listings: Listing[]
    loading: boolean
}

interface Props {
    address: string[]
    guests?: number
    priceMin?: number
    priceMax?: number
    children: (values: WithListings) => React.ReactNode
}

export class SearchListingsQuery extends React.PureComponent<Props> {
    // public shouldComponentUpdate(nextProps: Props) {
    //     const { address, guests, priceMin, priceMax } = this.props
    //     if (this.props.address !== nextProps.address) {
    //         return true
    //     }

    //     return false
    // }

    public render() {
        const { address, guests, priceMin, priceMax } = this.props

        return (
            <Query
                query={searchListingsQuery}
                variables={{ address, guests, priceMin, priceMax }}
            >
                {({ data, loading }) => {
                    let listings: Listing[] = []

                    if (data && data.searchListings) {
                        listings = data.searchListings
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
