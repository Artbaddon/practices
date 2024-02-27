import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { TransactionClientContract } from '@ioc:Adonis/Lucid/Database'

export default class Tag extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  public static storeTag = async (tags: string[], trx: TransactionClientContract) => {
    const tag_ids: number[] = []

    for (const tag of tags) {
      const create_tag = await this.firstOrCreate({ title: tag }, { title: tag }, { client: trx })
      tag_ids.push(create_tag.id)
    }

    return Promise.resolve(tag_ids)
  }
}
