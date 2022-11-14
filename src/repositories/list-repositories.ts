import { QueryResult } from "pg";
import { connection } from '../database/database.js';
import { List, ListEntity } from '../protocols/List.js';

export async function returnAll(): Promise<QueryResult<ListEntity>> {
    return connection.query('SELECT * FROM List ORDER BY item;')
}

export async function insertOne(newItem: List) {
    const { item, unidade, descrição } = newItem;

    return connection.query(`
        INSERT INTO
            List (item, unidade, descrição)
        VALUES
        ($1, $2, $3);`, [item, unidade, descrição]);
}

export async function updateItem(itemData: Partial<List>, id: string) {
    const { item, unidade, descrição, comprado } = itemData;

    if (item !== undefined) { connection.query(`UPDATE List SET item=$1 WHERE id = $2;`, [item, id]) };
    if (unidade !== undefined) { connection.query(`UPDATE List SET unidade=$1 WHERE id = $2;`, [unidade, id]) }
    if (descrição !== undefined) { connection.query(`UPDATE List SET descrição=$1 WHERE id = $2;`, [descrição, id]) }
    if (comprado !== undefined) { connection.query(`UPDATE List SET comprado=$1 WHERE id = $2;`, [comprado, id]) }
    return
}

export async function existingItem(id: string): Promise<QueryResult<ListEntity>> {
    return connection.query('SELECT FROM List WHERE id = ($1);', [id])
}

export async function deleteItem(id: string) {
    return connection.query('DELETE FROM List WHERE id = ($1);', [id])
}

export async function deleteList() {
    return connection.query('DELETE * FROM List');
}

export async function nameList(char: string): Promise<QueryResult<ListEntity>> {
    return connection.query(`SELECT * FROM List WHERE item iLIKE '${char}%';`)
}

export async function countList(): Promise<QueryResult<Number>> {
    return connection.query('SELECT COUNT(*) FROM List;')
}