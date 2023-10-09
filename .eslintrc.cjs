module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
		'no-console': 'error',
    quotes: ['warn', 'single'],
		'jsx-quotes': ['error', 'prefer-double'],
		'no-unused-vars': ['warn'],
		'no-use-before-define': ['error'],
		'semi': ['error'],
  },
}
