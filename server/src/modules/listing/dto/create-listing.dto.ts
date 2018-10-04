import { CreateListingInput } from 'graphql.schema'

export class CreateListingDto extends CreateListingInput {
    name: string
    category: string
    description: string
    price: number
    beds: number
    guests: number
    lat: number
    lng: number
    amenities: string[]
}
