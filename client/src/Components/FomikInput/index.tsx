import * as React from 'react'

import { Container, Label, StyledInput, ErrorMessage } from './style'
import { FieldProps } from 'formik'

interface Props {
    label?: string
}

export const FormikInput: React.SFC<FieldProps & Props> = ({
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
                value={value}
                onChange={onChange}
                error={!!errorMsg}
                {...field}
                {...props}
            />

            {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
        </Container>
    )
}
