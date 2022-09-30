# hcgo

#### 介绍

1. 本项目适用于海鹚区域项目, 可通过一个cli运行所有海鹚区域的项目。
2. 微信小程序还将加入一键发布到体验版的功能(需要与项目经理沟通获取到小程序的代码上传密钥，并开放小程序代码上传名单)。
3. 模板项目 wepy react taro，支持page和component一键生成，最好支持路由自动注册



##### 我为什么想做一个这样的cli（进行中…）
1. 我们每个2.0 融合版的项目都需要 `cd ../../ && npm run xxx --dir --env` 这样的重复命令完全可以省略，因为我们的路径里面已经包含了dir，我们完全不需要手动去敲那么长的命令
2. 我认为永远是小白才懂小白，农民工才懂农名工，什么意思呢？就是只有做业务的才知道做业务有什么痛点，那我们有那么多业务在做我们为什么不能解决我们自己的痛点呢？就像跑命令对于别的部门来说可能就一两个，但是对我们来说就太多了很需要一个统一管理的cli来帮我去跑这些命令（我认为）
3. 多一些尝试吧，每天写业务代码，便少了一些写代码带来的快感，所以想通过一些新东西新技术，来保持自己的兴趣，而且如果是只做前端的话 `javascript` 工程师可能才是我向往的终点

##### 小程序发布的cli（计划中…）
以前，如果我们要给后端和项目经理打测试码，按照以前的情况，一个码下来可能别人已经等了半个小时了，我们自己可能也需要浪费十几分钟的时间。  
但是，如果有一个一键打码的工具的话就可以大大节省别人等待的时间，而我们只需要运行一行代码，二维码就将自动打好，并发送到企业微信里面（企业微信机器人）  
现在（基于有这个工具后），对于我们来说的工作量就是打开项目、运行一个命令，而对于需要等待二维码的人就是确定我们已经知道这件事情然后等待企业微信发二维码给自己

##### 生产页面、组件模版（计划中…）
每次新增一个页面的时候都需要自己一个一个建jsx、scss、wpy、wxml、less等文件，我们可以做一个命令自动生成这些文件的模版。

#### 安装教程

##### 开发安装

1. 获取本项目 `git clone xxx`
2. 推荐使用 `pnpm i` 当然也可以使用 `yarn add` 或者 `npm i` 
3. 进入项目执行 `npm link`
4. 然后你就可以全局使用我们的工具试试 `hcgo -h`

##### 仅使用安装

以上是开发方法是开发过程中的使用方式，如果你只想简单的使用将会更加简单。你只需要 `npm i git+https://github.com/AeCode-call/hcgo.git -g` 即可全局使用 `hcgo -h`

说明：这是一个公司项目放入 npm 里面没有什么意义，大家直接使用 github 仓库即可。同时你又get到了一个知识点，原来 npm 还可以直接安装git仓库的包呀！！！

#### 使用说明

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
#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request
