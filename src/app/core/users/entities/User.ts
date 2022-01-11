import {
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm'

@Entity('users')
export class User {
  @PrimaryColumn('uuid')
  id: string

  @Column()
  email: string

  @Column()
  password: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
