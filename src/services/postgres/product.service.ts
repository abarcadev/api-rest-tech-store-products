import { PrismaClient } from "@prisma/client";
import { BodySaveProductI, FiltersGetAllProductsI } from "../../interfaces/product.interface";

export class ProductService {

    private readonly prismaClient = new PrismaClient();

    async getAll(params: FiltersGetAllProductsI) {
        return this.prismaClient.productModel.findMany({
            where: {
                name: { 
                    contains: params.name, 
                    mode: 'insensitive' 
                },
            },
            select: {
                id         : true,
                name       : true,
                description: true,
                price      : true,
            },
            skip: Number(params.skip),
            take: Number(params.limit),
        });
    }

    async getAllCount(params: FiltersGetAllProductsI): Promise<number> {
        return this.prismaClient.productModel.count({
            where: {
                name: { contains: params.name },
            },
        });
    }

    async getById(id: string) {
        return this.prismaClient.productModel.findUnique({
            where: { 
                id: Number(id) 
            },
            select: {
                id         : true,
                name       : true,
                description: true,
                price      : true,
            }
        });
    }

    async insert(product: BodySaveProductI) {
        return this.prismaClient.productModel.create({
            data: {
                ...product
            }
        });
    }

    async update(id: string, product: BodySaveProductI) {
        return this.prismaClient.productModel.update({
            where: {
                id: Number(id)
            },
            data: {
                description: product.description,
                price      : product.price
            }
        });
    }

    async delete(id: string) {
        return this.prismaClient.productModel.delete({
            where: {
                id: Number(id)
            }
        });
    }

}