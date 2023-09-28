import AddressLookup, { AddressLookUpProps } from './AddressLookUp'
import { mockDataAddressLookup } from './mock-data-test'
import axios from 'axios'

import {
  waitForElementToBeRemoved,
  fireEvent,
  cleanup,
  waitFor,
  render,
} from '@testing-library/react'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const mockProps: AddressLookUpProps = {
  placeholder: 'Search an address',
  id: 'test-address-lookup',
}

describe('Address lookup component test', () => {
  afterEach(cleanup)

  beforeAll(() => {
    mockedAxios.create.mockImplementation(() => mockedAxios)
    mockedAxios.get.mockImplementation(
      () =>
        new Promise((resolve) =>
          setTimeout(() => resolve(mockDataAddressLookup), 1000)
        )
    )
  })

  it('should render initial search input', async () => {
    const { getByPlaceholderText, getByLabelText } = render(
      <AddressLookup {...mockProps} />
    )
    const input = getByPlaceholderText(mockProps.placeholder)
    const button = getByLabelText('search')
    expect(button).toBeInTheDocument()
    expect(input).toBeInTheDocument()
  })

  it('should open pop up by clicking input', async () => {
    const { getByPlaceholderText, findByRole } = render(
      <AddressLookup {...mockProps} />
    )
    const input = getByPlaceholderText(mockProps.placeholder)
    fireEvent.focus(input)
    const popUp = await findByRole('dialog')
    await waitFor(() => {
      expect(popUp).toBeInTheDocument()
    })
  })

  it('should open pop up by clicking button', async () => {
    const { getByLabelText, findByRole } = render(
      <AddressLookup {...mockProps} />
    )
    const button = getByLabelText('search')
    fireEvent.click(button)
    const popUp = await findByRole('dialog')

    expect(popUp).toBeInTheDocument()
  })

  it('should close pop up by clicking close button', async () => {
    const { getByLabelText, findByLabelText, queryByRole } = render(
      <AddressLookup {...mockProps} />
    )
    const button = getByLabelText('search')
    fireEvent.click(button)
    const closeButton = await findByLabelText('close')
    fireEvent.click(closeButton)

    waitForElementToBeRemoved(() => queryByRole('dialog'))
    expect(queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('shows all items in pop up ', async () => {
    const {
      findAllByPlaceholderText,
      getByPlaceholderText,
      findAllByLabelText,
      findByLabelText,
    } = render(<AddressLookup {...mockProps} />)
    const input = getByPlaceholderText(mockProps.placeholder)
    fireEvent.focus(input)

    const allInputs = await findAllByPlaceholderText(mockProps.placeholder)
    const searchButtons = await findAllByLabelText('search')
    const closeButton = await findByLabelText('close')

    expect(closeButton).toBeInTheDocument()
    expect(searchButtons).toHaveLength(2)
    expect(allInputs).toHaveLength(2)
  })

  it('should show error if incorrect postcode is used', async () => {
    const invalidPostcode = 'A'
    const { findAllByPlaceholderText, getByPlaceholderText, findByLabelText } =
      render(<AddressLookup {...mockProps} />)

    const initInput = getByPlaceholderText(mockProps.placeholder)
    fireEvent.focus(initInput)
    const mainSearch = (
      (await findAllByPlaceholderText(
        mockProps.placeholder
      )) as HTMLInputElement[]
    )[1]

    fireEvent.change(mainSearch, { target: { value: invalidPostcode } })
    expect(mainSearch.value).toBe(invalidPostcode)
    const errorMessage = await findByLabelText(
      'Address error',
      {},
      { timeout: 1800 }
    )
    expect(errorMessage).toBeInTheDocument()
  })

  it('should shows loading state', async () => {
    const { findAllByPlaceholderText, getByPlaceholderText, findByRole } =
      render(<AddressLookup {...mockProps} />)

    const initInput = getByPlaceholderText(mockProps.placeholder)
    fireEvent.focus(initInput)
    const mainSearch = (
      (await findAllByPlaceholderText(
        mockProps.placeholder
      )) as HTMLInputElement[]
    )[1]

    fireEvent.change(mainSearch, {
      target: { value: mockDataAddressLookup.validPostcode },
    })

    expect(mainSearch.value).toBe(mockDataAddressLookup.validPostcode)
    const loader = await findByRole('progressbar', {}, { timeout: 1800 })
    expect(loader).toBeInTheDocument()
  })

  it('should reset state by pressing the button inside input', async () => {
    const { findAllByPlaceholderText, getByPlaceholderText, getByLabelText } =
      render(<AddressLookup {...mockProps} />)

    const initInput = getByPlaceholderText(mockProps.placeholder)
    fireEvent.focus(initInput)

    const mainSearch = (
      (await findAllByPlaceholderText(
        mockProps.placeholder
      )) as HTMLInputElement[]
    )[1]

    fireEvent.change(mainSearch, {
      target: { value: mockDataAddressLookup.validPostcode },
    })

    const resetSearch = getByLabelText('reset search')
    fireEvent.click(resetSearch)
    expect(mainSearch).toHaveValue('')
  })
})
