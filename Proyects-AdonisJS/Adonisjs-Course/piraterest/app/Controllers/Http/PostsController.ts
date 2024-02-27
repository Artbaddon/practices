import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PostCreateValidator from 'App/Validators/PostCreateValidator'
import PostUpdateValidator from 'App/Validators/PostUpdateValidator'
import { cuid } from '@ioc:Adonis/Core/Helpers'
import path from 'path'
import Database from '@ioc:Adonis/Lucid/Database'
import Post from 'App/Models/Post'
import Env from '@ioc:Adonis/Core/Env'
import User from 'App/Models/User'
import PostTag from 'App/Models/PostTag'
import Drive from '@ioc:Adonis/Core/Drive'

export default class PostsController {
  public index = async ({ session, view, auth, response }: HttpContextContract) => {
    try {
      const posts = await User.findPostByUserId(auth.user!.id)
      const html = await view.render('posts/index', { posts })
      return html
    } catch (error) {
      console.error(error)
      session.flash({ error: error.message })
      return response.redirect().back()
    }
  }
  public create = async ({ view }: HttpContextContract) => {
    const html = await view.render('posts/create')
    return html
  }

  public store = async ({ request, auth, session, response }) => {
    const payload = await request.validate(PostCreateValidator)

    const user_dir = String(auth.user!.id)
    const new_image_name = `${cuid()}.${payload.post_image.extname}`
    const storage_prefix = path.posix.join(user_dir.toString(), new_image_name)

    const trx = await Database.transaction()

    try {
      await Post.storePost(
        {
          description: payload.description,
          tags: payload.tags,
          storage_prefix: storage_prefix,
          title: payload.title,
          user_id: auth.user!.id,
        },
        trx
      )
      await payload.post_image.moveToDisk(user_dir, { name: new_image_name }, Env.get('DRIVE_DISK'))

      await trx.commit()
      session.flash({ success: 'Post created' })
      return response.redirect().toRoute('posts.index')
    } catch (error) {
      await trx.rollback()
      console.error(error)
      session.flash({ error: error.message })
      return response.redirect().back()
    }
  }
  public show = async ({ view, params, session, response }: HttpContextContract) => {
    const { id } = params
    try {
      const post = await Post.getPostById(id)
      const posts = await PostTag.findRelatedPost(
        post.tags.map((tag) => tag.id),
        id
      )

      const html = view.render('posts/show', { post, posts })
      return html
    } catch (error) {
      console.error(error)
      session.flash({ error: error.message })
      return response.redirect().toRoute('posts.index')
    }
  }

  public edit = async ({ view, params, bouncer, session, response }: HttpContextContract) => {
    const { id } = params
    try {
      const post = await Post.getPostById(id)
      await bouncer.with('PostPolicy').authorize('update', post)
      let img_base64 = ''
      if (post.storage_prefix) {
        img_base64 = (await Drive.get(post.storage_prefix)).toString('base64')
      }
      const html = await view.render('posts/edit', { post, img_base64 })
      return html
    } catch (error) {
      console.error(error)
      session.flash({ error: error.message })
      return response.redirect().toRoute('home')
    }
  }
  
  public update = async ({
    auth,
    bouncer,
    params,
    request,
    session,
    response,
  }: HttpContextContract) => {
    const { id } = params

    const payload = await request.validate(PostUpdateValidator)
    let post: Post

    try {
      post = await Post.findOrFail(id)
    } catch (error) {
      console.error(error)
      session.flash({ error: 'Post not found' })
      return response.redirect().toRoute('posts.index')
    }

    try {
      await bouncer.with('PostPolicy').authorize('update', post)
    } catch (error) {
      console.error(error)
      session.flash({ error: error.message })
      return response.redirect().toRoute('posts.index')
    }

    let user_dir = auth.user!.id
    const newLocal = ''
    let storage_prefix = newLocal
  

    let new_image_name = ''

    if (payload.post_image) {
      new_image_name = `${cuid()}.${payload.post_image.extname}`
      storage_prefix = path.posix.join(user_dir.toString(), new_image_name)
    }

    const trx = await Database.transaction()

    try {
      const result = await Post.updatePost(
        {
          id,
          title: payload.title,
          description: params.description,
          tags: payload.tags,
          storage_prefix: params.storage_prefix,
        },
        trx
      )
      if (payload.post_image) {
        //Uploading new image
        await payload.post_image.moveToDisk(
          user_dir.toString(),
          { name: new_image_name },
          Env.get('DRIVE_DISK')
        )
        //delete old image
        if (post.storage_prefix) {
          await Drive.delete(post.storage_prefix)
        }
      }
      await trx.commit()
      session.flash({ success: result })
      return response.redirect().toRoute('posts.show', { id })
    } catch (error) {
      await trx.rollback()
      console.error(error)
      session.flash({ error: error.message })
      return response.redirect().toRoute('home')
    }
  }

  public destroy = async ({ params, response, session, bouncer }: HttpContextContract) => {
    const { id } = params
    const trx = await Database.transaction()

    let post: Post
    try {
      post = await Post.findOrFail(id, { client: trx })
    } catch (error) {
      console.error(error)
      session.flash({ error: 'Post Not Found' })
      return response.redirect().toRoute('posts.index')
    }
    try {
      await bouncer.with('PostPolicy').authorize('delete', post)
    } catch (error) {
      console.error(error)
      session.flash({ error: error.message })
      return response.redirect().toRoute('posts.index')
    }
    try {
      await post.delete()

      await Drive.delete(post.storage_prefix)

      await trx.commit()
      session.flash({ success: 'Post Deleted' })
      return response.redirect().toRoute('posts.index')
    } catch (error) {
      await trx.rollback()

      console.error(error)
      session.flash({ error: error.message })
      return response.redirect().toRoute('posts.index')
    }
  }
  public download = async ({ params, response, session }: HttpContextContract) => {
    const { id } = params
    let post: Post
    try {
      post = await Post.findOrFail(id)
      const { size } = await Drive.getStats(post.storage_prefix)

      response.type(path.extname(post.storage_prefix))
      response.header('content-length', size)

      response.header(
        'content-disposition',
        `attachment; filename=${path.basename(post.storage_prefix)}`
      )
      return response.stream(await Drive.getStream(post.storage_prefix))
    } catch (error) {
      console.error(error)
      session.flash({ error: 'Post Not Found' })
      return response.redirect().toRoute('posts.index')
    }
  }
  
}
