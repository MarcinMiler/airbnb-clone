import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import './Theme/font.css'
import { Routes } from './Routes'
import { theme, GlobalStyle } from './Theme'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyle />
            <Routes />
        </>
    </ThemeProvider>,
    document.getElementById('root') as HTMLElement
)
registerServiceWorker()
