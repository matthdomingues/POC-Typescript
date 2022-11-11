import express from "express";
import { DeleteItem, DeleteList, InsertItem, ListAll, UpdateItem } from "./controllers/list-controller.js";

const server = express();
server.use(express.json());

server.get('/health', (req, res) => { res.send('I am ok!') });

server.get('/my-list', ListAll);
server.post('/my-list', InsertItem);
server.put('/my-list/:id', UpdateItem);
server.delete('/my-list/:id', DeleteItem);
server.delete('/my-list', DeleteList);
server.get('/my-list/count')

server.listen(4000, () => {
    console.log('I am listening!')
});