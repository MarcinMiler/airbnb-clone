import { Container } from 'unstated'

interface State {
    guests: number
    priceMin: number
    priceMax: number
}

export class Filter extends Container<State> {
    public readonly state = {
        guests: 1,
        priceMin: 0,
        priceMax: 10000000
    }

    public updateState = (newState: object) => this.setState(newState)
}
