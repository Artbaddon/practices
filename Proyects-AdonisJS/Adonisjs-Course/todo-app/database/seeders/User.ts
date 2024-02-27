import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
const users = [
  {
    email: 'mrosenthaler0@odnoklassniki.ru',
    password: 'aI9\\TJYP',
    first_name: 'Mavis',
    last_name: 'Rosenthaler',
  },
  {
    email: 'hbraundt1@mapquest.com',
    password: 'eT6`NAWzRk&!S',
    first_name: 'Hermie',
    last_name: 'Braundt',
  },
  {
    email: 'klepoidevin2@abc.net.au',
    password: 'kU7~2WyO/|',
    first_name: 'Kaye',
    last_name: 'Lepoidevin',
  },
  {
    email: 'jpole3@jiathis.com',
    password: 'zO7#$Tq}/AgwFKg7',
    first_name: 'Jobi',
    last_name: 'Pole',
  },
  {
    email: 'rcorey4@utexas.edu',
    password: 'tO8$+kV|\\/}tA',
    first_name: 'Roldan',
    last_name: 'Corey',
  },
  {
    email: 'gpiers5@free.fr',
    password: 'fM8,EV$(Bzjb.',
    first_name: 'Gwenneth',
    last_name: 'Piers',
  },
  {
    email: 'fhazeldine6@xing.com',
    password: 'kV3%MXU{?Yx+EkAG',
    first_name: 'Fredrika',
    last_name: 'Hazeldine',
  },
  {
    email: 'smehmet7@psu.edu',
    password: 'rT2<i|?6qMhQnPs',
    first_name: 'Sidney',
    last_name: 'Mehmet',
  },
  {
    email: 'ddraye8@state.gov',
    password: 'aY6`8hd,',
    first_name: 'Durand',
    last_name: 'Draye',
  },
  {
    email: 'sspark9@typepad.com',
    password: "yM2'}rxrqb,",
    first_name: 'Sadye',
    last_name: 'Spark',
  },
  {
    email: 'eelderidgea@paginegialle.it',
    password: 'gU4<2w$ol',
    first_name: 'Emlen',
    last_name: 'Elderidge',
  },
  {
    email: 'fbacupb@wunderground.com',
    password: 'nQ4=>b1A,',
    first_name: 'Farly',
    last_name: 'Bacup',
  },
  {
    email: 'mmacshanec@npr.org',
    password: 'dE4?MhaD8',
    first_name: 'Mirabella',
    last_name: 'MacShane',
  },
  {
    email: 'cbownded@washington.edu',
    password: 'iU8}70_<|P2gL7',
    first_name: 'Chucho',
    last_name: 'Bownde',
  },
  {
    email: 'cfozzarde@berkeley.edu',
    password: "rR9!jOs'5xe&T6Z",
    first_name: 'Caron',
    last_name: 'Fozzard',
  },
  {
    email: 'kbristowef@nba.com',
    password: 'cY4`)2e=v',
    first_name: 'Kaspar',
    last_name: 'Bristowe',
  },
  {
    email: 'tmaycockg@latimes.com',
    password: "jF5}xI'?3_y",
    first_name: 'Toddy',
    last_name: 'Maycock',
  },
  {
    email: 'vrosentholerh@dailymotion.com',
    password: 'tP4,rj},##Z#Q',
    first_name: 'Vina',
    last_name: 'Rosentholer',
  },
  {
    email: 'oproughteni@slate.com',
    password: 'kC6%t@<*,O>s%|N',
    first_name: 'Onfre',
    last_name: 'Proughten',
  },
  {
    email: 'ljanskyj@microsoft.com',
    password: 'yE8|qY,7jmCGf#',
    first_name: 'Lefty',
    last_name: 'Jansky',
  },
]
export default class extends BaseSeeder {
  public async run() {
    try {
      await Database.table('users').multiInsert(users)
      console.info('Users seeded')
    } catch (error) {
      console.info(error)
    }
  }
}
