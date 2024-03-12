import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            set: (v: any) => Number(v).toFixed(2),
        },
    }, 
    {
        timestamps: true,
    }
);

export const ProductModel = mongoose.model('Product', productSchema);