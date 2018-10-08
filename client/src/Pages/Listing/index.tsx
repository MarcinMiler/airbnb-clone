import * as React from 'react'

import { Image } from './Components/Image'
import { Row } from './Components/Row'
import { Details } from './Components/Details'
import { Reservation } from './Components/Reservation'

export const Listing: React.SFC<{}> = () => (
    <>
        <Image />

        <Row>
            <Details />
            <Reservation />
        </Row>
    </>
)
