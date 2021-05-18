import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'RifasController.index')
Route.get('/about', 'RifasController.show')