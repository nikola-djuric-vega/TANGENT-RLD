import '@testing-library/jest-dom'
jest.mock(
  'next/image',
  () =>
    function Image(props) {
      // Prevent next.js Image props being passed to HTML DOM nodes in tests, causing warnings
      const { objectFit, priority, objectPosition, layout, alt, ...newProps } =
        props
      /*eslint-disable @next/next/no-img-element */
      return <img {...newProps} alt={alt} />
    }
)

jest.mock('next/router', () => ({
  useRouter: () => ({
    asPath: '/test',
    back: jest.fn(),
    query: '',
  }),
}))

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}
global.localStorage = localStorageMock
