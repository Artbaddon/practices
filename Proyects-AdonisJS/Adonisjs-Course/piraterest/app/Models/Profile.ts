import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import { TransactionClientContract } from '@ioc:Adonis/Lucid/Database'

export default class Profile extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public first_name: string

  @column()
  public last_name: string

  @column()
  public full_name: string

  @column()
  public storage_prefix: string | null

  @column()
  public avatar_url: string | null

  @column()
  public social_auth: string

  @column()
  public user_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User, {
    localKey: 'id',
    foreignKey: 'user_id',
  })
  public user: BelongsTo<typeof User>

  public static updateOrCreateProfile = async (
    data: updateOrCreateProfileType,
    trx: TransactionClientContract
  ) => {
    await this.create(
      {
        first_name: data.first_name,
        last_name: data.last_name,
        user_id: data.user_id,
        full_name: `${data.first_name} ${data.last_name}`,
      },
      { client: trx }
    )
    return 'Profile Created'
  }
  public static getProfileById = async (id: number) => {
    const profile = await this.query()
      .where('id', id)
      .preload('user', (userQuery) => {
        userQuery.preload('posts')
      })
      .firstOrFail()
    return Promise.resolve(profile)
  }

  public static updateProfile = async (data: UpdateProfileType, trx: TransactionClientContract) => {
    const { id, first_name, last_name, password, storage_prefix } = data

    const profile = await this.query({ client: trx }).where('id', id).preload('user').firstOrFail()
    if (password) {
      profile.user.password = password
    }
    if (first_name) {
      profile.first_name = first_name
    }
    if (last_name) {
      profile.last_name = last_name
    }
    if (first_name && last_name) {
      profile.full_name = `${first_name} ${last_name}`
    }
    if (storage_prefix) {
      profile.storage_prefix = storage_prefix
      profile.avatar_url = null
    }
    await profile.save()
    return Promise.resolve('Profile Updated')
  }
}
