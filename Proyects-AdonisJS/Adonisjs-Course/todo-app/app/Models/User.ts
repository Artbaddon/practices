import { DateTime } from 'luxon'
import { BaseModel, HasMany, beforeSave, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Task from './Task'
import Hash from '@ioc:Adonis/Core/Hash'

interface StoreUserType {
  email: string
  first_name: string
  last_name: string
  password: string
}

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public first_name: string

  @column()
  public last_name: string

  @column()
  public remember_me_token: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @hasMany(() => Task, {
    localKey: 'id',
    foreignKey: 'user_id',
  })
  public tasks: HasMany<typeof Task>

  
  public static storeUser = async (data: StoreUserType) => {
    const exists = await this.findBy('email', data.email)
    if (exists) {
      return Promise.reject(new Error('User with this email already exists'))
    }
    await this.create({
      email: data.email,
      first_name: data.first_name,
      last_name: data.last_name,
      password: data.password,
    })

    return Promise.resolve('User created')
  }

  public static getAllTasksByUserId = async (id: number) => {
    const user = await this.query().where('id', id).preload('tasks').firstOrFail()
    return Promise.resolve(user)
  }
}
