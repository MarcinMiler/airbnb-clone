import * as React from 'react'

import { Container, Star, StarCount } from './style'

export const Stars: React.SFC<{}> = () => (
    <Container>
        {[1, 2, 3, 4, 5].map(i => (
            <Star key={i} />
        ))}
        <StarCount>70</StarCount>
    </Container>
)
