import { DateTime } from 'luxon'
import {
  BaseModel,
  column,
  belongsTo,
  BelongsTo,
  manyToMany,
  ManyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Tag from './Tag'
import { TransactionClientContract } from '@ioc:Adonis/Lucid/Database'
import S3ReadServices from 'App/Services/s3ReadServices'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public description: string

  @column()
  public user_id: number

  @column()
  public storage_prefix: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User, {
    localKey: 'id',
    foreignKey: 'user_id',
  })
  public user: BelongsTo<typeof User>

  @manyToMany(() => Tag, {
    localKey: 'id',
    pivotForeignKey: 'post_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'tag_id',
  })
  public tags: ManyToMany<typeof Tag>

public static storePost = async (data: StorePostType, trx: TransactionClientContract) => {
    const post = await this.create(
      {
        title: data.title,
        description: data.description,
        user_id: data.user_id,
        storage_prefix: data.storage_prefix,
      },
      { client: trx }
    )
    const created_tag_ids = await Tag.storeTag(data.tags, trx)

    post.related('tags').attach(created_tag_ids)

    return Promise.resolve('Post Created')
  }
  
  public static getPostById = async (post_id: number) => {
    let post = await this.query()
      .where('id', post_id)
      .preload('user', (userQuery) => {
        userQuery.preload('profile')
      })
      .preload('tags')
      .firstOrFail()

    post = await S3ReadServices.readSingleImage(post)
    return Promise.resolve(post)
  }
  public static updatePost = async (data: UpdatePostType, trx: TransactionClientContract) => {
    let post = await this.query({ client: trx }).where('id', data.id).first()
    if (!post) {
      return Promise.reject(new Error('Post Not Found'))
    }

    if (data.title) {
      post.title = data.title
    }

    if (data.description) {
      post.description = data.description
    }

    if (data.storage_prefix) {
      post.storage_prefix = data.storage_prefix
    }

    const tag_ids = await Tag.storeTag(data.tags, trx)

    await post.related('tags').sync(tag_ids)
    await post.save()
    return Promise.resolve('Post Updated')
  }
}
