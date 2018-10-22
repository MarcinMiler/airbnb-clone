import * as React from 'react'

import { Container, FilterItem, PopOver } from './style'

interface State {
    show: string
}

export class Filters extends React.PureComponent<{}, State> {
    public readonly state = {
        show: ''
    }

    private toggle = (toShow: string) =>
        this.setState(({ show }) => ({ show: toShow === show ? '' : toShow }))

    public render() {
        const { show } = this.state

        return (
            <Container>
                <FilterItem
                    onClick={() => this.toggle('date')}
                    focus={show === 'date'}
                >
                    Data
                    {show === 'date' && <PopOver />}
                </FilterItem>

                <FilterItem
                    onClick={() => this.toggle('guests')}
                    focus={show === 'guests'}
                >
                    Goscie
                    {show === 'guests' && <PopOver />}
                </FilterItem>

                <FilterItem
                    onClick={() => this.toggle('price')}
                    focus={show === 'price'}
                >
                    Cena
                    {show === 'price' && <PopOver />}
                </FilterItem>
            </Container>
        )
    }
}
