/* 引入包 */
const path = require('path');
/* 引入 html 插件 */
const HTMLWebpackPlugin = require('html-webpack-plugin');
/* 引入 clean 插件 */
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
/* webpack 所有的配置信息都应该写在 module.exports 中 */
module.exports = {
    /* 指定入口文件 */
    entry: './src/index.ts',
    /* 指定打包文件所在目录 */
    output: {
        /* 指定打包文件目录 */
        /* path.resolve node 的拼接地址方法 */
        path: path.resolve(__dirname, 'dist'),
        /* 打包后的文件名 */
        filename: 'bundle.js',
        /* 是否使用箭头函数 */
        environment: {
            arrowFunction: false,
        },
    },
    /* 指定 webpack 打包时使用的模块 */
    module: {
        /* 指定加载规则 */
        rules: [
            {
                /* test 指定生效的文件 */
                test: /\.ts$/,
                /* 要是用的 loader */
                use: [
                    /* 配置 babel */
                    // {
                    //     /* 指定加载器 */
                    //     loader: 'babel-loader',
                    //     /* 设置 babel */
                    //     options: {
                    //         /* 设置预定义环境 */
                    //         preset: [
                    //             /* 指定环境插件 */
                    //             '@babel/preset-env',
                    //             /* 配置信息 */
                    //             {
                    //                 /* 要兼容的浏览器版本 */
                    //                 targets: {
                    //                     'chrome': '58',
                    //                     'ie': '11',
                    //                 },
                    //                 /* 指定 corejs 的版本 */
                    //                 'corejs': '3',
                    //                 /* 使用 corejs 的方式 按需加载 */
                    //                 'useBuiltIns': 'usage',
                    //             },
                    //         ],
                    //     },
                    // },
                    'ts-loader',
                ],
                /* 要排除的文件夹 */
                exclude: /node-modules/,
            },
        ],
    },
    /* 配置 webpack 插件 */
    plugins: [
        /* 删除 dist 插件 */
        new CleanWebpackPlugin(),
        /* 创建 html 模板 */
        new HTMLWebpackPlugin(
            {
                /* 单独设置 title */
                // title: '测试 Webpack',
                /* 指定模板 */
                template: path.resolve(__dirname, 'src/index.html'),
            },
        ),
    ],
    mode: 'development',
    /* 用来设置引用模块 */
    resolve: {
        extensions: [
            '.ts',
            '.js',
        ],
    },
};