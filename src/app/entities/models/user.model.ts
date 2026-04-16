export interface IUserModel {
  id: string
  email: string
  password: string
  created_at: string
  updated_at: string
  role: 'admin' | 'user'
  username: string
}
