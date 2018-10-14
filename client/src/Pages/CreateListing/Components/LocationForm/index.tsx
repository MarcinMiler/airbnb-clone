import * as React from 'react'
import { Field } from 'formik'

import { GeoSuggestMap } from 'src/Components/GeoSuggestMap'
import { Title } from './style'

export const LocationForm: React.SFC<{}> = () => (
    <>
        <Title>Location</Title>

        <Field component={GeoSuggestMap} />
    </>
)
