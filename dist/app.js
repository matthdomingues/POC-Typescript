import express from "express";
import { DeleteItem, DeleteList, InsertItem, ListAll, UpdateItem } from "./controllers/list-controller.js";
var server = express();
server.use(express.json());
server.get('/health', function (req, res) { res.send('I am ok!'); });
server.get('/my-list', ListAll);
server.post('/my-list', InsertItem);
server.put('/my-list/:id', UpdateItem);
server["delete"]('/my-list/:id', DeleteItem);
server["delete"]('/my-list', DeleteList);
server.get('/my-list/count');
server.listen(4000, function () {
    console.log('I am listening!');
});
