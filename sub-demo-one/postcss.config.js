module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-pxtorem": {
      "rootValue": 37.5, // 设计稿宽度的1/10,
      "propList": ['*'], // 需要做转化处理的属性，如`height`、`width`、`margin`等，`*`表示全部
      selectorBlackList: ['.weui', '.scroller', '.dp']
    }
  }
}