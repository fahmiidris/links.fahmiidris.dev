export type TApiResponse<T> = {
    code: number;
    status: 'success' | 'error';
    data: T;
};
