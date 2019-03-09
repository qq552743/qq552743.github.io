---
comments: true
catalog: true
archives: true
date: 2019-03-5
#updated：2019-02-28
author: huang lei
#header-img: /source/images/xuenarui.jpg
title: "adblogcat"
subtitle: "发现一个bug!"
categories:
- Android
tags:
- adb
top: 1
---

# 简介
> 1. 日志抓取方式 (简单)
> 2. 日志级别与简单使用 (简单)
> 3. 参考资料

[TOC]

<!-- more -->

# DDMS 功能翻译

//过滤logcat消息来源的标记,pid或最小日志级别。

> Filter logcat messages by the source's tag, pid or minimum log level.

//空字段将匹配所有消息。

> Empty fields will match all messages.

```
filter name	//过滤
    by log tag				//日志标记
    by log message			//日志消息
    by pid
    by application name		//应用程序名称
    by log level			//日志级别
```

# 日志级别

V -详细(最低优先级)

D -调试

I -信息

W -警告

E -错误

F -致命的

S -沉默


# 简单使用与导出（略）

	1. 显示现在连接的手机设备：输入 **adb devices**  + 回车

	2. 抓log：输入 adb logcat + 回车

	3. 停止抓log：使用ctrl + c

	4. 将log导出：adb logcat > d：1.txt（将log导出到d：/1.txt文件中）

	5. adb shell 命令行下, 可以使用 exit 、ctrl + d 退出

## 日志获取方式并存储到本地

命令与格式:
`logcat -v time -s *:E > /mmt/sdcard/1.log`
eg:
	```
	adb logcat -v time -s appname:E>d:/1.log）

	//输出到当前目录
	adb logcat -v time 1 >.\\logcat.log

	//输出到指定目录
	adb logcat -v time 1 >d:/logcats.log
	```

## 日志获取方式2

adb logcat -v time thread >d:/logcats.log


## 根据应用PID，筛选日志3

  //获取应用的PID

  ```
  adb shell dumpsys meminfo org.cocos2dx.FengHuangNiuNiu
  （ 46469 kB: org.cocos2dx.FengHuangNiuNiu (pid 8481 / activities)）
  	adb logcat JPush:D * s  | grep 8481
  ```



# 参考资料:

如何抓取log[链接](http://www.tuicool.com/articles/3EVj2m)

adb抓取[链接](http://www.miui.com/thread-2210516-1-1.html)

adb 分析[链接](http://blog.chinaunix.net/uid-20459533-id-3109996.html)

Android中对Log日志文件的分析[链接](http://blog.chinaunix.net/uid-20459533-id-3109996.html)

小米-adblog 使用[链接](http://www.miui.com/thread-2210516-1-1.html)



