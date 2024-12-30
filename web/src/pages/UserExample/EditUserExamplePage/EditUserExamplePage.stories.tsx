import type { Meta, StoryObj } from '@storybook/react'

import EditUserExamplePage from './EditUserExamplePage'

const meta: Meta<typeof EditUserExamplePage> = {
  component: EditUserExamplePage,
}

export default meta

type Story = StoryObj<typeof EditUserExamplePage>

export const Primary: Story = {}
