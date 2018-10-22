import * as React from 'react'

import { Container, Label, StyledInput } from './style'

interface Props {
    label?: string
    placeholder: string
    type?: string
    noMargin?: boolean
    value?: number
    min?: number
    onChange: (value: string) => void
}

export const Input: React.SFC<Props> = ({
    label,
    onChange,
    noMargin,
    ...inputProps
}) => (
    <Container noMargin={noMargin}>
        {label && <Label>{label}</Label>}

        <StyledInput
            onChange={(e: any) => onChange(e.target.value)}
            {...inputProps}
        />
    </Container>
)
