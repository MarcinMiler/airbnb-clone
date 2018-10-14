import * as React from 'react'
import { FieldProps } from 'formik'
import Geosuggest, { Suggest } from 'react-geosuggest'

import './geoInput.css'

export class GeoSuggest extends React.PureComponent<FieldProps<any>> {
    private onSuggestSelect = (place: Suggest) => {
        if (!place) {
            return
        }
        console.log(place)
        const {
            location: { lat, lng }
        } = place

        const {
            form: { setValues, values }
        } = this.props

        setValues({
            ...values,
            lat,
            lng
        })
    }

    public render() {
        return (
            <Geosuggest
                placeholder="Enter a location"
                onSuggestSelect={this.onSuggestSelect}
                location={new google.maps.LatLng(53.558572, 9.9278215)}
                radius={20}
            />
        )
    }
}
