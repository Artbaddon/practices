// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Product from 'App/Models/Product'

export default class ProductsController {
  public async index({ response }) {
    const products = await Product.all()

    return response.ok(products)
  }
}
