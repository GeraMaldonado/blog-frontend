module.exports = {
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
  extends: ['./node_modules/ts-standard/eslintrc.json'],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off'
  }
}
