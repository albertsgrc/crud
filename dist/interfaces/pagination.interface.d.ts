export interface Pagination<T> {
    readonly results: T[];
    readonly total: number;
}
