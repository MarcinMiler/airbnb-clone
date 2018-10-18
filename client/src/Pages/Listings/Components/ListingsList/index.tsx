import * as React from 'react'

import { SearchListingsQuery } from 'src/Graphql/SearchListings'
import { ListingItem } from './Components/ListingItem'

import { Container } from './style'
import { Subscribe } from 'unstated'
import { SearchLocation } from 'src/Containers/SearchLocation'
import { Postion } from 'src/Containers/Position'

export const ListingsList: React.SFC<{}> = () => (
    <Container>
        <Subscribe to={[SearchLocation, Postion]}>
            {(
                { state: { place } }: SearchLocation,
                { setPostion }: Postion
            ) => (
                <SearchListingsQuery address={place}>
                    {({ listings, loading }) =>
                        listings.map(listing => (
                            <ListingItem
                                key={listing.id}
                                setPostion={setPostion}
                                {...listing}
                            />
                        ))
                    }
                </SearchListingsQuery>
            )}
        </Subscribe>
    </Container>
)
