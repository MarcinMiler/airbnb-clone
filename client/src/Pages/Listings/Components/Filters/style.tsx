import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 60px;
    padding: 0 20px 0 20px;
    display: flex;
    align-items: center;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
`
export const FilterItem = styled.div`
    margin: 0 10px 0 10px;
    padding: 6px 12px 6px 12px;
    border-radius: 4px;
    border: 1px solid #dbdfdf;
    font-size: 14px;
    box-sizing: border-box;
    transition: background 200ms ease;
    cursor: pointer;

    &:hover {
        background-color: #dbdfdf;
    }
`
