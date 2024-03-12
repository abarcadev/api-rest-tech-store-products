import { Application } from "express";
import { createProductRoutes } from "./routes/product.routes";

export const registerRoutes = (app: Application) => {
    app.use('/api/products', createProductRoutes());
};