import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'AuthController.login').as('login')
  Route.route('/signup', ['GET', 'POST'], 'AuthController.signup').as('signup')
  Route.post('/login', 'AuthController.loginPost').as('loginPost')
}).middleware('isGuest')

Route.get('/logout', 'AuthController.logout').as('logout').middleware('auth')

Route.resource('tasks', 'TasksController').middleware({
  '*': 'auth',
})
