import * as yup from 'yup'

import { User, Session } from '@/app/core/users/infra/entities'

type CreateUser = {
  full_name: string
} & Pick<User, 'email' | 'password'>
type AuthenticateUser = Pick<User, 'email' | 'password'>

type UsersRepositoryProvider = {
  create(data: CreateUser): Promise<User>
  deleteById(id: string): Promise<void>
  findById(id: string): Promise<User | undefined>
  findByEmail(email: string): Promise<User | undefined>
  save(user: User): Promise<User>
}

type SessionsRepositoryProvider = {
  create(user_id: string): Promise<Session>
}

type AuthenticateResponse = {
  user: Omit<User, 'password'>
  token: string
}

const createUserSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  full_name: yup.string().required(),
})

const authenticateUserSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
})

export {
  createUserSchema,
  authenticateUserSchema,
  AuthenticateUser,
  AuthenticateResponse,
  CreateUser,
  UsersRepositoryProvider,
  SessionsRepositoryProvider,
}
