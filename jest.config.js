module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'components/{atoms,molecules,organism}/**/*.{ts,tsx}',
    'utils/**/*.{ts,tsx}',
    '!**/*.spec.+{js|jsx|ts|tsx}',
    '!**/*.stories.{js,jsx,ts,tsx}',
  ],
  coverageDirectory: '__tests__/coverage',
  coverageReporters: ['json', 'lcov'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  testMatch: ['**/*.spec.{js,jsx,ts,tsx}'],
  testEnvironment: 'jsdom',
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^_types/(.*)': '<rootDir>/types/$1',
    '^_containers/(.*)': '<rootDir>/containers/$1',
    '^_atoms/(.*)': '<rootDir>/components/atoms/$1',
    '^_molecules/(.*)': '<rootDir>/components/molecules/$1',
    '^_organism/(.*)': '<rootDir>/components/organism/$1',
    '^_context/(.*)': '<rootDir>/context/$1',
    '^_hoc/(.*)': '<rootDir>/components/hoc/$1',
    '^_lib/(.*)': '<rootDir>/lib/$1',
    '^_pages/(.*)': '<rootDir>/pages/$1',
    '^_public/(.*)': '<rootDir>/public/$1',
    '^_hooks/(.*)': '<rootDir>/hooks/$1',
    '^_utils(.*)': '<rootDir>/utils$1',
    '^.+\\.(min.css|less)$': '<rootDir>/__tests__/__mocks__/styleMock.ts',
  },
}
