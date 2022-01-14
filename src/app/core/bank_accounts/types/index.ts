import { BankAccount } from '@/app/core/bank_accounts/infra/entities/BankAccount'

export type CreateBankAccount = Omit<
  BankAccount,
  'id' | 'created_at' | 'updated_at'
>

export type BankAccountsRepositoryProvider = {
  create: (data: CreateBankAccount) => Promise<BankAccount>
  findAllByUserId: (user_id: string) => Promise<BankAccount[]>
}
