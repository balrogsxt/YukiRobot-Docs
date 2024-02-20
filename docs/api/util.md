
# 工具库


:::tip
Lua调用参数与响应数据均按照文档的从上到下顺序排列，调用响应结果如果带有错误信息的均需要判断是否为nil
:::

## util.base64Decode
Base64解码

> 调用参数

|数据类型|说明|示例值|
|----|----|----|
|string|需要解码内容||

> 响应数据

|数据类型|说明|示例值|
|----|----|----|
|string|结果||


## util.base64Encode
Base64编码

> 调用参数

|数据类型|说明|示例值|
|----|----|----|
|string|需要编码内容||

> 响应数据

|数据类型|说明|示例值|
|----|----|----|
|string|结果||


## util.calcTime
计算时间戳距离当前时间的时间

> 调用参数

|数据类型|说明|示例值|
|----|----|----|
|int64|秒级时间戳|1708394475|

> 响应数据

|数据类型|说明|示例值|
|----|----|----|
|int64|时间距离|3天2小时10分5秒|


## util.containsArray
判断字符串是否包含在数组内(包含匹配)

> 调用参数

|数据类型|说明|示例值|
|----|----|----|
|string|目标字符串||
|table|字符串数组||

> 响应数据

|数据类型|说明|示例值|
|----|----|----|
|boolean|结果||


## util.date
日期格式化(与PHP相同)

> 调用参数

|数据类型|说明|示例值|
|----|----|----|
|string|时间格式|Y-m-d H:i:s|
|int64|指定时间戳<br/>留空则代表当前时间戳|1708394475|

> 响应数据

|数据类型|说明|示例值|
|----|----|----|
|string|结果|2024-02-20 10:14:32|


## util.decode
机器人字符串解码

> 调用参数

|数据类型|说明|示例值|
|----|----|----|
|string|需要解码内容||

> 响应数据

|数据类型|说明|示例值|
|----|----|----|
|string|结果||


## util.encode
机器人字符串编码

> 调用参数

|数据类型|说明|示例值|
|----|----|----|
|string|需要编码内容||

> 响应数据

|数据类型|说明|示例值|
|----|----|----|
|string|结果||


## util.fileBase64
文件Base64编码

> 调用参数

|数据类型|说明|示例值|
|----|----|----|
|string|文件路径字符串|/Users/1.txt|

> 响应数据

|数据类型|说明|示例值|
|----|----|----|
|string|结果||
|string|错误信息||


## util.fileMd5
文件MD5计算

> 调用参数

|数据类型|说明|示例值|
|----|----|----|
|string|文件路径字符串|/Users/1.txt|

> 响应数据

|数据类型|说明|示例值|
|----|----|----|
|string|结果|202cb962ac59075b964b07152d234b70|
|string|错误信息||


## util.imageBase64
图片Base64编码

> 调用参数

|数据类型|说明|示例值|
|----|----|----|
|string|图片路径字符串|/Users/1.jpg|

> 响应数据

|数据类型|说明|示例值|
|----|----|----|
|string|结果|data:image/jpg;开头的编码格式|
|string|错误信息||


## util.inArray
判断字符串是否包含在数组内(完整匹配)

> 调用参数

|数据类型|说明|示例值|
|----|----|----|
|string|目标字符串||
|table|字符串数组||

> 响应数据

|数据类型|说明|示例值|
|----|----|----|
|boolean|结果||


## util.isEmpty
判断字符串是否为空

> 调用参数

|数据类型|说明|示例值|
|----|----|----|
|string|字符串||

> 响应数据

|数据类型|说明|示例值|
|----|----|----|
|boolean|结果||


## util.isFloat
判断字符串是否是浮点数

> 调用参数

|数据类型|说明|示例值|
|----|----|----|
|string|字符串||

> 响应数据

|数据类型|说明|示例值|
|----|----|----|
|boolean|结果||


## util.isInt
判断是否是整数数字

> 调用参数

|数据类型|说明|示例值|
|----|----|----|
|string|字符串||

> 响应数据

|数据类型|说明|示例值|
|----|----|----|
|boolean|结果||


## util.isNumber
判断是否是字符串

> 调用参数

