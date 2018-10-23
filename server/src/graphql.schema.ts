export class CreateListingInput {
    name: string;
    category: string;
    description: string;
    price: number;
    beds: number;
    guests: number;
    lat?: number;
    lng?: number;
    amenities: string[];
    address: string;
    addressTags: string[];
}

export class SearchListingsInput {
    address?: string[];
    guests?: number;
    priceMin?: number;
    priceMax?: number;
}

export class UserDataInput {
    email: string;
    password: string;
}

export class Listing {
    id: number;
    name: string;
    category: string;
    description: string;
    price: number;
    beds: number;
    guests: number;
    lat?: number;
    lng?: number;
    amenities: string[];
    address: string;
    addressTags: string[];
}

export class LoginResponse {
    ok: boolean;
    token?: string;
}

export abstract class IMutation {
    abstract createListing(input: CreateListingInput): Listing | Promise<Listing>;

    abstract register(input: UserDataInput): RegisterResponse | Promise<RegisterResponse>;

    abstract login(input: UserDataInput): LoginResponse | Promise<LoginResponse>;
}

export abstract class IQuery {
    abstract listings(): Listing[] | Promise<Listing[]>;

    abstract listing(id: string): Listing | Promise<Listing>;

    abstract searchListings(input?: SearchListingsInput): Listing[] | Promise<Listing[]>;

    abstract me(): User | Promise<User>;

    abstract temp__(): boolean | Promise<boolean>;
}

export class RegisterResponse {
    ok: boolean;
}

export class User {
    id: number;
    email: string;
}
