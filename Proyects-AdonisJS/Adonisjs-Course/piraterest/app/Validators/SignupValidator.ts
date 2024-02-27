import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SignupValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    first_name: schema.string([
      rules.required(),
      rules.maxLength(50),
      rules.trim(),
      rules.alpha(),
      rules.minLength(4),
    ]),
    last_name: schema.string([
      rules.required(),
      rules.maxLength(50),
      rules.trim(),
      rules.alpha(),
      rules.minLength(4),
    ]),
    email: schema.string([rules.required(), rules.email(),rules.trim()]),
    password: schema.string([rules.required(), rules.minLength(8)]),
  })

  public messages: CustomMessages = {
    'required': '{{ field }} is required',
    'alpha': '{{ field }} must contain letters only',
    'first_name.maxLength': 'First name should be maximum 50 characters long',
    'first_name.minLength': 'First name should be minimum 4 characters long',

    'last_name.maxLength': 'Last name should be maximum 50 characters long',
    'last_name.minLength': 'Last name should be minimum 4 characters long',

    'email.email': 'Email should be a valid email address',

    'password.minLength': 'Password should be at least 8 characters long',
  }
}
