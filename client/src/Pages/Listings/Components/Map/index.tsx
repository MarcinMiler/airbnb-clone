import * as React from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import { Subscribe } from 'unstated'

import { Location } from 'src/Containers/Location'

export const Map = withGoogleMap(() => (
    <Subscribe to={[Location]}>
        {({ state: { center, marker, place } }: Location) =>
            (console.log(place.length, 'LENG') as any) || (
                <GoogleMap zoom={place.length > 1 ? 13 : 6} center={center}>
                    {marker.lat && <Marker position={marker} />}
                </GoogleMap>
            )
        }
    </Subscribe>
))
