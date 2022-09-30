# hcgo

## 介绍

> 该包适用于海鹚区域项目，主旨在简化海鹚各个项目运行命令的复杂度，同时通过小程序ci功能简化开发人员打码、上传体验版的流程，以提升开发效率。

## 安装教程

安装教程分为开发安装与使用安装

### 开发安装

1. 获取本项目 `git clone xxx`
2. 推荐使用 `pnpm i` 当然也可以使用 `yarn` 或者 `npm i` 
3. 进入项目执行 `npm link`
4. 然后你就可以全局使用我们的工具试试 `hcgo -h`

### 使用安装

以上是开发方法是开发过程中的使用方式，如果你只想简单的使用将会更加简单。你只需要 `npm i git+https://github.com/AeCode-call/hcgo.git -g` 即可全局使用 `hcgo -h`

说明：这是一个公司项目放入 npm 里面没有什么意义，大家直接使用 github 仓库即可。同时你又get到了一个知识点，原来 npm 还可以直接安装git仓库的包呀！！！

## 使用说明

```shell
Usage: index [options] [command]

本项目适用于海鹚区域项目,可通过一个cli运行所有海鹚区域的项目。

Options:  
  -v,--version    查看当前cli版本  
  -h,--help       显示帮助信息  

Commands:  
  b [options]  build 打包项目，通过 -e 指定环境   
  w [options]  watch 监听项目，通过 -e 指定环境  
  p [options]  publish 发布项目禁止指定环境  
  help [command]  help 你可以尝试一下 hcgo help b
```
每个命令都可以查看帮助信息，你可以在终端输入 `hcgo help b` 查看示例

### 参数解释

环境说明 `-e --env`
|平台|正式环境|测试环境|开发环境|
|:---------:|:---:|:---:|:---:|
| 阿里小程序 | a | ua | sa |
| 百度小程序 | b | ub | sb |
| 微信小程序 | w | uw | sw |

|子命令|简化命令|长命令|说明|
|:---:|:----:|:------:|:---:|
| w  | `hcgo w -euw`|  `hcgo w --env=uw` |监听运行测试环境微信小程序|
| b  | `hcgo b -ew`|  `hcgo b --env=w` |执行正正式境微信小程序打包|
| p  | `hcgo p`|  `hcgo p` |发布到微信小程序体验版|

子命令：p (publish)
|说明|命令|长命令|
|---|---|---|
|生成路径二维码|`hcgo p -ppages\home\idnex`|`hcgo p --path=pages\home\idnex`|
|生成首页二维码|`hcgo p -p`|`hcgo p --path`|
|发布到体验版小程序|`hcgo p`|`hcgo p`|


## 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request
