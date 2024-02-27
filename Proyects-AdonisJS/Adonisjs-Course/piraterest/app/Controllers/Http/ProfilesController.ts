import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Profile from 'App/Models/Profile'
import ProfileUpdateValidator from 'App/Validators/ProfileUpdateValidator'
import { cuid } from '@ioc:Adonis/Core/Helpers'
import path from 'path'
import Database from '@ioc:Adonis/Lucid/Database'
import Env from '@ioc:Adonis/Core/Env'
import Drive from '@ioc:Adonis/Core/Drive'
import S3ReadServices from 'App/Services/s3ReadServices'

export default class ProfilesController {
  public show = async ({ view, params, response, session }: HttpContextContract) => {
    const { id } = params
    try {
      const fetched_profile = await Profile.getProfileById(id)
      let img_base64 = ''

      let posts: any = fetched_profile.user.posts
      posts = await S3ReadServices.readMultipleImages(posts)

      if (fetched_profile.storage_prefix) {
        img_base64 = (await Drive.get(fetched_profile.storage_prefix)).toString('base64')
      }
      const html = await view.render('profiles/show', { fetched_profile, img_base64, posts })
      return html
    } catch (error) {
      console.error(error)
      session.flash({ error: error.message })
      return response.redirect().toRoute('home')
    }
  }
  public edit = async ({ view, params, response, session, bouncer }: HttpContextContract) => {
    const { id } = params
    try {
      const fetched_profile = await Profile.getProfileById(id)

      await bouncer.with('ProfilePolicy').authorize('update', fetched_profile)

      let img_base64 = ''

      if (fetched_profile.storage_prefix) {
        img_base64 = (await Drive.get(fetched_profile.storage_prefix)).toString('base64')
      }
      const html = await view.render('profiles/edit', { fetched_profile, img_base64 })
      return html
    } catch (error) {
      console.error(error)
      session.flash({ error: error.message })
      return response.redirect().toRoute('home')
    }
  }
  public update = async ({
    auth,
    params,
    request,
    response,
    session,
    bouncer,
  }: HttpContextContract) => {
    const { id } = params

    const payload = await request.validate(ProfileUpdateValidator)
    console.log(payload)
    let profile: Profile
    try {
      profile = await Profile.findOrFail(id)
    } catch (error) {
      console.error(error)
      session.flash({ error: 'Profile not found' })
      return response.redirect().toRoute('home')
    }

    try {
      await bouncer.with('ProfilePolicy').authorize('update', profile)
    } catch (error) {
      console.error(error)
      session.flash({ error: error.message })
      return response.redirect().toRoute('home')
    }

    //User directory

    let user_dir = auth.user!.id

    let storage_prefix = ''

    let new_image_name = ''

    if (payload.post_image) {
      new_image_name = `${cuid()}.${payload.post_image.extname}`
      storage_prefix = path.posix.join(user_dir.toString(), new_image_name)
    }

    const trx = await Database.transaction()

    try {
      await Profile.updateProfile({ id, storage_prefix, ...payload }, trx)
      if (payload.post_image) {
        //Uploading new image
        await payload.post_image.moveToDisk(
          user_dir.toString(),
          { name: new_image_name },
          Env.get('DRIVE_DISK')
        )
        //delete old image
        if (profile.storage_prefix) {
          await Drive.delete(profile.storage_prefix)
        }
      }
      await trx.commit()
    } catch (error) {
      await trx.rollback()

      //deleting uploaded image in case of query fails or image deletion fails
      const uploaded = await Drive.exists(storage_prefix)
      if (uploaded) {
        await Drive.delete(storage_prefix)
      }
      console.error(error)
      session.flash({ error: error.message })
      return response.redirect().toRoute('profile.show', { id })
    }

    if (payload.password) {
      session.flash({ success: 'Logged out' })
      return response.redirect().toRoute('logout')
    } else {
      session.flash({ sucess: 'Profile Updated' })
      return response.redirect().toRoute('profile.show', { id })
    }
  }
}
