import * as React from 'react'

import { Br } from 'src/Components/Br'
import {
    Container,
    Title,
    Row,
    User,
    Username,
    UserAvatar,
    Text,
    RoomDetails,
    GroupIcon,
    RoomDetailsText,
    BedIcon,
    DoorIcon,
    BathIcon,
    Description,
    TitleWrap
} from './style'

interface Props {
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

export const DetailsUI: React.SFC<Props> = ({
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
    <Container>
        <Row>
            <TitleWrap>
                <Title>{name}</Title>

                <Text>Gdynia</Text>
            </TitleWrap>
            <User>
                <UserAvatar src="https://a0.muscache.com/im/pictures/ead1a702-12fc-4a19-81c6-0fd97ec7d08b.jpg?aki_policy=profile_x_medium" />

                <Username>Marlena</Username>
            </User>
        </Row>

        <RoomDetails>
            <GroupIcon />
            <RoomDetailsText>{guests} goście</RoomDetailsText>

            <DoorIcon />
            <RoomDetailsText>1 sypialnia</RoomDetailsText>

            <BedIcon />
            <RoomDetailsText>{beds} lozko</RoomDetailsText>

            <BathIcon />
            <RoomDetailsText>1 lazienka</RoomDetailsText>
        </RoomDetails>

        <Description>{description}</Description>

        <Br />
    </Container>
)
