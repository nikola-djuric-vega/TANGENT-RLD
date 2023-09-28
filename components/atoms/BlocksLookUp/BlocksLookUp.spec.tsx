import BlocksLookUp, { BlocksLookUpProps } from './BlocksLookUp'
import {
  waitForElementToBeRemoved,
  fireEvent,
  render,
} from '@testing-library/react'

const mockProps: BlocksLookUpProps = {
  id: 'search-shedule-by-block',
  title: 'Select a block',
  buttonText: 'Already know your block?',
}

describe('Blocks lookup component test', () => {
  it('should render initial button', async () => {
    const { getByLabelText } = render(<BlocksLookUp {...mockProps} />)
    const button = getByLabelText(mockProps.buttonText)
    expect(button).toBeInTheDocument()
  })

  it('should open pop up by clicking button', async () => {
    const { getByLabelText, findByRole } = render(
      <BlocksLookUp {...mockProps} />
    )
    const button = getByLabelText(mockProps.buttonText)
    fireEvent.click(button)
    const popUp = await findByRole('dialog')
    expect(popUp).toBeInTheDocument()
  })

  it('should close pop up by clicking close button', async () => {
    const { getByLabelText, findByLabelText, queryByRole } = render(
      <BlocksLookUp {...mockProps} />
    )
    const button = getByLabelText(mockProps.buttonText)
    fireEvent.click(button)
    const closeButton = await findByLabelText('close')
    fireEvent.click(closeButton)

    waitForElementToBeRemoved(() => queryByRole('dialog'))
    expect(queryByRole('dialog')).not.toBeInTheDocument()
  })
})
