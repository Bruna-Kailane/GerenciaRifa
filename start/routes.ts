import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'HomeController.index').as('root')
Route.get('/about', 'HomeController.sobre')

Route.get('/register', 'AuthController.register').as('auth.register')
Route.post('/register', 'AuthController.store').as('auth.store')
Route.get('/login', 'AuthController.login').as('auth.login')
Route.post('/login', 'AuthController.verify').as('auth.verify')
Route.get('/logout', 'AuthController.logout').as('auth.logout')


Route.group( () => {
    //pagina dos usuarios
    Route.get('/user', 'UsersController.index').as('rifa.users')
}).middleware('auth')