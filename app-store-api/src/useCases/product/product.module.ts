import { CreateModule } from "@expressots/core";
import { ProductGetallController } from "./getall/product-getall.controller";

export const ProductModule = CreateModule([ProductGetallController]);
