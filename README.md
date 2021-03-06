# 前期设计

## 功能描述

### 注册和登陆

- 用户名唯一，不能重复注册
- 用户名和密码匹配，即可登陆
- 登陆成功后，自动跳转首页

### 首页

- 非登陆用户不能进入首页，登陆用户可以发布留言
- 可查看全部留言，或查看自己的留言
- 只能编辑和删除自己的留言，无权操作其他人的留言

## 数据库设计

### MongoDB 创建数据库和集合

- 创建数据库 comment
- 创建集合 comments，存储留言数据
- 创建集合 users，存储用户

## 接口设计

### 需要哪些接口

- 注册
- 登陆
- 获取留言列表
- 创建留言
- 更新
- 删除

### 哪些接口需要登陆验证

- 登陆 不需要
- 注册 不需要
- 其他 都需要

### 登陆如何实现（跨域传递 cookie）

- cookie & session
- cookie 跨域不共享，前后端分离的开发方式，需要设置跨域传 cookie

## 规范目录和层级

路由 ➡️ controller ➡️ db ➡️ 数据库

中间件 Model
