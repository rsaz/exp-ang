import { Container } from "inversify";
import { AppContainer } from "@expressots/core";
import { AppModule } from "@useCases/app/app.module";
import { ProductModule } from "@useCases/product/product.module";

const appContainer = new AppContainer();

export const container: Container = appContainer.create([// Add your modules here
    AppModule, ProductModule]);
