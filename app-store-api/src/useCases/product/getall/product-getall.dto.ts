export interface IProduct {
    id: string;
    name: string;
    image: string;
    price: number;
    rating: number;
}

export interface IProductGetallResponseDTO {
    items: Array<IProduct>;
    total: number;
    page: number;
    perPage: number;
    totalPages: number;
}
