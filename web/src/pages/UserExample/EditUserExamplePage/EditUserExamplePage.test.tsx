import { render } from '@redwoodjs/testing/web'

import EditUserExamplePage from './EditUserExamplePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EditUserExamplePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditUserExamplePage id="42" />)
    }).not.toThrow()
  })
})
