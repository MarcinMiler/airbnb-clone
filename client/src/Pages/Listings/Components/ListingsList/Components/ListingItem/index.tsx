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

interface Props {
    id: number
    name: string
    category: string
    description: string
    price: number
    beds: number
    guests: number
    lat: number
    lng: number
    amenities: string[]
}

const getRoute = (id: number) => `/listing/${id}`

export const ListingItem: React.SFC<Props> = ({
    id,
    name,
    category,
    description,
    price,
    beds,
    guests,
    lat,
    lng,
    amenities
}) => (
    <Link to={getRoute(id)} style={{ textDecoration: 'none' }}>
        <Container>
            <Image src="https://a0.muscache.com/im/pictures/126e41c4-2a1b-4251-b516-d239351126f7.jpg?aki_policy=large" />

            <Row>
                <Details>
                    <Subtitle>CAŁY APARTAMENT</Subtitle>
                    <Title>{name}</Title>

                    <RoomsDetails>
                        <SmallText>{guests} goście •</SmallText>
                        <SmallText>1 sypialnia •</SmallText>
                        <SmallText>{beds} Łóżko •</SmallText>
                        <SmallText>1 Łazienka</SmallText>
                    </RoomsDetails>

                    <RoomsDetails>
                        {amenities.map((amenitie, i) => (
                            <SmallText key={i}>{amenitie} •</SmallText>
                        ))}
                    </RoomsDetails>
                </Details>

                <Pricing>
                    <Title>{price} zł</Title>
                    <VerySmallText>za dzien</VerySmallText>

                    <Stars />
                </Pricing>
            </Row>
        </Container>
    </Link>
)
