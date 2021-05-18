import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RifasController {
    public async index({ view}: HttpContextContract) {
        return view.render('rifa/index')
    }
    
    public async show({ view }: HttpContextContract) {
        return view.render('rifa/show')
    }
}
