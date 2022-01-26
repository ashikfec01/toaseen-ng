
export interface CollectionInterface {
    id: number;
    name: string;
    description: string;
    product: number[];
    products: ProductInterface[];
}


export interface ProductInterface {
    id: number;
    name: string;
    description: string;
    varient?: VarientInterface;
    stock: number;
    price: number;
    discountType: number;
    discount: DiscountInterface;
}



export interface VarientInterface {
    id: number;
    name: string;
    description: string;
    item?: number[];
    stock: number;
    price: number;
    discountType: number;
    discount: DiscountInterface;
    items?: ItemsInterface[];
}

export interface ItemsInterface {
    id: number;
    name: string;
    description: string;
    stock: number;
    price: number;
    discountType: number;
    discount: DiscountInterface;
}
export interface DiscountInterface {
    id: number;
    name: string;
    description: string;
    amount: number;
}
