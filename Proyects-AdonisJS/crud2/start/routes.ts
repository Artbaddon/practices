/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import ProductsController from 'App/Controllers/Http/ProductsController'

Route.get('/products', 'ProductsController.index').as('products.index');
Route.get('/products/create', 'ProductsController.create').as('products.create');
Route.post('/products', 'ProductsController.store').as('products.store');
Route.get('/products/:id/edit', 'ProductsController.edit').as('products.edit');
Route.patch('/products/:id', 'ProductsController.update').as('products.update');
Route.delete('/products/:id', 'ProductsController.destroy').as('products.destroy');


/* Route.get('/hw', async () => {
  return 'HELLO WORLD' //Simple Static Routes
})

Route.get('/hello/:name?', async ({ params }) => {
  return params.name ? `Hello ${params.name} !` : 'Hello anon'
})
*/
