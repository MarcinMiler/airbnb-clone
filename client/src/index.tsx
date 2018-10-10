import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components'

import { client } from './apollo'
import { Routes } from './Routes'
import { theme, GlobalStyle } from './Theme'
import registerServiceWorker from './registerServiceWorker'
import './Theme/font.css'

ReactDOM.render(
    <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />
                <Routes />
            </>
        </ThemeProvider>
    </ApolloProvider>,
    document.getElementById('root') as HTMLElement
)
registerServiceWorker()
