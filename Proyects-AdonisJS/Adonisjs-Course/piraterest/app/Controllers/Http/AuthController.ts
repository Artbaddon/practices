import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import SignupValidator from 'App/Validators/SignupValidator'
import User from 'App/Models/User'

export default class AuthController {
  public signup = async ({ view, request, session, response }: HttpContextContract) => {
    switch (request.method()) {
      case 'POST':
        const payload = await request.validate(SignupValidator)

        try {
          await User.createUser(payload)
          session.flash({ success: 'User Created' })
          return response.redirect().toRoute('login')
        } catch (error) {
          session.flash({ error: error.message })
          console.error(error)
          return response.redirect().back()
        }
        

      default:
        const html = await view.render('auth/signup')
        return html
    }
  }

  public login = async ({ request, view, auth, session, response }: HttpContextContract) => {
    switch (request.method()) {
      case 'POST':
        const postSchema = schema.create({
          email: schema.string([rules.required(), rules.email(), rules.trim()]),
          password: schema.string([rules.required(), rules.minLength(8)]),
        })
        const payload = await request.validate({
          schema: postSchema,
          messages: {
            'required': '{{ field }} is required',
            'alpha': '{{ field }} must contain letters only',
            'email.email': 'Email should be a valid email address',
            'password.minLength': 'Password should be at least 8 characters long',
          },
        })

        //login
        try {
          await auth.use('web').attempt(payload.email, payload.password)
          session.flash({ success: 'Logged in' })
          return response.redirect().toRoute('home')
        } catch (error) {
          console.error(error)
          session.flash({ error: error.message })
          return response.redirect().toRoute('login')
        }
    
      default:
        const html = await view.render('auth/login')
        return html
    }
  }

  public logout = async ({ auth, session, response }: HttpContextContract) => {
    try {
      await auth.use('web').logout()
      session.flash({ success: 'Logged Out' })
      return response.redirect().toRoute('login')
    } catch (error) {
      console.error(error)
      session.flash({ error: error.message })
      return response.redirect().back()
    }
  }
  public googleRedirect = async ({ ally }: HttpContextContract) => {
    return ally.use('google').redirect()
  }
  public googleCallback = async ({ ally, session, response, auth }) => {
    const google = ally.use('google')
    /**
     * User has explicitly denied the login request
     */
    if (google.accessDenied()) {
      session.flash({ error: 'Access was denied' })
      return response.redirect().toRoute('login')
    }
    /**
     * Unable to verify the CSRF state
     */
    if (google.stateMisMatch()) {
      session.flash({ error: 'Request expired. Retry again' })
      return response.redirect().toRoute('login')
    }

    /**
     * There was an unknown error during the redirect
     */
    if (google.hasError()) {
      session.flash({ error: google.getError()! })
      return response.redirect().toRoute('login')
    }
    /**
     * Finally, access the user
     */
    const authUser = await google.user()
    try {
      const user = await User.createOrFind0AuthUser({
        email: authUser.email!,
        first_name: authUser.original.given_name,
        last_name: authUser.original.family_name,
        avatar_url: authUser.avatarUrl ? authUser.avatarUrl : undefined,
        social_auth: 'google',
      })
      await auth.use('web').login(user)
      session.flash({ success: 'Logged in' })
      console.log(authUser)
      return response.redirect().toRoute('home')
    } catch (error) {
      console.error(error)
      session.flash({ error: error })
    }
  }
  public githubRedirect = async ({ ally }: HttpContextContract) => {
    return ally.use('github').redirect()
  }
  public githubCallback = async ({ ally, session, response, auth }) => {
    const github = ally.use('github')
    /**
     * User has explicitly denied the login request
     */
    if (github.accessDenied()) {
      session.flash({ error: 'Access was denied' })
      return response.redirect().toRoute('login')
    }
    /**
     * Unable to verify the CSRF state
     */
    if (github.stateMisMatch()) {
      session.flash({ error: 'Request expired. Retry again' })
      return response.redirect().toRoute('login')
    }

    /**
     * There was an unknown error during the redirect
     */
    if (github.hasError()) {
      session.flash({ error: github.getError()! })
      return response.redirect().toRoute('login')
    }
    /**
     * Finally, access the user
     */
    const authUser = await github.user()
    try {
      const user = await User.createOrFind0AuthUser({
        email: authUser.email!,
        first_name: authUser.original.name.split(' ')[0],
        last_name: authUser.original.name.split(' ')[1],
        avatar_url: authUser.avatarUrl ? authUser.avatarUrl : undefined,
        social_auth: 'github',
      })
      await auth.use('web').login(user)
      session.flash({ success: 'Logged in' })
      console.log(user)
      return response.redirect().toRoute('home')
    } catch (error) {
      console.error(error)
      session.flash({ error: error })
    }
  }

  
}
