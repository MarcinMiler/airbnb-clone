import * as React from 'react'

import { ListingItem } from './Components/ListingItem'
import { Container } from './style'

export const ListingsList: React.SFC<{}> = () => (
    <Container>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
            <ListingItem key={i} />
        ))}
    </Container>
)
