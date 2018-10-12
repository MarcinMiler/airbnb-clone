import * as React from 'react'

import { ListingsQuery } from 'src/Graphql/Listings'
import { ListingItem } from './Components/ListingItem'

import { Container } from './style'

export const ListingsList: React.SFC<{}> = () => (
    <Container>
        <ListingsQuery>
            {({ listings, loading }) =>
                listings.map(listing => (
                    <ListingItem key={listing.id} {...listing} />
                ))
            }
        </ListingsQuery>
    </Container>
)
