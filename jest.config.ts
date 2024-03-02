export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    // process `*.tsx` files with `ts-jest`
  },
  rootDir: 'src',
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png|css)$': '<rootDir>/tests/mocks/fileMock.ts',
    '\\.(css)$': 'identity-obj-proxy',
    '^@components/(.*)$': '<rootDir>/components/$1',
  },
};
