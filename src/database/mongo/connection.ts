import mongoose from "mongoose";
import { env } from "../../config/environment";

export const startDbConnection = async () => {
    try {
        await mongoose.connect(env.MONGO_URL, {
            dbName: env.MONGO_DB_NAME
        });
        
        console.log('Mongo connected');
    } catch (error) {
        console.log('Mongo connection error', error);
        throw error;
    }
};