|数据类型|说明|示例值|
|----|----|----|
|string|字符串||

> 响应数据

|数据类型|说明|示例值|
|----|----|----|
|boolean|结果||


## util.isRegex
判断字符串是否匹配正则

> 调用参数

|数据类型|说明|示例值|
|----|----|----|
|string|正则表达式{CN}代表[\u44E00-\u9FA5]||
|string|需要匹配的字符串||

> 响应数据

|数据类型|说明|示例值|
|----|----|----|
|boolean|是否命中||


## util.matchRegex
判断字符串是否匹配正则

> 调用参数

|数据类型|说明|示例值|
|----|----|----|
|string|正则表达式<br/>{CN}代表[\u44E00-\u9FA5]||
|string|需要匹配的字符串||

> 响应数据

|数据类型|说明|示例值|
|----|----|----|
|[]string|匹配结果列表||
|string|错误信息||


## util.md5
Md5加密(与PHP相同用法)

> 调用参数

|数据类型|说明|示例值|
|----|----|----|
|string|字符串|123|

> 响应数据

|数据类型|说明|示例值|
|----|----|----|
|string|结果|202cb962ac59075b964b07152d234b70|


## util.millisecond
获取当前毫秒级时间戳


> 响应数据

|数据类型|说明|示例值|
|----|----|----|
|int64|时间戳|1708394475000|


## util.rand
随机数

> 调用参数

|数据类型|说明|示例值|
|----|----|----|
|int64|最小数|1|
|int64|最大数|10|

> 响应数据

|数据类型|说明|示例值|
|----|----|----|
|int64|随机结果|5|


## util.randStr
随机字符串(通过Table表)

> 调用参数

|数据类型|说明|示例值|
|----|----|----|
|table|包含需要随机的字符串table||

> 响应数据

|数据类型|说明|示例值|
|----|----|----|
|string|结果||


## util.regexReplace
正则替换

> 调用参数

|数据类型|说明|示例值|
|----|----|----|
|string|正则表达式||
|string|替换内容||
|string|来源字符串||

> 响应数据

|数据类型|说明|示例值|
|----|----|----|
|string|替换结果||


## util.strtotime
字符串时间转秒级时间戳(与PHP相同用法)

> 调用参数

|数据类型|说明|示例值|
|----|----|----|
|string|字符串时间|2024-2-20 10:01:15|

> 响应数据

|数据类型|说明|示例值|
|----|----|----|
|int64|时间戳|1708394475|


## util.substr
剪切文字(支持中文)

> 调用参数

|数据类型|说明|示例值|
|----|----|----|
|string|目标字符串||
|int64|开始位置||
|int64|结束位置<br/>-1代表末尾||

> 响应数据

|数据类型|说明|示例值|
|----|----|----|
|string|结果||


## util.tableReplace
字符串批量替换(通过Table表)

> 调用参数

|数据类型|说明|示例值|
|----|----|----|
|string|来源字符串||
|table|luaTable表对应kv||

> 响应数据

|数据类型|说明|示例值|
|----|----|----|
|string|替换结果||


## util.time
获取当前秒级时间戳


> 响应数据

|数据类型|说明|示例值|
|----|----|----|
|int64|时间戳|1708394475|


## util.trim
清空前后空格

> 调用参数

|数据类型|说明|示例值|
|----|----|----|
|string|需要清空的字符串||

> 响应数据

|数据类型|说明|示例值|
|----|----|----|
|string|结果||


## util.urldecode
URL解码

> 调用参数

|数据类型|说明|示例值|
|----|----|----|
|string|需要解码内容||

> 响应数据

|数据类型|说明|示例值|
|----|----|----|
|string|结果||


## util.urlencode
URL编码

> 调用参数

|数据类型|说明|示例值|
|----|----|----|
|string|需要编码内容||

> 响应数据

|数据类型|说明|示例值|
|----|----|----|
|string|结果||


## util.week
获取指定时间的星期

> 调用参数

|数据类型|说明|示例值|
|----|----|----|
|int64|时间戳|1708394475|

> 响应数据

|数据类型|说明|示例值|
|----|----|----|
|int64|星期<br/>0代表星期天<br/>其他依次类推|2|
