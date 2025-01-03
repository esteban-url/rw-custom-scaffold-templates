import type { Meta, StoryObj } from '@storybook/react'

import { Loading, Failure, Success } from './EditUserExampleCell'
import { standard } from './EditUserExampleCell.mock'

const meta: Meta = {
  title: 'Cells/EditUserExampleCell',
  tags: ['autodocs'],
}

export default meta

export const loading: StoryObj<typeof Loading> = {
  render: () => {
    return Loading ? <Loading /> : <></>
  },
}

export const failure: StoryObj<typeof Failure> = {
  render: (args) => {
    return Failure ? <Failure error={new Error('Oh no')} {...args} /> : <></>
  },
}

export const success: StoryObj<typeof Success> = {
  render: (args) => {
    return Success ? <Success {...standard()} {...args} /> : <></>
  },
}
