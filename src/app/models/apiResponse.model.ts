export class ApiResponse<T> {
    data: T;
    message: string;
    id: number;
}
export class Pages<T> {
    collection: T
    page: number;
    count: number;
    totalPage: number;
}