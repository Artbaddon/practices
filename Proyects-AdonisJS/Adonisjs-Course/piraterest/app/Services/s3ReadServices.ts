import Post from 'App/Models/Post'
import Drive from '@ioc:Adonis/Core/Drive'

class S3ReadServices {
  public static readMultipleImages = async (posts: Post[]) => {
    for (const post of posts) {
      const image_buffer = await Drive.get(post.storage_prefix)

      post.$extras.base_64_string = image_buffer.toString('base64')
    }
    return Promise.resolve(posts)
  }
  public static readSingleImage = async (post: Post) => {
    const image_buffer = await Drive.get(post.storage_prefix)
    post.$extras.base_64_string = image_buffer.toString('base64')
    return Promise.resolve(post)
  }
}

export default S3ReadServices
