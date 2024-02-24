import { provide } from "inversify-binding-decorators";
import { IProduct, IProductGetallResponseDTO } from "./product-getall.dto";
import path from "path";
import fs from "fs";

@provide(ProductGetallUseCase)
export class ProductGetallUseCase {
    async execute(): Promise<IProductGetallResponseDTO | []> {
        const page = 1;
        const perPage = 10;

        try {
            const filepath = path.join(__dirname, "product.json");
            const data = fs.readFileSync(filepath, "utf-8");
            const jsonObject = JSON.parse(data);

            const products: Array<IProduct> = jsonObject.items;

            /* Pagination implementation */
            const total = products.length;
            const totalPages = Math.ceil(total / perPage);
            const items = products.slice((page - 1) * perPage, page * perPage);

            return {
                items,
                total,
                page,
                perPage,
                totalPages,
            };
        } catch (error) {
            console.error(error);
            return [];
        }
    }
}
