export abstract class IQuery {
    abstract listings(): string[] | Promise<string[]>;

    abstract temp__(): boolean | Promise<boolean>;
}
