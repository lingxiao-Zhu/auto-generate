# auto-generate

一键创建模版文件夹的 cli。

## 安装

```javascript
yarn global add auto-generate
```

or

```javascript
npm install auto-generate -g
```

## 使用

第一步，初始化环境，生成 xgen.json 和 .templates 文件夹。

```javascript
$ xgen init
```

```javascript
// xgen.json
{
    "types": {
        "view": {
            "template": "./.templates/view", // 模版地址
            "dir": "./src/pages/" // 生成地址
        },
        "component": {
            "template": "./.templates/component",
            "dir": "./src/components/"
        }
    }
}
```

第二步：可以跟进项目情况修改 xgen.json 以及 template 下的内容。

第三步，根据需要创建模板

```javascript
$ xgen build
```
