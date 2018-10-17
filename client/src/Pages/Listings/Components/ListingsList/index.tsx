import * as React from 'react'

import { SearchListingsQuery } from 'src/Graphql/SearchListings'
import { ListingItem } from './Components/ListingItem'

import { Container } from './style'
import { Subscribe } from 'unstated'
import { SearchLocation } from 'src/Containers/SearchLocation'

export const ListingsList: React.SFC<{}> = () => (
    <Container>
        <Subscribe to={[SearchLocation]}>
            {({ state: { place } }: SearchLocation) => (
                <SearchListingsQuery address={place}>
                    {({ listings, loading }) =>
                        listings.map(listing => (
                            <ListingItem key={listing.id} {...listing} />
                        ))
                    }
                </SearchListingsQuery>
            )}
        </Subscribe>
    </Container>
)
