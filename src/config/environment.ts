import "dotenv/config";
import { get } from "env-var";

export const env = {

    HOST: get('HOST').required().asString(),
    PORT: get('PORT').required().asPortNumber(),

    MONGO_URL     : get('MONGO_URL').required().asString(),
    MONGO_DB_NAME : get('MONGO_DB_NAME').required().asString(),
    MONGO_USER    : get('MONGO_USER').required().asString(),
    MONGO_PASSWORD: get('MONGO_PASSWORD').required().asString(),

    NODE_ENV: get('NODE_ENV').required().asString()

};