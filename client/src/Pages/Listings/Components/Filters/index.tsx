import * as React from 'react'

import { Container, FilterItem, PopOver, Relative } from './style'
import { Input } from 'src/Components/Input'

interface State {
    show: string
    guests: number
    price: number
}

export class Filters extends React.PureComponent<{}, State> {
    public readonly state = {
        show: '',
        guests: 0,
        price: 0
    }

    private handleChange = (newState: object) => this.setState(newState)

    private toggle = (toShow: string) =>
        this.setState(({ show }) => ({ show: toShow === show ? '' : toShow }))

    public render() {
        const { show, guests, price } = this.state

        return (
            <Container>
                <Relative>
                    <FilterItem
                        onClick={() => this.toggle('date')}
                        focus={show === 'date'}
                    >
                        Data
                    </FilterItem>
                    {show === 'date' && <PopOver />}
                </Relative>

                <Relative>
                    <FilterItem
                        onClick={() => this.toggle('guests')}
                        focus={!!guests || show === 'guests'}
                    >
                        {guests > 0 && guests} Goscie
                    </FilterItem>
                    {show === 'guests' && (
                        <PopOver>
                            <Input
                                onChange={(value: string) =>
                                    this.handleChange({
                                        guests: parseInt(value, 10)
                                    })
                                }
                                value={guests}
                                label="Ilosc gosci"
                                placeholder="Ilosc gosci"
                                type="number"
                                min={0}
                            />
                        </PopOver>
                    )}
                </Relative>

                <Relative>
                    <FilterItem
                        onClick={() => this.toggle('price')}
                        focus={!!price || show === 'price'}
                    >
                        {price > 0 && price + 'zł'} Cena
                    </FilterItem>
                    {show === 'price' && (
                        <PopOver>
                            <Input
                                onChange={(value: string) =>
                                    this.handleChange({
                                        price: parseInt(value, 10)
                                    })
                                }
                                value={price}
                                label="Cena"
                                placeholder="Cena"
                                type="number"
                                min={0}
                            />
                        </PopOver>
                    )}
                </Relative>
            </Container>
        )
    }
}
