export class CreateListingInput {
    name: string;
}

export class Listing {
    id: number;
    name: string;
}

export abstract class IMutation {
    abstract createListing(input: CreateListingInput): Listing | Promise<Listing>;
}

export abstract class IQuery {
    abstract listings(): Listing[] | Promise<Listing[]>;

    abstract temp__(): boolean | Promise<boolean>;
}
