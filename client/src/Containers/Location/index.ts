import { Container } from 'unstated'
import { Suggest } from 'react-geosuggest'

interface State {
    center: {
        lat: number
        lng: number
    }
    marker: {
        lat: number | null
        lng: number | null
    }
    place: string[]
}

export class Location extends Container<State> {
    public readonly state = {
        center: {
            lat: 52.0685,
            lng: 19.9475
        },
        marker: {
            lat: 52.0685,
            lng: 52.0685
        },
        place: ['']
    }

    public setPostion = (lat: number, lng: number) =>
        this.setState({ marker: { lat, lng } })

    public setPlace = async (place: Suggest) => {
        if (place) {
            const {
                label,
                location: { lat, lng }
            } = place
            const splitAddress = label.split(', ')

            await this.setState({
                place: splitAddress,
                center: { lat: parseFloat(lat), lng: parseFloat(lng) }
            })
        }
    }
}
