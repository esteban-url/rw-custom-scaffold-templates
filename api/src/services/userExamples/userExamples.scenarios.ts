import type { Prisma, UserExample } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserExampleCreateArgs>({
  userExample: {
    one: { data: { email: 'String7370906' } },
    two: { data: { email: 'String1062837' } },
  },
})

export type StandardScenario = ScenarioData<UserExample, 'userExample'>
