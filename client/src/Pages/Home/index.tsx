import * as React from 'react'

import { Modal } from 'src/Components/Modal'
import { Background } from './Components/Background'
import { Navbar } from './Components/Navbar'
import { Form } from './Components/Form'
import { Login } from './Components/Login'
import { Register } from './Components/Register'

interface State {
    isOpen: boolean
    page: string
}

export class Home extends React.Component<{}, State> {
    public readonly state = {
        isOpen: false,
        page: ''
    }

    private open = (page: string) =>
        this.setState(() => ({ isOpen: true, page }))

    private close = () => this.setState(() => ({ isOpen: false, page: '' }))

    private changePage = () =>
        this.setState(({ page }) => ({
            page: page === 'login' ? 'register' : 'login'
        }))

    public render() {
        const { isOpen, page } = this.state

        return (
            <Background>
                <Navbar open={this.open} />

                <Form>lol</Form>

                {isOpen && (
                    <Modal handleClose={this.close}>
                        {page === 'login' ? (
                            <Login changePage={this.changePage} />
                        ) : (
                            <Register changePage={this.changePage} />
                        )}
                    </Modal>
                )}
            </Background>
        )
    }
}
