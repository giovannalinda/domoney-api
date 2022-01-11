import {
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm'

import { Exclude } from 'class-transformer'

@Entity('users')
export class User {
  @PrimaryColumn('uuid')
  id: string

  @Column()
  email: string

  @Exclude()
  @Column()
  password: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
