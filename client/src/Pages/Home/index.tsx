import * as React from 'react'

import { Background } from './Components/Background'
import { Form } from './Components/Form'

export const Home: React.SFC<{}> = () => (
    <Background>
        <Form />
    </Background>
)
