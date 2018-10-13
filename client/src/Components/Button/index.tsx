import * as React from 'react'

import { Container, Loader } from './style'

interface Props {
    fullWidth?: boolean
    disabled?: boolean
    loading?: boolean
    children: React.ReactNode
    onClick?: () => void
}

export const Button: React.SFC<Props> = ({
    onClick,
    children,
    loading,
    fullWidth,
    disabled
}) => (
    <Container
        onClick={onClick && onClick}
        fullWidth={fullWidth}
        disabled={disabled || loading}
    >
        {loading ? <Loader /> : children}
    </Container>
)
