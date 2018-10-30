import * as React from 'react'
import Geosuggest from 'react-geosuggest'
import { Subscribe } from 'unstated'

import { Location } from 'src/Containers/Location'
import './geoInput.css'

export class GeoSuggest extends React.PureComponent {
    public render() {
        return (
            <Subscribe to={[Location]}>
                {({ setPlace, state: { place } }: Location) => (
                    <Geosuggest
                        initialValue={place.toString()}
                        placeholder="Enter a location"
                        onSuggestSelect={value => setPlace(value)}
                        location={new google.maps.LatLng(53.558572, 9.9278215)}
                        radius={20}
                    />
                )}
            </Subscribe>
        )
    }
}
