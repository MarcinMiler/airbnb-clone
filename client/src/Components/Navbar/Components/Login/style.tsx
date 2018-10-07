import styled from 'styled-components'

export const LogoWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
export const Logo = styled.img`
    width: 200px;
    height: 200px;
`
export const Br = styled.div`
    width: 100%;
    height: 1px;
    margin: 20px 0 20px 0;
    background-color: #e3e3e3;
`
export const Text = styled.p`
    width: 100px;
    margin: 20px auto 0 auto;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    color: #5cafb2;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`
