import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router'
import { Formik } from 'formik'

import { CreateListingMutation } from 'src/Graphql/CreateListing'
import { ListingSchema } from './schema'
import { CreateListingFormUI } from './CreateListingForm'

interface FieldValues {
    name: string
    category: string
    picture: string
    description: string
    price: number
    guests: number
    beds: number
    amenities: string
    lat: number
    lng: number
}

interface State {
    isLoading: boolean
}

export class C extends React.PureComponent<RouteComponentProps, State> {
    public readonly state = {
        isLoading: false
    }

    public render() {
        const { isLoading } = this.state
        const {
            history: { push }
        } = this.props

        return (
            <CreateListingMutation>
                {({ createListing }) => (
                    <Formik<FieldValues>
                        initialValues={{
                            name: '',
                            category: '',
                            picture: '',
                            description: '',
                            price: 0,
                            guests: 0,
                            beds: 0,
                            amenities: '',
                            lat: 0,
                            lng: 0
                        }}
                        validationSchema={ListingSchema}
                        onSubmit={async (values: FieldValues) => {
                            this.setState({ isLoading: true })
                            const response = await createListing({
                                variables: {
                                    ...values,
                                    amenities: [values.amenities]
                                }
                            })

                            const { id } = response.data.createListing

                            if (id) {
                                push(`/listing/${id}`)
                            }
                        }}
                    >
                        {({ submitForm }) => (
                            <CreateListingFormUI
                                submit={submitForm}
                                isLoading={isLoading}
                            />
                        )}
                    </Formik>
                )}
            </CreateListingMutation>
        )
    }
}

export const CreateListingForm = withRouter(C)
