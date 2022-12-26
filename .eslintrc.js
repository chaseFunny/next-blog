// 参考文档1： https://juejin.cn/post/6895889063111294990#heading-24
// 参考文档2：https://www.jianshu.com/p/6254093f846c
// 参考文档3：https://juejin.cn/post/7045083805996023838
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'airbnb', 'plugin:prettier/recommended'],
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier', 'import'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    tsconfigRootDir: './',
  },
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.tsx'],
      },
    ],
    'react/jsx-one-expression-per-line': 0,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/anchor-is-valid': 0, // next-links require empty a tags
    'jsx-a11y/label-has-associated-control': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'no-underscore-dangle': 0,
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
  globals: {
    JSX: true,
  },
  settings: {
    // 解析更多扩展名的文件
    'import/resolver': {
      typescript: {},
    },
  },
}
