import { Request, Response } from 'express';
import { List } from '../protocols/List.js';
import { countList, deleteItem, deleteList, existingItem, insertOne, nameList, returnAll, updateItem } from '../repositories/list-repositories.js';
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

// edita/atualiza um item da lista de compras 
export async function EditItem(req: Request, res: Response) {
    const itemData = req.body as Partial<List>;
    const { id } = req.params;

    await updateItem(itemData, id);
    return res.status(200).send(`Item updated!`);
};

// deleta um item da lista de compras
export async function DeleteItem(req: Request, res: Response) {
    const { id } = req.params;

    const item = await existingItem(id);

    if (!item) {
        return res.status(404);
    } else {
        await deleteItem(id);
        return res.status(204);
    }
};

// deleta lista de compras
export async function DeleteList(req: Request, res: Response) {
    await deleteList();
    return res.status(204);
};

// filtrar lista de compras por nome de itens
export async function NameList(req: Request, res: Response) {
    const { char } = req.params;
    const characterList = await nameList(char);

    return res.send(characterList.rows)
}

//conta a quantidade de itens na lista de compras
export async function CountList(req: Request, res: Response) {
    const shoppingList = await returnAll();
    return res.status(200).send(`Your shopping list have ${shoppingList.rowCount} item/s at the moment!`);
}