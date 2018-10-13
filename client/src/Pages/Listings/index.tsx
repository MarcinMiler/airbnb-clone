import * as React from 'react'

import { Filters } from './Components/Filters'
import { ListingsList } from './Components/ListingsList'
import { Row } from 'src/Components/Row'
import { Map } from './Components/Map'

export const Listings: React.SFC<{}> = () => (
    <>
        <Filters />
        <Row>
            <ListingsList />
            <Map
                containerElement={
                    <div
                        style={{ width: `50%`, height: 'calc(100vh - 140px)' }}
                    />
                }
                mapElement={<div style={{ width: `100%`, height: `100%` }} />}
            />
        </Row>
    </>
)
