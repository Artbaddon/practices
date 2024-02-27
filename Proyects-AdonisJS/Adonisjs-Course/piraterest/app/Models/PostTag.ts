import { DateTime } from 'luxon'
import { BaseModel, column, BelongsTo, belongsTo } from '@ioc:Adonis/Lucid/Orm'
import Post from './Post'
import S3ReadServices from 'App/Services/s3ReadServices'

export default class PostTag extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public post_id: number

  @column()
  public tag_id: number

  @belongsTo(() => Post, {
    localKey: 'id',
    foreignKey: 'post_id',
  })
  public post: BelongsTo<typeof Post>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  public static table = 'post_tag'

  public static findRelatedPost = async (tag_ids: number[], post_id: number) => {
    const tags = await this.query()
      .whereIn('tag_id', tag_ids)
      .andWhereNot('post_id', post_id)
      .preload('post')

    let posts = tags.map((item) => item.post)
    posts = [...new Set(posts)]

    const read_posts = await S3ReadServices.readMultipleImages(posts)
    return Promise.resolve(read_posts)
  }
  
}
