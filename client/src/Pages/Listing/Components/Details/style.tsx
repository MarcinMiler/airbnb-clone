import styled from 'styled-components'

import { MdGroup, MdLocalHotel } from 'react-icons/md'
import { FaDoorOpen, FaBath } from 'react-icons/fa'

export const Container = styled.div`
    width: 60%;
    margin-top: 20px;
`
export const Row = styled.div`
    display: flex;
`
export const Title = styled.p`
    max-width: 500px;
    font-size: 30px;
    font-weight: 700;
    color: #494a4a;
`
export const Text = styled.p`
    margin-top: 8px;
    font-weight: 500;
    color: #484848;
`
export const User = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const UserAvatar = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 50%;
`
export const Username = styled.p`
    margin-top: 3px;
    font-size: 14px;
    color: #767676;
`
export const RoomDetails = styled.div`
    margin-top: 18px;
    display: flex;
    align-items: center;
`
export const RoomDetailsText = styled.p`
    margin-right: 15px;
    font-size: 16px;
    font-weight: 500;
    color: #484848;
`
export const GroupIcon = styled(MdGroup)`
    margin-right: 8px;
    font-size: 18px;
    color: black;
`
export const BedIcon = styled(MdLocalHotel)`
    margin-right: 8px;
    font-size: 18px;
    color: black;
`
export const DoorIcon = styled(FaDoorOpen)`
    margin-right: 8px;
    font-size: 18px;
    color: black;
`
export const BathIcon = styled(FaBath)`
    margin-right: 8px;
    font-size: 18px;
    color: black;
`
export const Description = styled.p`
    margin: 30px 0 30px 0;
    font-size: 16px;
    color: #484848;
`
export const Br = styled.div`
    width: 100%;
    height: 1px;
    margin: 20px 0 20px 0;
    background-color: #e3e3e3;
`
