import styled from 'styled-components'

interface Input {
    noMargin?: boolean
}

export const Container = styled.div<Input>`
    width: 100%;
    margin: ${p => (p.noMargin ? '0' : '0 0 25px 0')};
    display: flex;
    flex-direction: column;
`
export const Label = styled.label`
    margin-bottom: 10px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.5px;
    color: #494a4a;
`
export const StyledInput = styled.input`
    width: 100%;
    height: 45px;
    margin: 2px;
    padding: 15px;
    border-radius: 4px;
    border: 1px solid;
    border-color: rgb(235, 235, 235);
    font-size: 14px;
    font-weight: 500;
    font-family: Montserrat;
    box-sizing: border-box;
`
