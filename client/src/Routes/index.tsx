import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Navbar } from '../Components/Navbar'
import { Home } from '../Pages/Home'
import { Listings } from '../Pages/Listings'
import { Listing } from '../Pages/Listing'

export const Routes: React.SFC<{}> = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/">
                <>
                    <Navbar />
                    <Route path="/listings" component={Listings} />
                    <Route path="/listing/:id" component={Listing} />
                </>
            </Route>
        </Switch>
    </BrowserRouter>
)
