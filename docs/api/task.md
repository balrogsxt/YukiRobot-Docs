
# 任务队列


:::tip
Lua调用参数与响应数据均按照文档的从上到下顺序排列，调用响应结果如果带有错误信息的均需要判断是否为nil
:::

## task.push
投递任务到队列,创建消息后需要在/script/queue_event下创建对应队列lua文件

> 调用参数

|数据类型|说明|示例值|
|----|----|----|
|string|队列名称||
|table|投递数据||
|table|额外参数<br/>支持max_retry=最大重试次数<br/>timeout=超时时间(毫秒)<br/>delay=延迟执行时间(毫秒)||

> 响应数据

|数据类型|说明|示例值|
|----|----|----|
|table|投递结果||
|string|错误信息||
