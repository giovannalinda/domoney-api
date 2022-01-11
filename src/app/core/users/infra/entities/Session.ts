import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm'

import { User } from '.'

@Entity('sessions')
class Session {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  @OneToMany(() => User, (user) => user)
  user_id: string

  @Column()
  active: boolean

  @CreateDateColumn()
  created_at: Date
}

export { Session }
