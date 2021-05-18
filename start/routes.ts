import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'RifasController.index').as('root')
Route.get('/about', 'RifasController.show')

Route.get('/register', 'AuthController.register').as('auth.register')
Route.post('/register', 'AuthController.store').as('auth.store')
Route.get('/login', 'AuthController.login').as('auth.login')
Route.post('/login', 'AuthController.verify').as('auth.verify')
Route.get('/logout', 'AuthController.logout').as('auth.logout')