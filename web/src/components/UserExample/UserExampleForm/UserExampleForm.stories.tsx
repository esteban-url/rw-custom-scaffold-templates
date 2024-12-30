// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import UserExampleForm from './UserExampleForm'

const meta: Meta<typeof UserExampleForm> = {
  component: UserExampleForm,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof UserExampleForm>

export const Primary: Story = {}
