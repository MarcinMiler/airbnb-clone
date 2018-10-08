import * as React from 'react'
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
    Br
} from './style'

export const Details: React.SFC<{}> = () => (
    <Container>
        <Row>
            <div>
                <Title>Studio w Centrum przy Dworcu Gdynia</Title>

                <Text>Gdynia</Text>
            </div>
            <User>
                <UserAvatar src="https://a0.muscache.com/im/pictures/ead1a702-12fc-4a19-81c6-0fd97ec7d08b.jpg?aki_policy=profile_x_medium" />

                <Username>Marlena</Username>
            </User>
        </Row>

        <RoomDetails>
            <GroupIcon />
            <RoomDetailsText>2 goście</RoomDetailsText>

            <DoorIcon />
            <RoomDetailsText>1 sypialnia</RoomDetailsText>

            <BedIcon />
            <RoomDetailsText>1 lozko</RoomDetailsText>

            <BathIcon />
            <RoomDetailsText>1 lazienka</RoomDetailsText>
        </RoomDetails>

        <Description>
            Bardzo słoneczny i ciepły w pełni wyposażony apartament ok 25m2 w
            centrum Gdyni. Duży pokój z narożnikiem, aneks kuchenny, łazienka.
            Do dworca Gdynia Główna 7 min spacerem. Wszystko czego możesz chcieć
            na wakacjach i w podróży służbowej. Zapraszam :)
        </Description>

        <Br />
    </Container>
)
