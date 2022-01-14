import { container } from 'tsyringe'
import { NextFunction, Request, Response } from 'express'

import { CreateBankAccountService } from '@/app/core/bank_accounts/services'

class BankAccountsController {
  public async create(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    const { user_id, body } = request

    const createBankAccount = container.resolve(CreateBankAccountService)

    try {
      const bankAccount = await createBankAccount.execute({
        user_id,
        ...body,
      })

      return response.json(bankAccount)
    } catch (error) {
      return next(error)
    }
  }
}

export { BankAccountsController }
