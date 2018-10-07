import styled from 'styled-components'

interface Button {
    fullWidth?: boolean
}

export const Button = styled.div<Button>`
    width: ${props => (props.fullWidth ? '100%' : '100px')};
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    background-color: #ff5a63;
    font-weight: 600;
    color: white;
    cursor: pointer;
`
