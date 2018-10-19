import styled from 'styled-components'

import { MdClose } from 'react-icons/md'

export const Container = styled.div`
    width: 100%;
    margin: 0 0 25px 0;
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
export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    min-height: 45px;
    border-radius: 4px;
    border: 1px solid;
    border-color: rgb(235, 235, 235);
`
export const Tag = styled.div`
    margin: 8px 0 0 8px;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 3px;
    background-color: #ff5a66;
    font-size: 14px;
    color: white;
    box-sizing: border-box;
`
export const CloseIcon = styled(MdClose)`
    font-size: 16px;
    margin: -1px 0 0 5px;
    color: white;
    cursor: pointer;
`
export const StyledInput = styled.input`
    width: 100%;
    margin: 13px 10px 10px 10px;
    border: none;
    font-size: 14px;
    font-weight: 500;
    font-family: Montserrat;
    box-sizing: border-box;

    &:focus {
        outline: none;
    }
`
