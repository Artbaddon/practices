import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'

export default class AuthController {
  public signup = async ({ view, request, session, response }: HttpContextContract) => {
    switch (request.method()) {
      case 'POST':
        const PostSchema = schema.create({
          first_name: schema.string([
            rules.required(),
            rules.alpha(),
            rules.trim(),
            rules.maxLength(50),
            rules.minLength(4),
          ]),
          last_name: schema.string([
            rules.required(),
            rules.alpha(),
            rules.trim(),
            rules.maxLength(50),
            rules.minLength(4),
          ]),
          email: schema.string([rules.required(), rules.email(), rules.trim()]),
          password: schema.string([rules.required(), rules.trim(), rules.minLength(8)]),
        })
        const payload = await request.validate({
          schema: PostSchema,
          messages: {
            'first_name.required': 'First name is required',
            'first_name.alpha': 'First name must contain letters only',
            'first_name.maxLength': 'First name should be maximum 50 characters long',
            'first_name.minLength': 'First name should be minimum 4 characters long',

            'last.required': 'Last name is required',
            'last_name.alpha': 'Last name must contain letters only',
            'last_name.maxLength': 'Last name should be maximum 50 characters long',
            'last_name.minLength': 'Last name should be minimum 4 characters long',

            'email.required': 'Email is requiered',
            'email.email': 'Email should be a valid email address',

            'password.required': 'Password is required',
            'password.minLength': 'Password should be at least 8 characters long',
          },
        })
        try {
          const result = await User.storeUser({
            email: payload.email,
            first_name: payload.first_name,
            last_name: payload.last_name,
            password: payload.password,
          })
          session.flash('success', result)
          return response.redirect().toPath('/')
        } catch (error) {
          console.error(error)
          session.flash('error', error.message)
          return response.redirect().back()
        }

        console.log(payload)

        break

      // GET
      default:
        const html = await view.render('auth/signup')
        return html
    }
  }

  public login = async ({ view }: HttpContextContract) => {
    const html = await view.render('auth/login')
    return html
  }

  public loginPost = async ({ request, response, session, auth }: HttpContextContract) => {
    const PostSchema = schema.create({
      email: schema.string([rules.required(), rules.email(), rules.trim()]),
      password: schema.string([rules.required(), rules.trim(), rules.minLength(8)]),
    })
    const payload = await request.validate({
      schema: PostSchema,
      messages: {
        'email.required': 'Email is requiered',
        'email.email': 'Email should be a valid email address',

        'password.required': 'Password is required',
        'password.minLength': 'Password should be at least 8 characters long',
      },
    })
    try {
      await auth.use('web').attempt(payload.email, payload.password)
      session.flash('success', 'Logged in')
      return response.redirect().toRoute('tasks.index')
    } catch (error) {
      console.log(error)
      session.flash('error', error.message)
      return response.redirect().back()
    }
  }

  public logout = async ({ auth, response }: HttpContextContract) => {
    await auth.use('web').logout()
    return response.redirect().toRoute('login')
  }
}
