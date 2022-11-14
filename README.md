# shopping-list - typescrypt

Back-end for shopping-list, an shopping list management using **Typescript**.

## About

Shopping-list is an application with which you can manage every item you want to buy when you go shopping.

## How to start 

1. Clone this repository
2. Install all dependencies

```bash
npm i
```

## How to run tests locally:

The **postgres database** already have a few itens for us to test it;

First you need to create and import the database using the data inside the `dump.sql` file.

After that, execute this command: 

```bash
npx nodemon src/app.ts
```

Then we can start testing it!

1. Return all the items created on the shopping list database:

Using an API Tester (such as ThunderClient), you can do a `GET` request to `http://localhost:4000/my-list`.

It will return an object with the items currently created on it;

---

2. Allow you to create/insert new items on the shopping list database:

Using an API Tester (such as ThunderClient), you can do a `POST` request  to `http://localhost:4000/my-list` like this:

```
body:
{
   "item": "Banana",
   "unidade": 6,
   "descrição": "Banana amarela, não verde!" // descrição is optional
}
```

It will return an status 201 and a confirmation message;

---

3. Allow you to update the items on the shopping list database:

Using an API Tester (such as ThunderClient), you can do a `PUT` request to `http://localhost:4000/my-list/:id` like this:

```
params: "http://localhost:4000/my-list/1"

// You can edit one or more colums from the item.

body:
{   
   "item": "(new name)",
   "unidade": (new unity)
   "descrição": "(new description)",
   "comprado": false/true
}
```

It will return an status 200 and a confirmation message;

---

4. Allow you to delete items on the shopping list database:

Using an API Tester (such as ThunderClient), you can do a `DELETE` request  to `http://localhost:4000/my-list/:id` like this:

```
params: "http://localhost:4000/my-list/1"
```

It will return an status 204;

---

5. Allow you to delete **ALL THE SHOPPING LIST** on the shopping list database:

***BE CAREFUL, THAT COMMAND IS IRREVERSIBLE!***

Using an API Tester (such as ThunderClient), you can do a `DELETE` request  to `http://localhost:4000/my-list`.

It will return an status 204;

---

6. Allow you to filter items on the shopping list database **by the name**:

Using an API Tester (such as ThunderClient), you can do a `GET` request  to `http://localhost:4000/my-list/:char` like this:

```
params: "http://localhost:4000/my-list/B"
```

It will return an object with the items that match that filter (in that case, all items with the first letter B);

---

7. Allow you to know the quantity of items on the shopping list database;

Using an API Tester (such as ThunderClient), you can do a `GET` request  to `http://localhost:4000/my-list/count`.

It will return an string informing the count of the items currently created on it;

