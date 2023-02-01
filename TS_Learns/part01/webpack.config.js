const { outputHelp } = require('commander')

// 引入一个包
// 帮助拼接路径
const path = require('path')

// 引入HTML插件
const HTMLWebpackPlugin = require('html-webpack-plugin')

// 引入 clean 插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// webpack的所有配置信息都应该写在module.exports中
module.exports = {

  // 指定入口文件
  entry: "./src/index.ts",

  // 指定打包文件所在目录
  output:{
    // 指定打包文件的目录
    // paht: './dist',
    path: path.resolve(__dirname, 'dist'),

    // 指定打包后文件的名字
    filename: "bundle.js",

    // 告诉 webpack 不使用箭头函数
    environment: {
      arrowFunction: false
    }
  },

  // 指定webpack打包时使用的模块
  module:{
    // 指定要加载的规则
    rules: [
      {
        // 指定规则生效的文件，下面是匹配以ts结尾的文件
        test: /\.ts$/,
        // 使用 ts-loader 处理ts结尾的文件
        // 加载器的执行顺序是从后往前执行
        use: [
          // 'babel-loader', // 将新版本的JS转化成旧版本的JS
          // 配置babel-loader
          { 
            // 指定加载器 
            loader: 'babel-loader',
            // 设置babel
            options:{
              // 设置预定义的环境
              presets: [
                [
                  // 指定环境的插件
                  '@babel/preset-env',
                  // 配置信息
                  {
                    // 指定要兼容的浏览器的目标版本
                    targets: {
                      'chrome': '88',
                      "ie": '11',
                    },
                    // 指定corejs的版本
                    "corejs": "3",
                    // 使用sorejs的方式，usage 表示按需加载
                    "useBuiltIns": "usage",
                  }
                ]
              ]
            }
          },
          'ts-loader' // 将TS代码转换成JS
        ],
        // 指定要排除的文件夹
        exclude: /node_modules/,
      }
    ]
  },
  // 配置webpack插件
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      // title: '自定义title',
      template: './src/index.html'
    }),
  ],

  // 用来设置 模块
  resolve:{
    // 凡是以ts和js结尾的文件，都可以作为模块使用，主要解决模块引入/引用的问题
    extensions: ['.ts', '.js'],
  }
}