import * as React from 'react'

import { Input } from 'src/Components/Input'
import { Button } from 'src/Components/Button'
import { Container, Wrapper, Title, Right } from './style'

export const Form: React.SFC<{}> = () => (
    <Container>
        <Wrapper>
            <Title>Book unique homes and experiences.</Title>

            <Input label="GDZIE?" placeholder="Warszaw" onChange={() => null} />

            <Input
                onChange={() => null}
                label="PRZYJAZD"
                placeholder="dd-mm-rrrr"
            />

            <Input label="GOSĆIE" placeholder="1 gość" onChange={() => null} />

            <Right>
                <Button>Szukaj</Button>
            </Right>
        </Wrapper>
    </Container>
)
