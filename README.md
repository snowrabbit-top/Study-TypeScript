# `npm` 管理 `ts` 编译

### 1. 运行命令初始化 `package.json` 文件

```shell
npm init
```

```text
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (002-npm管理ts编译) 002
version: (1.0.0)
description:
entry point: (index.ts)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to /mnt/e/Work/TypeScript/Study/002-npm管理ts编译/package.json:

{
  "name": "002",
  "version": "1.0.0",
  "description": "",
  "main": "index.ts",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

### 2. 安装 `lite-server` (开发环境的轻量服务器)

```shell
npm install --save-dev lite-server
```

#### 小知识

```json
{
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "lite-server"
    },
    "dependencies": {
    },
    "devDependencies": {
        "lite-server": "^2.6.1"
    }
}
```

+ `scripts`
    + 包含项目运行命令
+ `dependencies`
    + 正式环境的安装包
+ `devDependencies`
    + 开发环境的安装包
+ `node index.ts`
    + 可以直接运行
+ `node index.ts`
    + 可以直接运行

### 3. `TypeScript` 的数据类型

+ `boolean`
    + 布尔
    + 真(true),假(false)
        ````javascript
        let value: boolable = true;
        ````
        ````javascript
        let value: boolable = false;
        ````
+ `string`
    + 字符串
    + 双引号("),单引号('),反引号:模板字符串(`)
        ````typescript
        let value:number = "hello";
        ````
        ````typescript
        let value:number = 'hello';
        ````
        ````typescript
        let value:number = `hello ${value}`;
        ````
+ `number`
    + 数字
    + 整数,浮点数,正负数
        ````typescript
        let value:number = 1;
        ````
        ````typescript
        let value:number = 1.2;
        ````
        ````typescript
        let value:number = -1;
        ````
+ `array`
    + 数组
    + 指定数据类型的数组
        ````typescript
        let value: number[] = [1, 2, 3];
        ````
+ `tuple`
    + 元组
    + 固定长度固定类型的数组
        ````typescript
        let value: [string, number] = ['chobits', 16];
        ````
+ `enum`
    + 枚举
    + 指定类型
      ````typescript
      enum Gender{
          male,
          female,
      }
      ````
+ `null`
    + 空
+ `undefined`
    + 用于方法返回值,变量存在,未经初始化
        ````typescript
        function func(): undefined {
            console.log('返回值未定义');
            return;
        }
        ````
+ `object`
    + 对象
    + 万物皆对象(一般不会直接用 `object` 关键字,因为意义不大)
        ````typescript
        let value: object;
        value = {};
        value = function (){};
        ````
        ````typescript
        /* 字段后面加 ? 代表可选字段,多个字段时,只能第一个往后的字段可以加,不能单独加第一个 */
        let value: {
            name: string,
            age?: number
        };
        value = {
            name: 'chobits',
            age: 18,
        }
        ````
        ````typescript
        /* 字段后面加 ? 代表可选字段,多个字段时,只能第一个往后的字段可以加,不能单独加第一个 */
        let value: {
            name: string,
            age?: number
            [propName: string]: any
        };
        value = {
            name: 'chobits',
            age: 18,
            a: 1,
            b: 2,
        }
        ````
+ `Function`
    + 方法类型的变量
        ````typescript
        let value: (a: number, b: number) => number;
        value = (n1, n2) => {
            return n1 + n2;
        }
        ````
+ `void`
    + 用于方法返回值,变量本身不存在
        ````typescript
        function func(): void {
            console.log('没有返回值');
        }
        ````
+ `never`
    + 用于方法返回值,永远都不会执行完成方法(抛出异常,死循环),永远没有返回值
        ````typescript
        function func(): never {
            throw new Error('报错了~', 404);
        }
        ````
+ `any`
    + 任意类型 (不建议使用)
    + 对改变量关闭了 `TS` 的类型检测
      ````typescript
      let a: any;
      a = 10;
      a = 'hello';
      a = true;
      ````
+ `unknown`
    + 类型安全的未知类型 (任意类型时建议使用)
    + 不能直接赋值给其它类型的变量,需要断言之后再赋值
      ````typescript
      let a: unknown;
      a = 10;
      a = 'hello';
      a = true;
      let b: boolean;
      let c: boolean;
      let d: boolean;
      /* 判断类型 */
      if(typeof a === 'boolean'){
          b = a;
      }
      /* 类型断言 */
      c = a as boolean;
      d = <boolean>a;
      ````
+ `union`
    + 组合类型
    + 同时支持多种数据类型
      ````typescript
      let value: boolean | string;
      value = true;
      value = 'chobits';
      ````
+ `Nullable`
    + 可空类型
+ `Literal`
    + 预定义(字面量)类型
    + 类型就是一个指定的值
      ````typescript
      let value: 10;
      value = 10;
      let sex: 'male' | 'female';
      sex = 'male';
      sex = 'female';
      ````

#### 类型别名

````typescript
type MyType = 1 | 2 | 3 | 4 | 5 | 6;
let a: MyType;
let b: MyType;
````

#### `tsc` 监视文件更改进行编译

+ 指定文件

```shell
tsc index.ts -w
```

+ 配置监视所有文件
+ 创建 tsconfig.json 文件
+ TS 编译器的配置文件
+ 可以写 注释
+ 根据文件内容对代码进行编译
+ `include`
    + 被编译文件的所在目录
    + 哪些文件需要被编译
    + `**` 任意目录
    + `*` 任意文件
+ `exclude`
    + 编译时不编译的文件
    + 排除哪些文件
+ `extends`
    + 继承某个已有的配置文件
+ `files`
    + 指定需要编译的是哪个文件
+ `compilerOptions`
    + 编译器的选项(项目选项)
        + `target`: `ts` 代码编译的目标版本
        + `lib`: 指定代码运行时所包含的库

````json
{
    "include": [
        ""
    ],
    "exclude": [
        ""
    ],
    "extends": "",
    "files": [
        ""
    ],
    "compilerOptions": {

    }
}
````

````shell
tsc -w
````


````shell
npm i -D webpack webpack-cli typescript ts-loader
npm i -D html-webpack-plugin
npm i -D webpack-dev-server
npm i -D clean-webpack-plugin
npm i -D @babel/core @babel/preset-env babel-loader core-js
````

