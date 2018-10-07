import * as React from 'react'

import { Container, FilterItem } from './style'

export const Filters: React.SFC<{}> = () => (
    <Container>
        <FilterItem>Data</FilterItem>
        <FilterItem>Goście</FilterItem>
        <FilterItem>Rodzaj miejsca</FilterItem>
        <FilterItem>Cena</FilterItem>
    </Container>
)
