import * as React from 'react'
import { FieldProps } from 'formik'
import Geosuggest, { Suggest } from 'react-geosuggest'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

import '../GeoSuggest/geoInput.css'

const MapWithAMarker = withGoogleMap<{
    defaultCenter: DefaultCenter
    lat: number
    lng: number
    onClick: (e: google.maps.KmlMouseEvent | google.maps.MouseEvent) => void
}>(props => (
    <GoogleMap
        defaultZoom={8}
        center={props.defaultCenter}
        onClick={props.onClick}
    >
        <Marker position={{ lat: props.lat, lng: props.lng }} />
    </GoogleMap>
))

interface DefaultCenter {
    lat: number
    lng: number
}

interface State {
    defaultCenter: DefaultCenter | null
}

export class GeoSuggestMap extends React.PureComponent<FieldProps<any>, State> {
    public readonly state = {
        defaultCenter: null
    }

    private onSuggestSelect = (place: Suggest) => {
        if (!place) {
            return
        }

        const {
            location: { lat, lng },
            label
        } = place

        const {
            form: { setValues, values }
        } = this.props

        const addressTags = place.label.split(', ')

        setValues({
            ...values,
            lat,
            lng,
            address: label,
            addressTags
        })

        this.setState({
            defaultCenter: {
                lat: parseFloat(lat),
                lng: parseFloat(lng)
            }
        })
    }

    private onMapClick = (x: any) => {
        const {
            form: { values, setValues }
        } = this.props

        const lat = x.latLng.lat()
        const lng = x.latLng.lng()

        setValues({
            ...values,
            lat,
            lng
        })
    }

    public render() {
        const { defaultCenter } = this.state
        const {
            form: { values }
        } = this.props

        return (
            <>
                <Geosuggest
                    placeholder="Enter a location"
                    onSuggestSelect={this.onSuggestSelect}
                    location={new google.maps.LatLng(53.558572, 9.9278215)}
                    radius={20}
                />

                {defaultCenter && (
                    <MapWithAMarker
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `400px` }} />}
                        defaultCenter={defaultCenter}
                        lat={values.lat}
                        lng={values.lng}
                        onClick={this.onMapClick}
                    />
                )}
            </>
        )
    }
}
