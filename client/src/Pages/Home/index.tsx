import * as React from 'react'

import { Modal } from 'src/Components/Modal'
import { Background } from './Components/Background'
import { Navbar } from './Components/Navbar'
import { Form } from './Components/Form'
import { Login } from './Components/Login'

interface State {
    isOpen: boolean
    page: string
}

export class Home extends React.Component<{}, State> {
    public readonly state = {
        isOpen: true,
        page: ''
    }

    private open = (page: string) =>
        this.setState(() => ({ isOpen: true, page }))

    private close = () => this.setState(() => ({ isOpen: false, page: '' }))

    public render() {
        const { isOpen } = this.state

        return (
            <Background>
                <Navbar open={this.open} />

                <Form>lol</Form>

                {isOpen && (
                    <Modal handleClose={this.close}>
                        <Login />
                    </Modal>
                )}
            </Background>
        )
    }
}
