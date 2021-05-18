import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RifasController {
    public async index({ view}: HttpContextContract) {
        return view.render('home/index')
    }
    
    public async sobre({ view }: HttpContextContract) {
        return view.render('home/sobre')
    }
}
