import * as React from 'react'

import { Input } from 'src/Components/Input'
import { Title } from './style'

export const RoomInfoForm: React.SFC<{}> = () => (
    <>
        <Title>Room details</Title>

        <Input
            onChange={() => null}
            placeholder="Price"
            label="Price"
            type="number"
        />

        <Input
            onChange={() => null}
            placeholder="Guests"
            label="Guests"
            type="number"
        />

        <Input
            onChange={() => null}
            placeholder="Beds"
            label="Beds"
            type="number"
        />

        <Input
            onChange={() => null}
            placeholder="Amenities"
            label="Amenities"
        />
    </>
)
