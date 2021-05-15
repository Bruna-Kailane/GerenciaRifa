import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RifasController {
    public async index({ view}: HttpContextContract) {
        return view.render('rifa/index')
    }
    
    public async show({ view }: HttpContextContract) {
        return view.render('rifa/show')
    }

    public async create({}: HttpContextContract) {
    }

    public async store({}: HttpContextContract) {
    }

    public async done({}: HttpContextContract) {
    }

    public async edit({}: HttpContextContract) {
    }

    public async update({}: HttpContextContract) {
    }

    public async destroy({}: HttpContextContract) {
    }
}
