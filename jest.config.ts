import type { Config } from 'jest';
import nextJest from 'next/jest';


const createJestConfig = nextJest({
  dir: './'
});


const customJestConfig: Config = {
  preset: 'ts-jest',
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
  },
};


export default createJestConfig(customJestConfig);
