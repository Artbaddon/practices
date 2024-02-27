import { DateTime } from 'luxon'
import {
  BaseModel,
  hasMany,
  HasMany,
  hasOne,
  HasOne,
  column,
  beforeSave,
} from '@ioc:Adonis/Lucid/Orm'
import Profile from 'App/Models/Profile'
import Database from '@ioc:Adonis/Lucid/Database'
import Hash from '@ioc:Adonis/Core/Hash'
import Post from './Post'
import S3ReadServices from 'App/Services/s3ReadServices'
export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column()
  public password: string | null

  @column()
  public remember_me_token: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => Profile, {
    localKey: 'id',
    foreignKey: 'user_id',
  })
  public profile: HasOne<typeof Profile>

  @hasMany(() => Post, {
    foreignKey: 'user_id',
  })
  public posts: HasMany<typeof Post>
  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password && user.password) {
      user.password = await Hash.make(user.password)
    }
    
  }

  public static createUser = async (data: CreateUserType) => {
    //1. Create transaction
    const trx = await Database.transaction()

    //2. Unique email check
    const exists = await this.findBy('email', data.email)
    if (exists) {
      return Promise.reject(new Error('User with this email already exists'))
    }

    //3. Insertion Query for user
    try {
      const createdUser = await User.create(
        { email: data.email, password: data.password },
        { client: trx }
      )
      //4. Insertion the query for profile
      await Profile.updateOrCreateProfile(
        {
          first_name: data.first_name,
          last_name: data.last_name,
          user_id: createdUser.id,
        },
        trx
      )
      //5. Commit the transaction

      await trx.commit()
    } catch (error) {
      await trx.rollback()

      console.error(error)
      return Promise.reject(error)
    }
  }

  public static createOrFind0AuthUser = async (data: CreateOrFind0AuthUserType) => {
    let user = await this.query().where('email', data.email).preload('profile').first()

    if (user) {
      if (user.profile.social_auth !== data.social_auth) {
        return Promise.reject(new Error('User already exists with this email'))
      }
    } else {
      const trx = await Database.transaction()
      try {
        //Create User
        user = await this.create(
          {
            email: data.email,
          },
          { client: trx }
        )
        //Create Profile
        await Profile.create(
          {
            first_name: data.first_name,
            last_name: data.last_name,
            full_name: `${data.first_name} ${data.last_name}`,
            user_id: user.id,
            social_auth: data.social_auth,
            avatar_url: data.avatar_url,
          },
          { client: trx }
        )
        await trx.commit()
      } catch (error) {
        await trx.rollback()

        console.log(error)
        return Promise.reject(new Error(error.message))
      }
    }
    return Promise.resolve(user)
  }
  public static findPostByUserId = async (user_id: number) => {
    const user = await this.query().where('id', user_id).preload('posts').firstOrFail()

    const posts = await S3ReadServices.readMultipleImages(user.posts)

    return Promise.resolve(posts)
  }
}
