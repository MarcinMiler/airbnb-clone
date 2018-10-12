import * as React from 'react'

import { Image } from './Components/Image'
import { Row } from './Components/Row'
import { Details } from './Components/Details'
import { Reservation } from './Components/Reservation'
import { RouteComponentProps } from 'react-router'

export const Listing: React.SFC<RouteComponentProps<{ id: string }>> = ({
    match: {
        params: { id }
    }
}) => (
    <>
        <Image />

        <Row>
            <Details id={id} />
            <Reservation />
        </Row>
    </>
)
