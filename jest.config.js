module.exports = {
  rootDir: './tests',
  testTimeout: 30000,
  bail: 0,
  transform: {
    '^.+\\.js$': ['babel-jest', { presets: ['@babel/preset-env'] }]
  }
}