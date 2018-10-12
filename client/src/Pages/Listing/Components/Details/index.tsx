import * as React from 'react'

import { ListingQuery } from 'src/Graphql/Listing'
import { DetailsUI } from './Details'

interface Props {
    id: string
}

export class Details extends React.Component<Props, {}> {
    public render() {
        const { id } = this.props
        return (
            <ListingQuery id={id}>
                {({ listing, loading }) => {
                    if (loading || !listing) {
                        return <div />
                    }
                    return <DetailsUI {...listing} />
                }}
            </ListingQuery>
        )
    }
}
