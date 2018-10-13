import styled, { keyframes } from 'styled-components'

interface Button {
    fullWidth?: boolean
    disabled?: boolean
    loading?: boolean
}

const spin = keyframes`
    0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Container = styled.div<Button>`
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
    pointer-events: ${p => (p.disabled ? 'none' : 'auto')};
`
export const Loader = styled.div`
    border: 3px solid transparent;
    border-top: 3px solid white;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    animation: ${spin} 0.5s cubic-bezier(0.5, 0.1, 0.4, 0.9) infinite;
`
