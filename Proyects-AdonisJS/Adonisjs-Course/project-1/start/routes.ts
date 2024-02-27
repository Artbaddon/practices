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
import PostsController from 'App/Controllers/Http/PostsController'

Route.where('id', Route.matchers.number())

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.group(() => {
  Route.get('/about', async () => {
    return 'About Page'
  })

  Route.post('/about', async () => {
    return 'Post About Page'
  })
}).prefix('/api')

Route.get('/posts', 'PostsController.index')
Route.get('/posts/:id?', async ({ params, request }) => {
  console.log(request.input('name'))
  const { id } = params
  return `Post wit id ${id} `
})

Route.get('/home', async ({ view }) => {
  const html = await view.render('home')
  return html

})

Route.get('/about', async ({ view }) => {
   return await view.render('about')


})
Route.get('/contact', async ({ view }) => {
  const html = await view.render('contact')
  return html

})

