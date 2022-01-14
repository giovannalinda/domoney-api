import { BankAccount } from '@/app/core/bank_accounts/infra/entities'
import {
  CreateBankAccount,
  BankAccountsRepositoryProvider,
} from '@/app/core/bank_accounts/types'

class FakeBankAccountsRepository implements BankAccountsRepositoryProvider {
  private bankAccounts: BankAccount[]

  constructor() {
    this.bankAccounts = []
  }

  public async create(data: CreateBankAccount) {
    const bankAccount = new BankAccount()

    Object.assign(bankAccount, data)

    this.bankAccounts.push(bankAccount)

    return bankAccount
  }

  public async findAllByUserId(user_id: string) {
    return this.bankAccounts.filter(
      (bankAccount) => bankAccount.user_id === user_id,
    )
  }
}

export { FakeBankAccountsRepository }
