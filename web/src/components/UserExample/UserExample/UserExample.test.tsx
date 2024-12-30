import { render } from '@redwoodjs/testing/web'

import UserExample from './UserExample'
import { standard } from './UserExample.mock'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UserExample', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserExample userExample={standard().userExample} />)
    }).not.toThrow()
  })
})
