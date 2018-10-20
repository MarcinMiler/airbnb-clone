import * as React from 'react'
import { Subscribe } from 'unstated'

import { SearchListingsQuery } from 'src/Graphql/SearchListings'
import { ListingItem } from './Components/ListingItem'
import { Location } from 'src/Containers/Location'

import { Container } from './style'

export const ListingsList: React.SFC<{}> = () => (
    <Container>
        <Subscribe to={[Location]}>
            {({ state: { place }, setPostion }: Location) => (
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
