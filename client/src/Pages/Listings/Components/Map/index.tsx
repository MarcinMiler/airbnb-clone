import * as React from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import { Subscribe } from 'unstated'
import { Postion } from 'src/Containers/Position'

export const Map = withGoogleMap(() => (
    <Subscribe to={[Postion]}>
        {({ state: { lat, lng } }) => (
            <GoogleMap
                defaultZoom={7}
                defaultCenter={{
                    lat: 52.0685,
                    lng: 19.9475
                }}
            >
                <Marker position={{ lat, lng }} />
            </GoogleMap>
        )}
    </Subscribe>
))
