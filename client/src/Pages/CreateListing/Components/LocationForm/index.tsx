import * as React from 'react'

import { Input } from 'src/Components/Input'
import { Title } from './style'

export const LocationForm: React.SFC<{}> = () => (
    <>
        <Title>Location</Title>

        <Input
            onChange={() => null}
            placeholder="Lat"
            label="Price"
            type="number"
        />

        <Input
            onChange={() => null}
            placeholder="Lng"
            label="Price"
            type="number"
        />
    </>
)
