import { render } from '@redwoodjs/testing/web'

import UserExamplesPage from './UserExamplesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('UserExamplesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserExamplesPage />)
    }).not.toThrow()
  })
})
