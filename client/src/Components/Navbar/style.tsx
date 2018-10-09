import styled from 'styled-components'

interface InvertColors {
    invertColors?: boolean
}

export const Container = styled.div`
    width: 100%;
    height: 80px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
`
export const Row = styled.div`
    display: flex;
`
export const Center = styled.div`
    display: flex;
    align-items: center;
`
export const Svg = styled.svg<InvertColors>`
    width: 42px;
    height: 42px;
    margin-right: 30px;
    color: ${p => (p.invertColors ? 'white' : '#ff8087')};
    fill: currentColor;
    cursor: pointer;
`
export const NavLink = styled.p<InvertColors>`
    margin: 0 20px 0 20px;
    font-size: 14px;
    font-weight: 500;
    color: ${p => (p.invertColors ? 'white' : '#484848')};
    cursor: pointer;
`
