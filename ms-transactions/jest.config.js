module.exports = {
  roots: ['<rootDir>/__tests__/routes/'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
