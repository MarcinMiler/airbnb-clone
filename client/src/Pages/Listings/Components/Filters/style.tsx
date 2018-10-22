import styled, { css } from 'styled-components'

interface FilterItemProps {
    focus?: boolean
}

export const Container = styled.div`
    width: 100%;
    height: 60px;
    padding: 0 20px 0 20px;
    display: flex;
    align-items: center;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    box-sizing: border-box;
`
export const FilterItem = styled.div<FilterItemProps>`
    margin: 0 10px 0 10px;
    padding: 6px 12px 6px 12px;
    position: relative;
    border-radius: 4px;
    border: 1px solid #dbdfdf;
    font-size: 14px;
    box-sizing: border-box;
    transition: background 200ms ease;
    cursor: pointer;
    user-select: none;

    &:hover {
        background-color: #dbdfdf;
    }

    ${p =>
        p.focus &&
        css`
            background-color: #008387;
            border: 1px solid #008387;
            color: white;

            &:hover {
                background-color: rgb(0, 108, 112);
            }
        `};
`
export const PopOver = styled.div`
    position: absolute;
    top: 43px;
    left: -2px;
    width: 250px;
    height: 200px;
    border-radius: 4px;
    border: 1px solid lightgray;
    background-color: white;
    /* box-shadow: 0px 0px 15px lightgray; */
`
