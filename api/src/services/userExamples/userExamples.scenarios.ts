import type { Prisma, UserExample } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserExampleCreateArgs>({
  userExample: {
    one: {
      data: {
        email: 'String781710',
        date: '2024-12-30T22:49:44.206Z',
        active: true,
        floaty: 4083883.0954407724,
        inty: 8019898,
      },
    },
    two: {
      data: {
        email: 'String1339623',
        date: '2024-12-30T22:49:44.206Z',
        active: true,
        floaty: 2752263.91442299,
        inty: 7652614,
      },
    },
  },
})

export type StandardScenario = ScenarioData<UserExample, 'userExample'>
