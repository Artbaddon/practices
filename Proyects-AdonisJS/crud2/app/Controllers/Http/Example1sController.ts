import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

//import { HttpContext } from '@adonisjs/core/build/standalone'

export default class Example1sController {
  public home({ view }: HttpContextContract) {
    return view.render('welcome')
  }
  public name({ view, params }: HttpContextContract) {
    const name = params.name

    return view.render('hello', { name })
  }
  public hw({ view }: HttpContextContract) {
    return view.render('hw')
  }
}
