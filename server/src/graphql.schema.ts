export class CreateListingInput {
    name: string;
}

export class UserDataInput {
    email: string;
    password: string;
}

export class Listing {
    id: number;
    name: string;
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

    abstract temp__(): boolean | Promise<boolean>;
}

export class RegisterResponse {
    ok: boolean;
}
