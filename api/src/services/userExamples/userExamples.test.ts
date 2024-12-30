import type { UserExample } from '@prisma/client'

import {
  userExamples,
  userExample,
  createUserExample,
  updateUserExample,
  deleteUserExample,
} from './userExamples'
import type { StandardScenario } from './userExamples.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userExamples', () => {
  scenario('returns all userExamples', async (scenario: StandardScenario) => {
    const result = await userExamples()

    expect(result.length).toEqual(Object.keys(scenario.userExample).length)
  })

  scenario(
    'returns a single userExample',
    async (scenario: StandardScenario) => {
      const result = await userExample({ id: scenario.userExample.one.id })

      expect(result).toEqual(scenario.userExample.one)
    }
  )

  scenario('creates a userExample', async () => {
    const result = await createUserExample({
      input: {
        email: 'String6967973',
        date: '2024-12-30T22:49:44.202Z',
        active: true,
        floaty: 475372.9135774232,
        inty: 8318459,
      },
    })

    expect(result.email).toEqual('String6967973')
    expect(result.date).toEqual(new Date('2024-12-30T22:49:44.202Z'))
    expect(result.active).toEqual(true)
    expect(result.floaty).toEqual(475372.9135774232)
    expect(result.inty).toEqual(8318459)
  })

  scenario('updates a userExample', async (scenario: StandardScenario) => {
    const original = (await userExample({
      id: scenario.userExample.one.id,
    })) as UserExample
    const result = await updateUserExample({
      id: original.id,
      input: { email: 'String26842272' },
    })

    expect(result.email).toEqual('String26842272')
  })

  scenario('deletes a userExample', async (scenario: StandardScenario) => {
    const original = (await deleteUserExample({
      id: scenario.userExample.one.id,
    })) as UserExample
    const result = await userExample({ id: original.id })

    expect(result).toEqual(null)
  })
})
