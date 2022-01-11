import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
} from 'typeorm'

@Entity('user_profiles')
class Profile {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  full_name?: string

  @Column()
  like_be_called?: string

  @Column()
  financial_objective?: string

  @Column()
  avatar_url?: string

  @UpdateDateColumn()
  updated_at: Date
}

export { Profile }
