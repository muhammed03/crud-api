import dotenv from 'dotenv';
import { createServer } from 'http';
import controller from "./controller";

dotenv.config();

const PORT = process.env.PORT || 5000;

export const server = createServer((req, res) => {
    controller(req, res);
})

server.listen(+PORT, () => {
    console.log(`Server running on port ${PORT}`);
})