import { CollectionInterface, DiscountInterface, ItemsInterface, ProductInterface, VarientInterface } from "./collection.interface";

export class CollectionVM {
    id: number;
    name: string;
    description: string;
    product: number[];
    products: ProductVM[];
    constructor() { }
    init(data: CollectionInterface) {
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.products = data.products.map(d => {
            const data = new ProductVM();
            data.init(d);
            return data;
        });
    }
}


export class ProductVM {
    id: number;
    name: string;
    description: string;
    varient?: VarientVM;
    stock: number;
    price: number;
    discountType: number;
    discount: DiscountVM;
    constructor() { }
    init(data: ProductInterface) {
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        const _varient = new VarientVM();
        _varient.init(data.varient);
        this.varient = _varient;
        this.stock = data.stock;
        this.price = data.price;
        const _discount = new DiscountVM()
        _discount.init(data.discount);
        this.discount = _discount;
    }
}



export class VarientVM {
    id: number;
    name: string;
    description: string;
    item?: number[];
    stock: number;
    price: number;
    discountType: number;
    discount: DiscountVM;
    items?: ItemsVM[];
    constructor() { }
    init(data: VarientInterface) {
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.stock = data.stock;
        this.price = data.price;
        this.items = data.items.map(d => {
            const data = new ItemsVM();
            data.init(d);
            return data;
        })
        const _discount = new DiscountVM()
        _discount.init(data.discount);
        this.discount = _discount;
    }
}

export class ItemsVM {
    id: number;
    name: string;
    description: string;
    stock: number;
    price: number;
    discountType: number;
    discount: DiscountVM;
    constructor() { }
    init(data: ItemsInterface) {
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.stock = data.stock;
        this.price = data.price;
        const _discount = new DiscountVM()
        _discount.init(data.discount);
        this.discount = _discount;
    }
}
export class DiscountVM {
    id: number;
    name: string;
    description: string;
    amount: number;
    constructor() { }
    init(data: DiscountInterface) {
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.amount = data.amount;
    }
}
