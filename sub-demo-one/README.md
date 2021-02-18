## 禁止外传

## 基础参数配置

```
vue.config.js
    publicPath // 公共路径
    proxy // 跨域配置
    chainWebpack // 配置全局变量

/src/service/config.js // 配置各环境请求域名
    LOACL_PATH = '' 
    TEST_PATH = '' 
    PRO_PATH = '' 

    
```

## 本地启动

```
npm run start

```

### 打包发布测试环境

```
npm run build-test
```

### 打包发布生产环境

```
npm run build-prod
```

### 本地参数配置 .env.local

```

VUE_BUILD_ENV= "local" // 环境变量 本地启动

```

### 测试参数配置 .env.test

```
NODE_ENV= "production" // 说明打包方式
VUE_BUILD_ENV= "test" // 环境变量 测试

```

### 正式环境配置 .env.prod

```
NODE_ENV= "production" // 说明打包方式
VUE_BUILD_ENV= "prod" // 环境变量 生产

```

### 目录结构

```
├── public                           # 模板html及角标
├── publicUtil                       # 公共方法
├── src        
│   ├── assets                       # 本地静态资源
│   ├── components                   # 业务通用组件
│   ├── lang                         # 国际化翻译
│   │   ├── I18N.csv                 # 配置国际化内容 执行icotjo.exe 生成相应语言文件
│   ├── layout                       # layout
│   ├── pages                        # 业务页面入口
│   ├── router                       # 路由
│   │   ├── routerMiddleware         # 路由中间件 配置路由守卫
│   ├── service                      # 接口
│   │   ├── config.js                # 基础参数配置
│   │   ├── index.js                 # 统一接口文件
│   │   ├── tools.js                 # axios封装
│   ├── store                        # vuex状态管理（自行删减module）
│   │   ├── setter                   # 配置信息模块
│   │   ├── user                     # 用户信息模块
│   ├── utils                        
│   │   ├── constant.js              # 常量文件
│   │   ├── filter.js                # 过滤器
│   │   ├── globalVantComponents.js  # vant 组件全局导入配置
│   │   ├── index.js                 # 公共方法
│   │   ├── init.js                  # vue实例初始化执行内容
│   ├── main.js                      # 入口文件
├── .prettierrc                      # 代码格式化规范
├── .env.{xxx}                       # 执行环境全局变量配置
├── vue.config.js                    # webpack配置文件
├── README.md
├── package.sh                       # jenkins发版文件
└── package.json

```

### 关于基础布局

```

模板已对html标签基本样式进行清空
全局使用rem布局 使用lib-flexible 不需要自行进行rem单位转换
rem基准值37.5px（375px规格ui图 不需要进行数据计算）
postcss.config.js 文件对rem转换进行配置

不需要 px 转 rem 的情况，可以使用大写的 PX 作为单位。

编译时不会将其转化为 rem 单位，也可以通过 selectorBlackList 属性声明的 .norem 前缀的 class 类名，同样也不会被转化。

```

### 关于请求

```

/src/service/tool.js 
目前对axios只进行了一层简单封装,需添加对请求与响应的拦截
/src/service/config.js 
为请求的域名配置文件 目前只设置了三种环境 本地&测试&生产 

```

### 关于路由

```

/src/router/routes.js 配置路由表
模板路由默认为hash模式
命名以语义化为主

/src/router/routerMiddleware
配置路由守卫, 模板只对非配置的路由进行了拦截 可根据需求添加权限路由拦截

简单的权限路由方案:
为每个路由在meta中配置一个id,在初次加载获取到权限表后比对路由的id 进行拦截跳转

```

### 国际化

```

i18n插件 src/lang

I18N.csv 翻译内容 配置所有的翻译信息 执行icotjo.exe 生成相应语言文件
i18n.js 翻译插件实例 配置默认语言

占位符翻译:
        模板 TEST: xxx{field}xxxx
        使用 $t('TEST',{field:xxxx})

关于英文"与,输入 icotjo无法转义" 可通过占位符将"传入 进行翻译显示 英文,可在外层使用"包裹"
如:
        模板 TEST: "{queto}xxx{queto},hello"
        使用 $t('TEST',{queto:'"'})
        结果 "xxx",hello

```

### 本地联调

```

目前本地项目连接的为测试环境接口 如需本地联调 可替换vue.config.js 内跨域配置

如:
      '/test': {
        target: 'http://10.30.3.27:9988',
        ws: false,
        secure: false,
        changeOrigin: true
      }
      
转发域名为后台本机地址 由后台提供

```

### 关于与app端交互

```

调用app端方法时需注册app端接口 如:
具体接口名称由app端提供

ios
      const tempFucntion =
        window.webkit &&
        window.webkit.messageHandlers.{AppApi}.postMessage({
          type: '{apiName}',
          data: JSON.stringify(param)
        })
      tempFucntion && tempFucntion()

Android
      const tempFucntion =
        window.{AppApi} &&
        window.{AppApi}.{apiName}(
          JSON.stringify({
            params: JSON.stringify(param)
          })
        )
      tempFucntion && tempFucntion()

```