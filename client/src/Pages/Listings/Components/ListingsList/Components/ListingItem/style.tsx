import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 200px;
    margin-bottom: 20px;
    display: flex;
    border-radius: 3px;
    border: 1px solid #e3e3e3;
    transition: all 200ms ease;

    &:hover {
        box-shadow: 0px 0px 15px lightgray;
    }
`
export const Image = styled.img`
    width: 300px;
    height: 200px;
    border-radius: 3px;
`
export const Row = styled.div`
    padding: 20px;
    display: flex;
`
export const Details = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
`
export const Subtitle = styled.p`
    font-size: 13px;
    font-weight: 600;
    color: #281a47;
`
export const Title = styled.p`
    margin-top: 5px;
    font-size: 18px;
    font-weight: 600;
    color: #494a5a;
`
export const RoomsDetails = styled.div`
    display: flex;
`
export const SmallText = styled.p`
    margin: 5px 5px 0 0;
    font-size: 14px;
    color: #484848;
`
export const Pricing = styled.div`
    padding-left: 17px;
    border-left: 1px solid #e3e3e3;
`
export const VerySmallText = styled.p`
    margin-top: 3px;
    font-size: 12px;
    font-weight: 600;
    color: #484848;
`
