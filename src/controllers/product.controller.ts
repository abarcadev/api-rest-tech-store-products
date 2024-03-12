import { Request, Response } from "express";
import { ProductService } from "../services/mongo/product.service";
// import { ProductService } from "../services/postgres/product.service";
import { StatusCodeEnum } from "../enums/status-code.enum";
import { resError } from "../utils/response-errors";
import { BodySaveProductI, FiltersGetAllProductsI } from "../interfaces/product.interface";
import { CustomError } from "../config/custom-error";
import { REG_DELETED, REG_NOT_FOUND } from "../utils/messages";

export class ProductController {

    constructor(
        private readonly productService: ProductService
    ) {}

    async getAll(req: Request, res: Response) {
        try {
            const params = req.query as unknown as FiltersGetAllProductsI;

            const data  = await this.productService.getAll(params);
            const total = await this.productService.getAllCount(params);

            return res.status(StatusCodeEnum.Ok).json({
                data,
                total
            });
        } catch (error) {
            resError(error, res);
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const id = req.params.id;

            const data = await this.productService.getById(id);
            
            if (!data)
                throw CustomError.notFound(REG_NOT_FOUND(`Product id '${ id }'`));
            
            return res.status(StatusCodeEnum.Ok).json(data);
        } catch (error) {
            resError(error, res);
        }
    }

    async insert(req: Request, res: Response) {
        try {
            const payload = req.body as BodySaveProductI;

            const { id } = await this.productService.insert(payload);

            return res.status(StatusCodeEnum.Created).json({ id });
        } catch (error) {
            console.log('***err', error);
            
            resError(error, res);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id      = req.params.id;
            const payload = req.body as BodySaveProductI;

            const updateRes = await this.productService.update(id, payload);

            if (!updateRes)
                throw CustomError.notFound(REG_NOT_FOUND(`Product id '${ id }'`));

            return res.status(StatusCodeEnum.Created).json({ id }); 
        } catch (error) {
            resError(error, res);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = req.params.id;

            const deleteRes = await this.productService.delete(id);

            if (!deleteRes)
                throw CustomError.notFound(REG_NOT_FOUND(`Product id '${ id }'`));

            return res.status(StatusCodeEnum.Ok).json({ message: REG_DELETED });
        } catch (error) {
            resError(error, res);
        }
    }
}