import { 
    Request, 
    Response, 
    Router 
} from "express";
import { ProductController } from "../controllers/product.controller";
import { ProductService } from "../services/mongo/product.service";
// import { ProductService } from "../services/postgres/product.service";

export const createProductRoutes = () => {
    const router = Router();
    
    const controller = new ProductController(
        new ProductService()
    );

    router.get(
        '/',
        (req: Request, res: Response) => controller.getAll(req, res)
    );

    router.get(
        '/:id',
        (req: Request, res: Response) => controller.getById(req, res)
    );

    router.post(
        '/',
        (req: Request, res: Response) => controller.insert(req, res)
    );

    router.patch(
        '/:id',
        (req: Request, res: Response) => controller.update(req, res)
    );

    router.delete(
        '/:id',
        (req: Request, res: Response) => controller.delete(req, res)
    );

    return router;
};