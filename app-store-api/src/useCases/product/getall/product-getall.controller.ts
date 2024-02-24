import { BaseController, StatusCode } from "@expressots/core";
import { controller, Get, response } from "@expressots/adapter-express";
import { Response } from "express";
import { ProductGetallUseCase } from "./product-getall.usecase";
import { IProductGetallResponseDTO } from "./product-getall.dto";

@controller("/product/getall")
export class ProductGetallController extends BaseController {
    constructor(private productGetallUseCase: ProductGetallUseCase) {
        super();
    }

    @Get("/")
    async execute(
        @response() res: Response,
    ): Promise<IProductGetallResponseDTO> {
        return this.callUseCaseAsync(
            this.productGetallUseCase.execute(),
            res,
            StatusCode.OK,
        );
    }
}
