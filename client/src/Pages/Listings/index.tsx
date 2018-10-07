import * as React from 'react'

import { Filters } from './Components/Filters'
import { ListingsList } from './Components/ListingsList'

export const Listings: React.SFC<{}> = () => (
    <>
        <Filters />
        <ListingsList />
    </>
)
