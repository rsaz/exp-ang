import { provide } from "inversify-binding-decorators";
import { randomUUID } from "node:crypto";

@provide(Product)
export class Product {
    id: string;
    name: string;
    image: string;
    price: number;
    rating: number;

    constructor() {
        this.id = randomUUID();
    }
}
