import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 90px);
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Wrapper = styled.div`
    width: 550px;
    height: 100%;
    padding: 25px;
    position: relative;
    border-right: 1px solid lightgray;
    box-sizing: border-box;
`
export const Buttons = styled.div`
    width: 100%;
    padding: 25px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: 0;
    bottom: 0;
    box-sizing: border-box;
`
