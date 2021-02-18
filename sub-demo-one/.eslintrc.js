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
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'off', // 关闭未调用报错
    'no-unused-expressions': 'off', // 表达式
    'space-before-function-paren': 0, // 关闭函数前面必须要有一个空格
    'no-useless-computed-key': 0,
    'handle-callback-err': 0,
    'eol-last': 0,
    'camelcase': 0
  }
}
