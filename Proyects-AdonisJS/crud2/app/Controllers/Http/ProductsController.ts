import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Product from 'App/Models/Product'
//import { HttpContext } from '@adonisjs/core/build/standalone'

export default class ProductsController {
  public async index({ view }: HttpContextContract) {
    const products = await Product.all()
    return view.render('products.index', { products })
  }
  public create({ view }: HttpContextContract) {
    return view.render('products.create')
  }
  public async store({ request, response, session }: HttpContextContract) {
    const validationSchema = schema.create({
      name: schema.string({ trim: true }, [rules.maxLength(100), rules.regex(/^[a-zA-Z ]*$/)]),
      description: schema.string({ trim: true }, [rules.maxLength(255)]),
      price: schema.number([rules.unsigned()]),
    })

    const validatedDate = await request.validate({
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
    await Product.create({
      name: validatedDate.name,
      description: validatedDate.description,
      price: validatedDate.price,
    })

    session.flash('notification', 'Product added')

    return response.redirect().toRoute('products.index')
  }

  public async edit({ view, params }) {
    const product = await Product.find(params.id)
    return view.render('products.edit', { product })
  }

 

  public async update({ params, request, response,session }: HttpContextContract) {
    const product = await Product.find(params.id)
    const validationSchema = schema.create({
      name: schema.string({ trim: true }, [rules.maxLength(100), rules.regex(/^[a-zA-Z ]*$/)]),
      description: schema.string({ trim: true }, [rules.maxLength(255)]),
      price: schema.number([rules.unsigned()]),
    })

    const validatedDate = await request.validate({
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
    
    if (product) {
      product.merge({
        name: validatedDate.name,
      description: validatedDate.description,
      price: validatedDate.price,
      })
      await product.save()
    }
    session.flash('notification','Product Edited')
    return response.redirect().toRoute('products.index')
  }

  
  public async destroy({ params, response ,session}: HttpContextContract) {
    const product = await Product.find(params.id)
    if (product) {
      await product.delete()
    }
    session.flash('notification','Product Deleted')
    return response.redirect().toRoute('products.index')
  }
}
