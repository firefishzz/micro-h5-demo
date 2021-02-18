module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'off', // 关闭未调用报错
    'no-unused-expressions': 'off', // 表达式
    'space-before-function-paren': 0, // 关闭函数前面必须要有一个空格
    'eol-last': 'off', // Newline required at end of file but not found
    'camelcase': 'off',
    'handle-callback-err': 'off',
    'no-dupe-keys': 'off',
    'no-useless-computed-key': 0
  }
}
