import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string.optional([rules.maxLength(50), rules.trim()]),
    description: schema.string.optional([rules.maxLength(400), rules.trim()]),
    post_image: schema.file.optional({
      size: '5mb',
      extnames: ['jpg', 'png'],
    }),
    tags: schema
      .array([rules.minLength(1), rules.required()])
      .members(schema.string([rules.alpha()])),
  })

  public messages: CustomMessages = {
    'title.maxLength': 'Title can not be more than 50 characters',

    'description.maxLength': 'Description can not be more than 400 characters',

    'post_image.file': 'Please provide a valid image',

    'post_image.size': 'Image size should not be greater than 5mb',
    'post_image.extnames': 'Image should be jpg or png only',

    'tags.required': 'Tags are required',
    'tags.*.string': 'Each tag should be a valid string',
    'tags.*.alpha': 'Each tag can only contain alphabets with no white space',
  }
}
