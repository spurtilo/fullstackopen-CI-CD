import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  {
    files: ['**/*.mjs', '**/*.js'],
    languageOptions: { sourceType: 'module' },
  },
  {
    files: ['**/*.mjs', '**/*.js'],
    languageOptions: { sourceType: 'module' },
  },
  { languageOptions: { globals: globals.browser } },
  { languageOptions: { globals: globals.node } },
];
