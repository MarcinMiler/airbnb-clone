export interface CreateListingInput {
    name: string
    category: string
    description: string
    price: number
    beds: number
    guests: number
    lat: number
    lng: number
    amenities: string[]
    address: string
    addressTags: string[]
}

export interface UserDataInput {
    email: string
    password: string
}

export interface Listing {
    id: number
    name: string
    category: string
    description: string
    price: number
    beds: number
    guests: number
    lat: number
    lng: number
    amenities: string[]
    address: string
    addressTags: string[]
}

export interface LoginResponse {
    ok: boolean
    token?: string
}

export interface IMutation {
    createListing(input: CreateListingInput): Listing | Promise<Listing>
    register(input: UserDataInput): RegisterResponse | Promise<RegisterResponse>
    login(input: UserDataInput): LoginResponse | Promise<LoginResponse>
}

export interface IQuery {
    listings(): Listing[] | Promise<Listing[]>
    listing(id: string): Listing | Promise<Listing>
    temp__(): boolean | Promise<boolean>
}

export interface RegisterResponse {
    ok: boolean
}
