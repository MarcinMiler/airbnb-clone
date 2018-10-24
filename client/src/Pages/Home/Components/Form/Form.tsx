import * as React from 'react'
import { Link } from 'react-router-dom'

import { GeoSuggest } from 'src/Components/GeoSuggest'
import { Input } from 'src/Components/Input'
import { Button } from 'src/Components/Button'
import { Label } from 'src/Components/Input/style'
import { Container, Wrapper, Title, Right } from './style'

interface Props {
    updateState: (newState: object) => void
}

export const FormUI: React.SFC<Props> = ({ updateState }) => (
    <Container>
        <Wrapper>
            <Title>Book unique homes and experiences.</Title>

            <Label>Lokalizacja</Label>

            <GeoSuggest />

            <Input
                onChange={(value: string) =>
                    updateState({ guests: parseInt(value, 10) })
                }
                label="Goscie"
                placeholder="1 gość"
                type="number"
            />

            <Right>
                <Link to="/listings" style={{ textDecoration: 'none' }}>
                    <Button>Szukaj</Button>
                </Link>
            </Right>
        </Wrapper>
    </Container>
)
