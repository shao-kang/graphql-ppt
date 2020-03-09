title: graphql
speaker: 宋少康
plugins:
    - echarts

<slide class="bg-black-blue aligncenter" image="https://source.unsplash.com/C1HhAQrbykQ/ .dark">

# Graphql {.text-landing.text-shadow}

一种用于 API 的查询语言  

作者： 宋少康 {.text-intro} 


<slide class="bg-black-blue ">
# 什么是Graphql 
### 一种API 查询语言
GraphQL 对 API 中的数据提供了一套易于理解的完整描述，  
使得客户端能够准确地获得它需要的数据，而且没有任何冗余，也让 API 更容易地随着时间推移而演进，  
还能用于构建强大的开发者工具。

<slide class="bg-black-blue">
# Graphql 特点

1. 定制你所需要的数据， 无冗余

2. 数据可以进行合并，减少请求数量

3. 结构即文档，拥有描述所有可能的类型系统， 可提供大量的辅助性开发信息


<slide class="bg-black-blue aligncenter">
# 语法简介与demo示例
[Graphql官方入门教程](https://graphql.cn/learn/)



<slide class="bg-black-blue aligncenter">
# 传统的RESTful 架构
#### 将数据作为一种资源来增删改查
![](/restful.png)
<slide class="bg-black-blue aligncenter">
# Graphql架构方案
#### 作为网关服务层， 聚合后端API供前端各端使用
![](/graphql.webp)

<slide class="bg-black-blue ">

# restful 与  Graphql 比较

## 优势

1. 与多服务和微服务能较好的匹配

2. 通过单一api获取数据

3. 定制数据无冗余

4. 无版本兼容问题

5. 自动生成文档
## 缺点
1. 循环迭代查询问题
2. 缓存机制复杂

<slide class="bg-black-blue aligncenter">
# 哪些公司已经采用

 #### facebook 
 #### twitter 
 #### github 
 #### airbnb  
 #### 。。。

<slide class="bg-black-blue aligncenter">
## thank
宋少康 {.text-intro} 
