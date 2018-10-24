import * as React from 'react'
import { Subscribe } from 'unstated'

import { SearchListingsQuery } from 'src/Graphql/SearchListings'
import { Location } from 'src/Containers/Location'
import { Filter } from 'src/Containers/Filter'
import { ListingItem } from './Components/ListingItem'

import { Container } from './style'

export const ListingsList: React.SFC<{}> = () => (
    <Container>
        <Subscribe to={[Location, Filter]}>
            {(
                { state: { place }, setPostion }: Location,
                { state: { ...filters } }: Filter
            ) => (
                <SearchListingsQuery address={place} {...filters}>
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
