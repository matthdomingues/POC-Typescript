import pg from "pg";
var Pool = pg.Pool;
//.env
var connection = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '123',
    database: 'ShoppingList'
});
export { connection };
