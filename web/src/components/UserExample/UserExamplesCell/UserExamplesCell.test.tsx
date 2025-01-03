import { render } from '@redwoodjs/testing/web'

import { Loading, Failure, Empty, Success } from './UserExamplesCell'
import { standard } from './UserExamplesCell.mock'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UserExamplesCell', () => {
  it('renders loading successfully', () => {
    expect(() => {
      render(<Loading />)
    }).not.toThrow()
  })
  it('renders failure successfully', () => {
    expect(() => {
      render(<Failure error={new Error('Oh no')} />)
    }).not.toThrow()
  })
  it('renders empty successfully', () => {
    expect(() => {
      render(<Empty />)
    }).not.toThrow()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<Success userExamples={standard().userExamples} />)
    }).not.toThrow()
  })
})
