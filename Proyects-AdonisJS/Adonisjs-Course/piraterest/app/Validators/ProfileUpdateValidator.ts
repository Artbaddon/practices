import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProfileUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    first_name: schema.string.optional([
      rules.maxLength(50),
      rules.minLength(4),
      rules.alpha(),
      rules.trim(),
    ]),
    last_name: schema.string.optional([
      rules.maxLength(50),
      rules.minLength(4),
      rules.alpha(),
      rules.trim(),
    ]),
    password: schema.string.optional([rules.minLength(8)]),
    post_image: schema.file.optional({
      size: '5mb',
      extnames: ['jpg', 'png'],
    }),
  })

  public messages: CustomMessages = {
    'first_name.alpha': 'First name must contain alphabets only',
    'first_name.maxLength': 'First name can only contain 50 characters',
    'first_name.minLength': 'First name must contain more than 4 characters',

    'last_name.alpha': 'Last name must contain alphabets only',
    'last_name.maxLength': 'Last name can only contain 50 characters',
    'last_name.minLength': 'Last name must contain more than 4 characters',

    'password': 'Password must be 8 characters or more',

    'post_image.file': 'Please provide a valid image',
    'post_image.size': 'Image size should not be breater than 5mb',
    'post_image.extnames': 'Image should be jpg or png only',
  }
}
