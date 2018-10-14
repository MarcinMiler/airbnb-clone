import * as React from 'react'
import { Field } from 'formik'

import { GeoSuggest } from 'src/Components/GeoSuggest'
import { Title } from './style'

export const LocationForm: React.SFC<{}> = () => (
    <>
        <Title>Location</Title>

        <Field component={GeoSuggest} />
    </>
)
