import * as React from 'react'
import { Field } from 'formik'

import { FormikInput } from 'src/Components/FomikInput'
import { Textarea } from 'src/Components/Textarea'
import { Title } from './style'

export const BasicInfoForm: React.SFC<{}> = () => (
    <>
        <Title>Basic informations</Title>

        <Field
            name="name"
            placeholder="Name"
            label="Name"
            component={FormikInput}
        />

        <Field
            name="category"
            placeholder="Category"
            label="Category"
            component={FormikInput}
        />

        <Field
            name="picture"
            placeholder="Picture"
            label="Picture"
            component={FormikInput}
        />

        <Field
            name="description"
            placeholder="Description"
            label="Description"
            component={Textarea}
        />
    </>
)
