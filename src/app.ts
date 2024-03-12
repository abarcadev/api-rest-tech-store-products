import { startDbConnection } from "./database/mongo";
import Server from "./server";

const server = new Server({
    async startDbConnection() {
        return startDbConnection();
    },
});

server.start();