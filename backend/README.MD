Responsible for provide data to the [`web`](https://github.com/DiegoVictor/happy-web) front-end. Permit to register orphanages. The app has validation, also a simple versioning was made.

## Table of Contents
* [Installing](#installing)
  * [Configuring](#configuring)
    * [SQLite](#sqlite)
      * [Migrations](#migrations)
    * [.env](#env)
* [Usage](#usage)
  * [Versioning](#versioning)
  * [Routes](#routes)
    * [Requests](#requests)

# Installing
Easy peasy lemon squeezy:
```
$ yarn
```
Or:
```
$ npm install
```
> Was installed and configured the [`eslint`](https://eslint.org/) and [`prettier`](https://prettier.io/) to keep the code clean and patterned.

## Configuring
The application use just one databases: [SQLite](https://www.sqlite.org/index.html).

### SQLite
Store the orphanages. For more information to how to setup your database see:
* [typeorm](https://typeorm.io/#/using-ormconfig)
> You can find the application's `ormconfig.json` file in the root folder.

#### Migrations
Remember to run the database migrations:
```
$ yarn ts-node-dev ./node_modules/typeorm/cli.js migration:run
```
Or:
```
$ yarn typeorm migration:run
```
> See more information on [TypeORM Migrations](https://typeorm.io/#/migrations).

### .env
In this file you may configure your app's port and a url. Rename the `.env.example` in the root directory to `.env` then just update with your settings.

|key|description|default
|---|---|---
|APP_PORT|Port number where the app will run.|`3333`
|BASE_URL|App's url.|`http://localhost:3333`

# Usage
To start up the app run:
```
$ yarn dev:server
```
Or:
```
npm run dev:server
```

## Versioning
A simple versioning was made. Just remember to set after the `host` the `/v1/` string to your requests.
```
GET http://localhost:3333/v1/orphanages
```

## Routes
|route|HTTP Method|params|description
|:---|:---:|:---:|:---:
|`/orphanages`|GET| - |Lists orphanages.
|`/orphanages/:id`|GET|`:id` of the orphanage.|Return one orphanage.
|`/orphanages`|POST|Body with new orphanage [form data](https://developer.mozilla.org/docs/Web/API/FormData) (See insomnia file for good example).|Create a new orphanage.

### Requests
* `POST /orphanages`

Request body:
```multipart
{
  "name": "Hackett, Becker and Fadel",
  "latitude": -85.8713,
  "longitude": -73.3957,
  "about": "Adipisci cupiditate illo rerum sunt tempore. Non voluptate laborum enim hic tenetur perspiciatis sint. Quo totam recusandae dolores et ullam commodi. Ut consectetur saepe id voluptatem et quidem. Dolor neque consequuntur ipsa. Placeat sit aut nostrum similique dolorem voluptatem et velit enim.",
  "instructions": "Venha visitar",
  "opening_hours": "Das 8h às 18h",
  "open_on_weekends": true,
  "images": <file(s)>
}
```
