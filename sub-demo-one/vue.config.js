const { name } = require('./package')

module.exports = {
  assetsDir: 'static',
  publicPath: '/subapp/sub-demo-one',
  devServer: {
    hot: true,
    port: process.env.VUE_APP_PORT,
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {
      '/test': {
        target: 'https://xxx.com',
        ws: false,
        secure: false,
        changeOrigin: true
      }
    }
  },
  chainWebpack: config => {
    config.output.filename('[name].[hash].js').end()

    config.resolve.symlinks(false)

    if (process.env.VUE_BUILD_ENV) {
      config.plugin('define').tap(arg => {
        arg[0]['process.env.VUE_BUILD_ENV'] = `"${process.env.VUE_BUILD_ENV}"`
        console.log('VUE_BUILD_ENV=====', arg)
        return arg
      })
    }
  },
  productionSourceMap: false, // 生产环境下css 分离文件
  configureWebpack: config => {
    // eslint-disable-next-line eqeqeq
    if (process.env.NODE_ENV == 'production') {
      const splitChunksWebpackPlugin = config.optimization.splitChunks
      splitChunksWebpackPlugin.cacheGroups.VRA = {
        // axios vue lib-flexible打到一起
        name: 'VRA',
        test: /[\\/]node_modules[\\/](vue|axios|lib-flexible)/,
        minSize: 10,
        minChunks: 1,
        maxInitialRequests: 3,
        maxAsyncRequests: 5,
        priority: 10, // 优先级
        chunks: 'all'
      }
    }
    return {
      output: {
        library: `${name}-[name]`,
        libraryTarget: 'umd',
        jsonpFunction: `webpackJsonp_${name}`
      }
    }
  },
  // css相关配置
  css: {
    // 启用 CSS modules
    requireModuleExtension: true,
    // 是否使用css分离插件
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {}
  }
}
