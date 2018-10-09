import * as React from 'react'

import { Container, Label, StyledInput } from './style'
import { FieldProps } from 'formik'

interface Props {
    label?: string
}

export const FormikInput: React.SFC<FieldProps & Props> = ({
    field: { onChange, ...field },
    form: { errors, touched },
    label,
    ...props
}) => (
    <Container>
        {label && <Label>{label}</Label>}

        <StyledInput onChange={onChange} {...field} {...props} />
    </Container>
)
