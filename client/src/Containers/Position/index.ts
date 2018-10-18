import { Container } from 'unstated'

interface State {
    lat: number
    lng: number
}

export class Postion extends Container<State> {
    public readonly state = {
        lat: 52.0685,
        lng: 19.9475
    }

    public setPostion = (lat: number, lng: number) =>
        this.setState({ lat, lng })
}
