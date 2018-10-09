import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 90px);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const White = styled.div`
    width: 65%;
    height: calc(100vh - 90px);
    position: fixed;
    left: 0;
    background-color: white;
`
export const Gray = styled.div`
    width: 35%;
    height: calc(100vh - 90px);
    position: fixed;
    right: 0;
    background-color: #fafafa;
`
export const Wrapper = styled.div`
    width: 550px;
    height: 650px;
    background-color: red;
    z-index: 200;
`
