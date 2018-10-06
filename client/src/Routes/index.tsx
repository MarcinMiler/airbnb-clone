import * as React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from '../Pages/Home'

export const Routes: React.SFC<{}> = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home} />
    </BrowserRouter>
)
