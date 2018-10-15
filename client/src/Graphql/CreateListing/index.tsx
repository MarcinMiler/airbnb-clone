import * as React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const createListingMutation = gql`
    mutation CreateListing(
        $name: String!
        $category: String!
        $description: String!
        $price: Int!
        $beds: Int!
        $guests: Int!
        $lat: Float
        $lng: Float
        $amenities: [String!]
        $address: String!
        $addressTags: [String!]
    ) {
        createListing(
            input: {
                name: $name
                category: $category
                description: $description
                price: $price
                beds: $beds
                guests: $guests
                lat: $lat
                lng: $lng
                amenities: $amenities
                address: $address
                addressTags: $addressTags
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

interface WithCreateListing {
    createListing: any
}

interface Props {
    children: (data: WithCreateListing) => React.ReactNode
}

export class CreateListingMutation extends React.PureComponent<Props> {
    public render() {
        return (
            <Mutation mutation={createListingMutation}>
                {mutate => this.props.children({ createListing: mutate })}
            </Mutation>
        )
    }
}
