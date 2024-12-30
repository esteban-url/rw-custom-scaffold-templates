import type { Meta, StoryObj } from '@storybook/react'

import UserExamplesPage from './UserExamplesPage'

const meta: Meta<typeof UserExamplesPage> = {
  component: UserExamplesPage,
}

export default meta

type Story = StoryObj<typeof UserExamplesPage>

export const Primary: Story = {}
