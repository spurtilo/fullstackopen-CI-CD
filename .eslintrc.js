module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'jest'],
  globals: {
    require: 'readonly',
    module: 'readonly',
    process: 'readonly',
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'windows'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    eqeqeq: 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'no-console': 'error',
    'react/prop-types': 0,
  },
  overrides: [
    {
      files: ['**/*.cjs'],
      parserOptions: {
        sourceType: 'commonjs',
      },
      env: {
        node: true,
      },
    },
    {
      files: ['**/*.mjs', '**/*.js', '**/*.jsx'],
      parserOptions: {
        sourceType: 'module',
      },
      env: {
        browser: true,
        es6: true,
      },
    },
    {
      files: ['**/*.spec.jsx'],
      env: {
        'jest/globals': true,
      },
    },
  ],
};
