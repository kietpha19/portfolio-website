module.exports = {
  root: true,
  plugins: ['react'],
  extends: ['prettier', 'standard', 'plugin:react/recommended'],
  env: {
    browser: true,
    es2021: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  overrides: [
    {
      env: {
        node: true
      },
      files: ['eslint.config.js'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  rules: {
    semi: ['error', 'always']
  }
};
