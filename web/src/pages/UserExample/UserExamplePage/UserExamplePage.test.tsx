import { render } from '@redwoodjs/testing/web'

import UserExamplePage from './UserExamplePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('UserExamplePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserExamplePage id="42" />)
    }).not.toThrow()
  })
})
