import { render } from '@redwoodjs/testing/web'

import NewUserExamplePage from './NewUserExamplePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NewUserExamplePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewUserExamplePage id="42" />)
    }).not.toThrow()
  })
})
