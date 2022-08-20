module.exports = {
  extends: [
    'standard-with-typescript'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  root: true,
  rules: {},
  ignorePatterns: [
    '.esbuild',
    'src/**/*.js'
  ]
}
