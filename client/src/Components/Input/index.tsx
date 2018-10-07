import * as React from 'react'

import { Container, Label, StyledInput } from './style'

interface Props {
    label?: string
    placeholder: string
    type?: string
    onChange: (value: string) => void
}

export const Input: React.SFC<Props> = ({
    label,
    placeholder,
    onChange,
    type
}) => (
    <Container>
        {label && <Label>{label}</Label>}

        <StyledInput
            placeholder={placeholder}
            type={type}
            onChange={(e: any) => onChange(e.target.value)}
        />
    </Container>
)
