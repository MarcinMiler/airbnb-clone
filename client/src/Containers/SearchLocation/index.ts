import { Container } from 'unstated'
import { Suggest } from 'react-geosuggest'

interface State {
    place: string[]
}

export class SearchLocation extends Container<State> {
    public readonly state = {
        place: []
    }

    public setPlace = async (place: Suggest) => {
        const splitAddress = place.label.split(', ')
        await this.setState({ place: splitAddress })
        console.log(this.state)
    }
}
