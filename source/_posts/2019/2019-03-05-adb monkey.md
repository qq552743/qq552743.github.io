---
comments: true
catalog: true
archives: true
date: 2019-03-5
#updated：2019-02-28
author: huang lei
#header-img: /source/images/xuenarui.jpg
title: "adb monkey"
subtitle: "发现一个bug!"
categories:
- Android
- adb
tags:
- monkey
---

# 简介
> 1. monkey抓取方式 (简单)
> 2. 简单使用与保存数据 (简单)

[TOC]

<!-- more -->


# 命令
//P                                                 指定测试的包
//V                                                 反馈信息级别            一个 -v增加一个级别 ， 默认级别为 0
//S                                                 指定产生随机事件种子值，相同的种子值产生相同的事件序列。如： -s 200
//--throttle：                                每个事件结束后的间隔时间——降低系统的压力（如不指定，系统会尽快的发送事件序列）。如：--throttle 300
// --ignore-crashes                      忽略崩溃
// --ignore-timeouts                    忽略超时
//--monitor-native-crashes         跟踪本地方法的崩溃问题

//--pct-touch                                调整触摸事件的百分比
//--pct-motion                             调整移动事件的百分比
//--pct-trackball                           调整轨迹事件的百分比
//--pct-nav                                   调整导航事件的百分比 （来自方向输入设备的up/down/left/right）


# 基本使用格式
//eg1:
```
adb shell monkey -p com.sankuai.meituan -s 500 --ignore-crashes --ignore-timeouts --monitor-native-crashes  -v -v 10000 > D:\Environment\SDK\android-sdk-windows\platform-tools\test.txt
```
//eg2:
```
adb shell monkey -p  com.youxigu.qixiongwushuang.uc -s 30 --ignore-crashes --ignore-timeouts --monitor-native-crashes --throttle 30  -v -v 2000 > D:\Environment\SDK\android-sdk-windows\platform-tools\test.txt
```
//eg3:
```
adb shell monkey -p  com.youxigu.qixiongwushuang.uc -s 30 --throttle 30  -v -v 2000 > D:\Environment\SDK\android-sdk-windows\platform-tools\test.txt
```

# 命令组合
在monkey测试中常用的命令组合有：

> 简单的输出测试的信息。
`monkey -p com.yourpackage -v 500`

> 以深度为三级输出测试信息
`monkey -p com.yourpackage -v -v -v 500 `

> 为测试分配一个专用的端口号，不过这个命令只能输出跳转的信息及有错误时输出信息
`monkey -p com.yourpackage --port 端口号 -v`

> 为随机数的事件序列定一个值，若出现问题下次可以重复同样的系列进行排错
`monkey -p com.yourpackage -s 数字 -v 500`

> 为每一次执行一次有效的事件后休眠300毫秒
`monkey -p com.yourpackage -v --throttle 300 500`


## 本机的sdk安装路径
1. 路径为SDK的platform-tools的安装路径输入或者shift+鼠标右键打开cmd

    F:\Program Files (x86)\Android\android-sdk\platform-tools

![](/20190305152848721/20190305034318589.png)

2.本机的sdk安装路径
    D:\Environment\SDK\android-sdk-windows\platform-tools

3. adb shell
![](/20190305152848721/20190305034610020.png)
出现
>  error:device not found

问题原因：说明安卓设备没有被找到
解决办法：
    此时可以使用手机连接电脑，手机的USB模式必须打开，电脑上必须安装有手机的驱动，连上设备之后，我们在输入adb shell命令
![](/20190305152848721/20190305034757659.png)

5.基本使用 随机操作
```
Monkey –p com.tencent.mobileqq –v 1000
Monkey –p com.sankuai.meituan –v 1000
```
此命令意思为执行1000次随机用户模拟操作， （com.tencent.mobileqq 为包名）
![](/20190305152848721/20190305034926266.png)



输入adb空格shell：

出现error:device not found，说明安卓设备没有被找到

此时可以使用手机连接电脑，手机的USB模式必须打开，电脑上必须安装有手机的驱动，连上设备之后，我们在输入adb shell命令

seed  种子
count 数
all ow package  所有包噢
inc lude category  类别
launcher  发射器
monkey  猴子
event  事件
percentages  百分比
switch  开关
action  行动
category  类别
launch flags  启动标志
component  组件
finished 结束


6. 导出日志

导出日志：monkey -p com.junte -v 100 > /mnt/sdcard/monkey_test.txt
![](/20190305152848721/20190305035348307.png)

//本机导出 monkey -p com.sankuai.meituan -v 100 > /mnt/sdcard/monkey_test.txt
![](/20190305152848721/20190305035409166.png)
`adb shell monkey -p com.sankuai.meituan -v 100 > .\\abcdefg.txt`


7. 保存log日志到pc
>adb shell monkey [option] <count> >d:\monkey.txt

8. 标准流和错误流分开保存
> 标准流与错误流分开保存，代码如下：

`Monkey [option] <count> 1>/sdcard/monkey.txt 2>/sdcard/error.txt`
 	eg:
`adb shell monkey -v 100 1>d:\monkey.log  2>d:\error.log`

执行以上命令，Monkey的运行日志和异常日志将被分开保存。此时Monkey的运行日志将被保存在monkey.txt文件中，而异常日志将被保存在D盘下的error.txt中




# 参考资料
monkey 介绍：[链接](http://www.testwo.com/blog/6188)
Monkey 测试环境搭建[链接](http://blog.sina.com.cn/s/blog_15624444e0102wt6f.html)
	1. SDK Manager
	2. 翻墙工具下载(笔记本-翻墙工具)、离线安装
	3. Eclipse安装安卓项目(ADT)

MonkeyRunner：
MonkeyRunner测试环境配置（一）
[链接](http://blog.csdn.net/shy871265996/article/details/9716569)
MonkeyRunner测试环境配置（二）
[链接](http://blog.csdn.net/shy871265996/article/details/9420819)
MonkeyRunner测试环境配置（三）
[链接](http://blog.csdn.net/shy871265996/article/details/9716723)
MonkeyRunner测试环境配置（四）
[链接](http://blog.csdn.net/shy871265996/article/details/9716407)
MonkeyRunner测试环境配置（五）
[链接](http://blog.csdn.net/shy871265996/article/details/9716285)
