import * as React from 'react'

import { Background } from './Components/Background'
import { Navbar } from './Components/Navbar'
import { Form } from './Components/Form'

export const Home: React.SFC<{}> = () => (
    <Background>
        <Navbar />

        <Form>lol</Form>
    </Background>
)
