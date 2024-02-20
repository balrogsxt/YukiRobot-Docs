# 群组特殊事件
- 事件目录: `/script/group_custom_event/`
- 事件参数: `event`
- 额外参数: `args`
:::tip
以下事件均需要在`/script/group_custom_event/`目录下创建对应lua脚本,例如`AfterEvent`需要创建为`AfterEvent.lua`

特殊事件下,额外参数使用`args`获取,例如`args.list`

以下示例均为JSON格式,实际为LuaTable类型,事件参数均注入到`event`中调用,示例调用获取发生时间戳`event.time`
:::

> 以下群组特定事件`event`参数均为以下格式
```json
{
    "postType":"",//表示该上报的类型, 消息, 请求, 通知, 或元事件
    "selfId":123456,//收到事件的机器人的 QQ 号
    "time":1708412910,//事件发生的时间戳
    "subType":"",
    "noticeType":"",
    "groupId":12345678,//群号
    "groupName":"群名称",
    "msgType":"",
    "rawMsg":"原始消息,包含完整CQ码",
    "msg":"去除CQ码的图片URL后的消息",
    "msgId":123,//消息ID
    "userId":123456,//消息发送者QQ
    "msgSeq":123,//消息序列
    "font":0,//字体
    "sender":{//发送者详情
        "id":123456,//QQ
        "sex":"性别",
        "nickname":"昵称",
        "age":16,
        "groupId":12345678,//来源群
        "title":"群头衔",
        "role":"群身份",
        "card":"群名片",
        "level":"级别"
    },
    "selfInfo":{//机器人信息
        "nickname":"机器人昵称",
        "userId":123456,//机器人QQ
        "avatar":"http://***"//机器人头像地址
    }
}
```

## BeforeEvent
群组前置消息事件

## AfterEvent
群组后置消息事件

## AfterEndEvent
一定时间后群组没有人发送消息后触发
> 额外函数
```lua
event.confirm() -- 确认消费该事件
```
## RereadEvent
群消息复读事件
> 额外参数
```json
{
    "isEq":true,//是否复读的消息都是同一个人发送
    "msg":"复读的消息内容",
    "userList":[123,456,789]//参与复读的QQ号数组
}
```

## ActiveSendTextEvent
累计一定纯文本消息数量后触发
> 额外参数
```json
{
    "list":[
        {
            "name":"可用昵称",
            "nickName":"个人昵称",
            "cardName":"群名片",
            "titleName":"群头衔",
            "msg":"消息内容",
            "userId":123456,//QQ号
        }
        ......
    ]
}
```
> 额外函数
```lua
event.confirm() -- 确认消费该事件
```
## ActiveSendEmojiEvent
累计一定图片消息数量后触发
> 额外函数
```lua
event.confirm() -- 确认消费该事件
```