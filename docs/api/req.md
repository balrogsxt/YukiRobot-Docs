
# 网络请求


:::tip
Lua调用参数与响应数据均按照文档的从上到下顺序排列，调用响应结果如果带有错误信息的均需要判断是否为nil
:::

## req.get
Get请求

> 调用参数

|数据类型|说明|示例值|
|----|----|----|
|string|目标URL地址||
|table|Query参数||
|table|Header参数||

> 响应数据

|数据类型|说明|示例值|
|----|----|----|
|string|响应数据||
|string|错误信息||


## req.post
Post请求

> 调用参数

|数据类型|说明|示例值|
|----|----|----|
|string|目标URL地址||
|table|Body参数||
|table|Header参数||

> 响应数据

|数据类型|说明|示例值|
|----|----|----|
|string|响应数据||
|string|错误信息||


## req.postJson
Post请求

> 调用参数

|数据类型|说明|示例值|
|----|----|----|
|string|目标URL地址||
|table|JsonBody参数||
|table|Header参数||

> 响应数据

|数据类型|说明|示例值|
|----|----|----|
|string|响应数据||
|string|错误信息||

