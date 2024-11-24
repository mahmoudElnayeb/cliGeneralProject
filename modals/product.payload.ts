

export interface IProductPayload {
        title: string;
        price: number;
        description: string;
        categoryId: string;
        images: Array<{url:string}>;
        id?: string;
    }