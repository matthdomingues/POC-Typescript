import express from "express";
import { DeleteItem, DeleteList, InsertItem, ListAll, EditItem, NameList, CountList } from "./controllers/list-controller.js";

const server = express();
server.use(express.json());

server.get('/health', (req, res) => { res.send('I am ok!') });


server.get('/my-list', ListAll);
server.get('/my-list/count', CountList);
server.post('/my-list', InsertItem);
server.put('/my-list/:id', EditItem);
server.delete('/my-list/:id', DeleteItem);
server.delete('/my-list', DeleteList);
server.get('/my-list/:char', NameList);

server.listen(4000, () => {
    console.log('I am listening!')
});