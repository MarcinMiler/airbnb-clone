import * as React from 'react'

import { Container, Label, StyledInput } from './style'

interface Props {
    label?: string
    placeholder: string
    type?: string
    noMargin?: boolean
    onChange: (value: string) => void
}

export const Input: React.SFC<Props> = ({
    label,
    placeholder,
    onChange,
    type,
    noMargin
}) => (
    <Container noMargin={noMargin}>
        {label && <Label>{label}</Label>}

        <StyledInput
            onChange={(e: any) => onChange(e.target.value)}
            placeholder={placeholder}
            type={type}
        />
    </Container>
)
