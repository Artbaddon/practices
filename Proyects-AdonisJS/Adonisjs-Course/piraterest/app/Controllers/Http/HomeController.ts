import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'
import S3ReadServices from 'App/Services/s3ReadServices'

export default class HomeController {
  public index = async ({ view, session, request, response }: HttpContextContract) => {
    const { search } = request.all()
    try {
      const fetched_posts = await Post.query().if(
        typeof search === 'string' || search instanceof String,
        (queryBuilder) => {
          queryBuilder.where('title', 'like', `%${search}%`)
          queryBuilder.orWhere('description', 'like', `%${search}%`)
        }
      )

      const posts = await S3ReadServices.readMultipleImages(fetched_posts)

      const html = await view.render('welcome', { posts })
      return html
    } catch (error) {
      console.error(error)
      session.flash({ error: error.message })
      return response.redirect().back()
    }
  }
}
