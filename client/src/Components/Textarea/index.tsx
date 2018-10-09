import * as React from 'react'
import { FieldProps } from 'formik'

import { Container, Label, StyledInput } from './style'

interface Props {
    label?: string
}

export const Textarea: React.SFC<FieldProps & Props> = ({
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
