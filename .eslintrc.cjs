// const react = require('eslint-plugin-react');
// const globals = require('globals');
// const reactRecommended = require('eslint-plugin-react/configs/recommended');

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'tailwind.config.js'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}

// export default [
//   reactRecommended,
//   {
//     files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
//     plugins: {
//       react,
//     },
//     languageOptions: {
//       parserOptions: {
//         ecmaFeatures: {
//           jsx: true,
//         },
//       },
//       globals: {
//         ...globals.browser,
//       },
//     },
//     rules: {
//       // ... any rules you want
//       'react/jsx-uses-react': 'error',
//       'react/jsx-uses-vars': 'error',
//      },
//     // ... others are omitted for brevity
//   }
// ];