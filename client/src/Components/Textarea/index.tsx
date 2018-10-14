import * as React from 'react'
import { FieldProps } from 'formik'

import { Container, Label, StyledInput, ErrorMessage } from './style'

interface Props {
    label?: string
}

export const Textarea: React.SFC<FieldProps & Props> = ({
    field: { onChange, value, ...field },
    form: { errors, touched },
    label,
    ...props
}) => {
    const errorMsg = touched[field.name] && errors[field.name]
    return (
        <Container>
            {label && <Label>{label}</Label>}

            <StyledInput
                onChange={onChange}
                value={value}
                error={!!errorMsg}
                {...field}
                {...props}
            />

            {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
        </Container>
    )
}
