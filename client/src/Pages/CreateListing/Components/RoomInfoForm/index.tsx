import * as React from 'react'
import { Field } from 'formik'

import { FormikInput } from 'src/Components/FomikInput'
import { TagInput } from 'src/Components/TagInput'
import { Title } from './style'

export const RoomInfoForm: React.SFC<{}> = () => (
    <>
        <Title>Room details</Title>

        <Field
            name="price"
            placeholder="Price"
            label="Price"
            type="number"
            component={FormikInput}
        />

        <Field
            name="guests"
            placeholder="Guests"
            label="Guests"
            type="number"
            component={FormikInput}
        />

        <Field
            name="beds"
            placeholder="Beds"
            label="Beds"
            type="number"
            component={FormikInput}
        />

        <Field
            name="amenities"
            placeholder="Amenities"
            label="Amenities"
            component={TagInput}
        />
    </>
)
