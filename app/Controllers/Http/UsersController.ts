import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
    public async index({ view}: HttpContextContract) {
        return view.render('rifa/index')
    }
}
