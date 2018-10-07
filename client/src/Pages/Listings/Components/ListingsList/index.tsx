import * as React from 'react'

import { Listing } from './Components/Listing'
import { Container } from './style'

export const ListingsList: React.SFC<{}> = () => (
    <Container>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
            <Listing key={i} />
        ))}
    </Container>
)
