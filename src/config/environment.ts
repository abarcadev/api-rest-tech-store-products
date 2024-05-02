import "dotenv/config";
import { get } from "env-var";

export const env = {

    HOST: get('HOST').required().asString(),
    PORT: get('PORT').required().asPortNumber(),

    MONGO_URL     : get('MONGO_URL').required().asString(),
    MONGO_DB_NAME : get('MONGO_DB_NAME').required().asString(),
    MONGO_USER    : get('MONGO_USER').required().asString(),
    MONGO_PASSWORD: get('MONGO_PASSWORD').required().asString(),

    POSTGRES_URL     : get('POSTGRES_URL').required().asString(),
    POSTGRES_DB_NAME : get('POSTGRES_DB_NAME').required().asString(),
    POSTGRES_USER    : get('POSTGRES_USER').required().asString(),
    POSTGRES_PASSWORD: get('POSTGRES_PASSWORD').required().asString(),

    MYSQL_ROOT_PASSWORD: get('MYSQL_ROOT_PASSWORD').required().asString(),

    TIME_ZONE: get('TIME_ZONE').required().asString(),
    NODE_ENV: get('NODE_ENV').required().asString()

};