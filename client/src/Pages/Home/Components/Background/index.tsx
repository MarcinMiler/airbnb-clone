import styled from 'styled-components'

import Image from 'src/Images/Background.jpeg'

export const Background = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    background: url(${Image});
    box-sizing: border-box;
    z-index: -100;
`
