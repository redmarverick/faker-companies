// jest.config.js
module.exports = {
  // Define o diretório raiz do projeto
  rootDir: './',
  // Define os padrões de teste para encontrar arquivos de teste
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  // Define os diretórios que devem ser ignorados pelo Jest
  testPathIgnorePatterns: ['/node_modules/'],
  // Define o ambiente de teste a ser usado
  testEnvironment: 'jsdom',
  // Define os módulos que devem ser transformados pelo Jest
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  // Define as opções de cobertura de código
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['text', 'lcov'],
};
