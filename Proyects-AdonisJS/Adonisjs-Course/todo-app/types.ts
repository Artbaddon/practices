interface StoreTaskType {
  title: string
  description: string
  priority: string
  user_id: number
}

interface UpdateTaskType {
  id: number
  title?: string
  description?: string
  priority?: string
}
