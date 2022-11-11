import pg from "pg";

const { Pool } = pg;

//.env
const connection = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '123',
    database: 'ShoppingList'
});

export { connection }