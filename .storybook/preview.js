import '!style-loader!css-loader!sass-loader!../styles/main.scss'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import * as nextImage from 'next/image'

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
}

const OriginalNextImage = nextImage.default
// Replace next/image for Storybook
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})
