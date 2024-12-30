import type { Meta, StoryObj } from '@storybook/react'

import NewUserExamplePage from './NewUserExamplePage'

const meta: Meta<typeof NewUserExamplePage> = {
  component: NewUserExamplePage,
}

export default meta

type Story = StoryObj<typeof NewUserExamplePage>

export const Primary: Story = {}
