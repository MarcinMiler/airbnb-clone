import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Navbar } from '../Components/Navbar'
import { Home } from '../Pages/Home'
import { Listings } from '../Pages/Listings'

export const Routes: React.SFC<{}> = () => (
    <BrowserRouter>
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/listings" component={Listings} />
            </Switch>
        </>
    </BrowserRouter>
)
