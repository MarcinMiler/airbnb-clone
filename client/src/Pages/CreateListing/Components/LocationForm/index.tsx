import * as React from 'react'
import { Field } from 'formik'

import { FormikInput } from 'src/Components/FomikInput'
import { Title } from './style'

export const LocationForm: React.SFC<{}> = () => (
    <>
        <Title>Location</Title>

        <Field
            name="lat"
            placeholder="Lat"
            label="Lat"
            component={FormikInput}
        />

        <Field
            name="lng"
            placeholder="Lng"
            label="Lng"
            component={FormikInput}
        />
    </>
)
