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

第一步，初始化环境，生成 xgen.json 和 templates 文件夹。

```javascript
$ xgen init
```

```javascript
// xgen.json
{
    "types": {
        "view": {
            "template": "./template/view",
            "dir": "./src/pages/"
        },
        "component": {
            "template": "./template/component",
            "dir": "./src/components/"
        }
    }
}
```

第二步：在 src 下创建 pages 文件夹和 components 文件夹，如果是接入老项目，就修改 xgen.json 的配置。

第三步，根据需要创建模板

```javascript
$ xgen build
```
