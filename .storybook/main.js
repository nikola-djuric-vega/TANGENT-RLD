const path = require('path')

module.exports = {
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
    // '../containers/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next-router',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  typescript: {
    reactDocgen: false,
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    })

    config.resolve.alias = {
      ...config.resolve.alias,
      '/fonts': path.resolve(__dirname, '../public/fonts/'),
      _mocks: path.resolve(__dirname, '../__mocks__'),
      _containers: path.resolve(__dirname, '../containers'),
      _atoms: path.resolve(__dirname, '../components/atoms'),
      _molecules: path.resolve(__dirname, '../components/molecules'),
      _organism: path.resolve(__dirname, '../components/organism'),
      _context: path.resolve(__dirname, '../context'),
      _hoc: path.resolve(__dirname, '../components/hoc'),
      _types: path.resolve(__dirname, '../types'),
      _lib: path.resolve(__dirname, '../lib'),
      _pages: path.resolve(__dirname, '../pages'),
      _public: path.resolve(__dirname, '../public'),
      _utils: path.resolve(__dirname, '../utils'),
      _hooks: path.resolve(__dirname, '../hooks'),
      _svgs: path.resolve(__dirname, '../components/svgs'),
    }

    // Return the altered config
    return config
  },
}
