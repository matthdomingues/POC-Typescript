import { QueryResult } from "pg";
import { connection } from '../database/database.js';
import { List, ListEntity, ParamsId, UpdateList } from '../protocols/List.js';

export async function returnAll(): Promise<QueryResult<ListEntity>> {
    return connection.query('SELECT * FROM List;')
}

export async function insertOne(newItem: List) {
    const { item, unidade, descrição } = newItem;

    return connection.query(`
        INSERT INTO
            List (item, unidade, descrição)
        VALUES
        ($1, $2, $3);`, [item, unidade, descrição]);
}

export async function updateItem(itemData: UpdateList, itemId: ParamsId) {
    const { item, unidade, descrição } = itemData;

    if (item.length !== 0) { connection.query(`UPDATE List SET item=$1 WHERE id = $2;`, [item, itemId]) };
    if (unidade !== 0) { connection.query(`UPDATE List SET unidade=$1 WHERE id = $2;`, [unidade, itemId]) }
    if (descrição.length !== 0) { connection.query(`UPDATE List SET descrição=$1 WHERE id = $2;`, [descrição, itemId]) }
}

export async function existingItem(id: ParamsId): Promise<QueryResult<ListEntity>> {
    return connection.query('SELECT * FROM List WHERE id = ($1);', [id])
}

export async function deleteItem(id: ParamsId) {
    return connection.query('DELETE * FROM List WHERE id = ($1);', [id])
}

export async function deleteList() {
    return connection.query('DELETE * FROM List');
}

export async function countList(): Promise<QueryResult<Number>> {
    return connection.query('SELECT COUNT(*) FROM List;')
}