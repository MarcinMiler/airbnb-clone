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
