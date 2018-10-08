import * as React from 'react'
import { Link } from 'react-router-dom'

import { Stars } from 'src/Components/Stars'
import {
    Container,
    Image,
    Subtitle,
    Row,
    Title,
    Details,
    RoomsDetails,
    SmallText,
    Pricing,
    VerySmallText
} from './style'

export const ListingItem: React.SFC<{}> = () => (
    <Link to="/listing/1" style={{ textDecoration: 'none' }}>
        <Container>
            <Image src="https://a0.muscache.com/im/pictures/126e41c4-2a1b-4251-b516-d239351126f7.jpg?aki_policy=large" />

            <Row>
                <Details>
                    <Subtitle>CAŁY APARTAMENT</Subtitle>
                    <Title>Studio w Centrum przy Dworcy Gdynia</Title>

                    <RoomsDetails>
                        <SmallText>2 goście •</SmallText>
                        <SmallText>1 sypialnia •</SmallText>
                        <SmallText>1 Łóżko •</SmallText>
                        <SmallText>1 Łazienka</SmallText>
                    </RoomsDetails>

                    <RoomsDetails>
                        <SmallText>WIFI •</SmallText>
                        <SmallText>Kuchnia •</SmallText>
                        <SmallText>Pralka •</SmallText>
                        <SmallText>Zmywarka</SmallText>
                    </RoomsDetails>
                </Details>

                <Pricing>
                    <Title>90 zł</Title>
                    <VerySmallText>za dzien</VerySmallText>

                    <Stars />
                </Pricing>
            </Row>
        </Container>
    </Link>
)
