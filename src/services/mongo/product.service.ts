import { ProductModel } from "../../database/mongo";
import { BodySaveProductI, FiltersGetAllProductsI } from "../../interfaces/product.interface";

export class ProductService {

    async getAll(params: FiltersGetAllProductsI) {
        return ProductModel.find(
                { name: new RegExp(params.name, 'i') }
            )
            .select(`
                name 
                description 
                price
            `)
            .skip(params.skip)
            .limit(params.limit);
    }

    async getAllCount(params: FiltersGetAllProductsI): Promise<number> {
        return ProductModel.find(
                { name: new RegExp(params.name, 'i') }
            )
            .countDocuments();
    }

    async getById(id: string) {
        return ProductModel.findById(
            id, 
            `name
            description    
            price`
        );
    }

    async insert(product: BodySaveProductI) {
        return ProductModel.create(product);
    }

    async update(id: string, product: BodySaveProductI) {
        return ProductModel.findByIdAndUpdate(
            id, 
            {
                description: product.description,
                price      : product.price,
            }
        );
    }

    async delete(id: string) {
        return ProductModel.findByIdAndDelete(id);
    }

}