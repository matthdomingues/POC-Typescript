import { Request, Response } from 'express';
import { List, ParamsId, UpdateList } from '../protocols/List.js';
import { countList, deleteItem, deleteList, existingItem, insertOne, returnAll, updateItem } from '../repositories/list-repositories.js';
import { ListSchema } from '../schemas/list-schema.js';

// retorna tudo na lista de compras
export async function ListAll(req: Request, res: Response) {
    const shoppingList = await returnAll();
    return res.send(shoppingList.rows)
};

// adiciona um item à lista de compras
export async function InsertItem(req: Request, res: Response) {
    const newItem = req.body as List;

    const { error } = ListSchema.validate(newItem);
    if (error) {
        return res.status(400).send({
            message: error.message
        })
    };

    await insertOne(newItem);
    return res.status(201).send(`New item inserted!`);
};

// atualiza um item da lista de compras
export async function UpdateItem(req: Request, res: Response) {
    const itemData = req.body as UpdateList;
    const itemId = req.params as ParamsId;

    await updateItem(itemData, itemId);
    return res.status(200).send(`Item updated!`);
};

// deleta um item da lista de compras
export async function DeleteItem(req: Request, res: Response) {
    const id = req.params as ParamsId;

    const item = await existingItem(id);

    if (!item) {
        return res.sendStatus(404)
    } else {
        await deleteItem(id)
    }

    return res.status(204).send('Item deleted!');
};

// deleta lista de compras
export async function DeleteList(req: Request, res: Response) {
    await deleteList();
    return res.status(204).send('Shopping List deleted. Please, make a new one soon!')
};

//conta a quantidade de itens na lista de compras
export async function CountList(req: Request, res: Response) {
    const count = await countList();
    return res.status(200).send(`Your shopping list have ${count} item/s at the moment!`);
}