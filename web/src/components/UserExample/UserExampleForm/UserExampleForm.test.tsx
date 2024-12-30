import { render } from '@redwoodjs/testing/web'

import UserExampleForm from './UserExampleForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UserExampleForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserExampleForm />)
    }).not.toThrow()
  })
})
