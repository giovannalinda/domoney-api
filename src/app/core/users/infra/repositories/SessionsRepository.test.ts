import { SessionsRepositoryProvider } from '@/app/core/users/types'

import { FakeSessionsRepository } from '.'
import { v4 } from 'uuid'

describe('SessionsRepository', () => {
  let sessionsRepository: SessionsRepositoryProvider

  beforeEach(() => {
    sessionsRepository = new FakeSessionsRepository()
  })

  it('should be able create session with user_id', async () => {
    const user_id = v4()

    const session = await sessionsRepository.create(user_id)

    expect(session.user_id).toBe(user_id)
  })
})
