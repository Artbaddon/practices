interface CreateUserType {
  first_name: string
  last_name: string
  email: string
  password: string
}

interface updateOrCreateProfileType {
  first_name: string
  last_name: string
  user_id: number
}

interface CreateOrFind0AuthUserType {
  first_name: string
  last_name: string
  email: string
  avatar_url?: string
  social_auth?: string
}
interface UpdateProfileType {
  id: number
  first_name?: string
  last_name?: string
  password?: string
  storage_prefix?: string
}

interface StorePostType {
  title: string
  description: string
  user_id: number
  storage_prefix: string
  tags: string[]
}

interface UpdatePostType{
  id:number
  title?:string
  description?:string
  storage_prefix?: string
  tags: string[]
}