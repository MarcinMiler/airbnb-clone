import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router'
import { compose, withApollo } from 'react-apollo'
import { ApolloClient } from 'apollo-client'

import { NavbarUI } from './Navbar'
import { MeQuery } from 'src/Graphql/Me'

interface State {
    isOpen: boolean
    page: string
}

interface Props {
    client: ApolloClient<any>
}

class C extends React.Component<RouteComponentProps<{}> & Props, State> {
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

    private logout = () => {
        this.props.client.resetStore()
        localStorage.removeItem('token')
        this.forceUpdate()
    }

    private getProps = () => {
        const { isOpen, page } = this.state
        const {
            location: { pathname },
            history: { push }
        } = this.props

        const isHomePage = pathname === '/'

        return {
            isHomePage,
            isOpen,
            page,
            push,
            open: this.open,
            close: this.close,
            changePage: this.changePage,
            logout: this.logout
        }
    }

    public render() {
        return (
            <MeQuery>
                {({ me }) => <NavbarUI {...this.getProps()} me={me} />}
            </MeQuery>
        )
    }
}

export const Navbar = compose(
    withRouter,
    withApollo
)(C)
