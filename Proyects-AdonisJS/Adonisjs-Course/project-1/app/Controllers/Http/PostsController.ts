import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {
  public index = async ({ response, view }: HttpContextContract) => {
    const post = {
      id: 1,
      name: 'Dave',
      hidden: false,
    }
    const posts = [
      {
        id: 1,
        name: 'PC',
        hidden: false,
      },
      {
        id: 2,
        name: 'Mouse',
        hidden: false,
      },
      {
        id: 3,
        name: 'I5',
        hidden: false,
      },
      {
        id: 4,
        name: 'Keyboard',
        hidden: false,
      },
      {
        id: 5,
        name: 'headset',
        hidden: false,
      },
    ]
    const food = {
      ketchup: '5 tbsp',
      mustard: '1 tbsp',
      pickle: '0 tbps',
    }
    const html = await view.render('posts/index', { title: 'Post index page', post, posts, food })
    console.log(html)
    return html
  }
}
