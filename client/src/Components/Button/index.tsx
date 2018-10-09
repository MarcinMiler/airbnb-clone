import styled from 'styled-components'

interface Button {
    fullWidth?: boolean
    disabled?: boolean
}

export const Button = styled.div<Button>`
    width: ${props => (props.fullWidth ? '100%' : '100px')};
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    background-color: ${p => (p.disabled ? 'gray' : '#ff5a63')};
    font-weight: 600;
    font-family: Crc;
    color: white;
    cursor: pointer;
    user-select: none;
`
