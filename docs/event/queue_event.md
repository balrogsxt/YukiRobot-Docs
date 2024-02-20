# 队列事件
- 事件目录: `/script/queue_event/`
- 事件参数: `event`
- 额外参数: `payload`

## 投递消息示例
以下是创建一个延迟投递消息到群里面@某人发送消息的示例

> 投递消息

投递消息需要先调用[task.push](./../api/task.md#taskpush)函数进行投递
```lua

local queue = "test" -- 设置需要投递的队列
local res,err = task.push(queue,{
    -- 自定义参数设置
    groupId = 123456789,
    userId = 123456,
    msg = "消息"
},{
    delay = 2000 -- 延迟2秒后投递
})
if err ~= nil then
    print("投递失败",err)
else
    print("投递成功",table.dump(res))
end
```
> 接收消息

接收消息需要在`/script/queue_event/`目录下创建对应lua脚本,例如`test`的队列需要创建为`test.lua`文件进行接收。创建完成之后开始写接收逻辑。
```lua
local msg = string.format("%s %s",CQ.at(payload.userId),payload.msg)
CQ.sendGroupMsg(payload.groupId,msg)
```