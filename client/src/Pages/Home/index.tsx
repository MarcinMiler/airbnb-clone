import * as React from 'react'

import { Navbar } from 'src/Components/Navbar'
import { Background } from './Components/Background'
import { Form } from './Components/Form'

export const Home: React.SFC<{}> = () => (
    <Background>
        <Navbar />
        <Form />
    </Background>
)
