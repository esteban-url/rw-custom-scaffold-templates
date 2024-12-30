import { render } from '@redwoodjs/testing/web'

import UserExamples from './UserExamples'
import { standard } from './UserExamples.mock'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UserExamples', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserExamples userExamples={standard().userExamples} />)
    }).not.toThrow()
  })
})
