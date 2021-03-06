import { Joi } from 'celebrate'
import { BankAccount } from '@/app/core/bank_accounts/infra/entities/BankAccount'

export type CreateBankAccount = Omit<
  BankAccount,
  'id' | 'created_at' | 'updated_at'
>

export type BankAccountsRepositoryProvider = {
  create: (data: CreateBankAccount) => Promise<BankAccount>
  findAllByUserId: (user_id: string) => Promise<BankAccount[]>
  findByName: (
    name: string,
    user_id: string,
  ) => Promise<BankAccount | undefined>
}

export enum BankAccountType {
  CHECKING_ACCOUNT = 'CHECKING_ACCOUNT',
  MONEY = 'MONEY',
  SAVINGS = 'SAVINGS',
  INVESTMENTS = 'INVESTMENTS',
  PAYMENT_ACCOUNT = 'PAYMENT_ACCOUNT',
  OTHERS = 'OTHERS',
}

export const createBankAccountSchema = {
  name: Joi.string().required(),
  balance: Joi.string().required(),
  description: Joi.string().optional(),
  bank_flag: Joi.string().required(),
  include_sum_main_screen: Joi.bool().required(),
  account_type: Joi.string().required(),
}
