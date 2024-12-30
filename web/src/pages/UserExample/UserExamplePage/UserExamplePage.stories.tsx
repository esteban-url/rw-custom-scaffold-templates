import type { Meta, StoryObj } from '@storybook/react'

import UserExamplePage from './UserExamplePage'

const meta: Meta<typeof UserExamplePage> = {
  component: UserExamplePage,
}

export default meta

type Story = StoryObj<typeof UserExamplePage>

export const Primary: Story = {}
