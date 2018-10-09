import * as React from 'react'
import { Field } from 'formik'

import { FormikInput } from 'src/Components/FomikInput'
import { Title } from './style'

export const RoomInfoForm: React.SFC<{}> = () => (
    <>
        <Title>Room details</Title>

        <Field
            name="price"
            placeholder="Price"
            label="Price"
            component={FormikInput}
        />

        <Field
            name="guests"
            placeholder="Guests"
            label="Guests"
            component={FormikInput}
        />

        <Field
            name="beds"
            placeholder="Beds"
            label="Beds"
            component={FormikInput}
        />

        <Field
            name="amenities"
            placeholder="Amenities"
            label="Amenities"
            component={FormikInput}
        />
    </>
)
