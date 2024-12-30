import { render } from '@redwoodjs/testing/web'

import NewUserExample from './NewUserExample'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NewUserExample', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewUserExample />)
    }).not.toThrow()
  })
})
