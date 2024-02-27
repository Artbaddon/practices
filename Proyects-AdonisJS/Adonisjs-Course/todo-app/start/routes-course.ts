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
import Database from '@ioc:Adonis/Lucid/Database'
import User from 'App/Models/User'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.get('/users', async ({ response }) => {
  try {
    const users = await User.all()
    // const users = await Database.from('users').select('*') <--- we do this if we dont have a model
    return response.status(200).json(users)
  } catch (error) {
    console.error(error)
    return response.status(400).json(error.message)
  }
})

Route.post('/users', async ({ request, response }) => {
  const { email, password, first_name, last_name } = request.all()
  try {
    const result = await User.storeUser({
      email,
      first_name,
      last_name,
      password,
    })
    // await Database.insertQuery().table('users').insert({
    //   email: email,
    //   password: password,
    //   first_name: first_name,
    //   last_name: last_name,
    // })
    return response.status(200).json(result)
  } catch (error) {
    console.error(error)
    return response.status(400).json(error.message)
  }
})
Route.put('/users/:id', async ({ request, response, params }) => {
  const { id } = params
  const { first_name, last_name } = request.all()
  try {
    await Database.from('users').where('id', id).update({
      first_name: first_name,
      last_name: last_name,
    })
    return response.status(200).json('User Updated')
  } catch (error) {
    console.error(error)
    return response.status(400).json(error.message)
  }
})

Route.delete('/users/:id', async ({ response, params }) => {
  const { id } = params
  try {
    await Database.from('users').where('id', id).delete()
    return response.status(200).json('User deleted')
  } catch (error) {
    console.error(error)
    return response.status(400).json(error.message)
  }
})

Route.get('/users/raw', async ({ response }) => {
  try {
    const users = await Database.rawQuery('select * from users where id =? and first_name =? ', [
      12,
      'Sadye',
    ])
    return response.status(200).json(users)
  } catch (error) {
    console.error(error)
    return response.status(400).json(error.message)
  }
})
