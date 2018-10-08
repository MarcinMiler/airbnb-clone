import styled from 'styled-components'

import { MdStar } from 'react-icons/md'

export const Container = styled.div`
    margin-top: 7px;
    display: flex;
    align-items: center;
`
export const Star = styled(MdStar)`
    font-size: 12px;
    color: #008387;
`
export const StarCount = styled.p`
    margin: 3px 0 0 4px;
    font-size: 12px;
    font-weight: 600;
    color: #484848;
`
