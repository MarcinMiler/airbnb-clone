import * as React from 'react'

import { Stars } from 'src/Components/Stars'
import { Br } from 'src/Components/Br'
import { Container, Wrapper, Price } from './style'
import { Input } from 'src/Components/Input'
import { Button } from 'src/Components/Button'

export const Reservation: React.SFC<{}> = () => (
    <Container>
        <Wrapper>
            <Price>90 zl</Price>

            <Stars />

            <Br />

            <Input
                onChange={() => null}
                label="Daty"
                placeholder="dd-mmmm-yyyy"
            />

            <Input
                onChange={() => null}
                label="Goscie"
                placeholder="dd-mmmm-yyyy"
            />

            <Button fullWidth>Rezerwacja</Button>
        </Wrapper>
    </Container>
)
