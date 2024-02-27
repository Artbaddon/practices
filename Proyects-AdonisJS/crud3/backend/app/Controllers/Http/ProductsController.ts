import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

import Product from 'App/Models/Product'

export default class ProductsController {
  public async index({}: HttpContextContract) {
    const products = await Product.all()
    return products
  }
  public async show({ params }) {
    const product = await Product.find(params.id)
    if (product) {
      return product
    }
  }
  public async store({ request }: HttpContextContract) {
    const validationSchema = schema.create({
      name: schema.string({ trim: true }, [rules.maxLength(100), rules.regex(/^[a-zA-Z ]*$/)]),
      description: schema.string({ trim: true }, [rules.maxLength(255)]),
      price: schema.number([rules.unsigned()]),
    })

    const validatedData = await request.validate({
      schema: validationSchema,
      messages: {
        'name.required': 'Enter a name',
        'name.maxLength': 'Name can not exceed 100 characters',
        'description.required': 'Enter a description',
        'description.maxLength': 'Description can not exceed 255 characters',
        'price.maxLength': 'Price too big',
        'price.required': 'Enter a price',
      },
    })
    const product = new Product()
    product.name = validatedData.name
    product.description = validatedData.description
    product.price = validatedData.price
    await product.save()

    return product
  }
  public async update({ request, params }: HttpContextContract) {
    const product = await Product.find(params.id)
    if (product) {
      const validationSchema = schema.create({
        name: schema.string({ trim: true }, [rules.maxLength(100), rules.regex(/^[a-zA-Z ]*$/)]),
        description: schema.string({ trim: true }, [rules.maxLength(255)]),
        price: schema.number([rules.unsigned()]),
      })

      const validatedData = await request.validate({
        schema: validationSchema,
        messages: {
          'name.required': 'Enter a name',
          'name.maxLength': 'Name can not exceed 100 characters',
          'description.required': 'Enter a description',
          'description.maxLength': 'Description can not exceed 255 characters',
          'price.maxLength': 'Price too big',
          'price.required': 'Enter a price',
        },
      })
      product.name = validatedData.name
      product.description = validatedData.description
      product.price = validatedData.price
      if (await product.save()) {
        return product
      }
      return
    }
    return
  }
  public async destroy({ params, response }: HttpContextContract) {
    const product = await Product.find(params.id)
    if (product) {
      await product.delete()
    }

    return response
  }
}
