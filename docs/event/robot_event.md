# 机器人事件
- 事件目录: `/script/robot_event/`
- 事件参数: `event`
:::tip
以下事件均需要在`/script/robot_event/`目录下创建对应lua脚本,例如`GroupRedPackLuckyKingEvent`需要创建为`GroupRedPackLuckyKingEvent.lua`

以下示例均为JSON格式,实际为LuaTable类型,事件参数均注入到`event`中调用,示例调用获取发生时间戳`event.time`
:::
## RobotHeartbeatEvent
机器人心跳包
```json
{
    "postType":"",//表示该上报的类型, 消息, 请求, 通知, 或元事件
    "selfId":123456,//收到事件的机器人的 QQ 号
    "time":1708412910,//事件发生的时间戳
    "subType":"",
    "metaEventType":""//元事件类型
}
```
## RobotLifecycleEvent
机器人生命周期
```json
{
    "postType":"",//表示该上报的类型, 消息, 请求, 通知, 或元事件
    "selfId":123456,//收到事件的机器人的 QQ 号
    "time":1708412910,//事件发生的时间戳
    "subType":"",
    "metaEventType":""//元事件类型
}
```
## GroupInviteEvent
群邀请
```json
{
    "postType":"",//表示该上报的类型, 消息, 请求, 通知, 或元事件
    "selfId":123456,//收到事件的机器人的 QQ 号
    "time":1708412910,//事件发生的时间戳
    "subType":"",
    "noticeType":"",
    "requestType":"请求类型",
    "groupId":12345678,//邀请的群号
    "userId":123456,//邀请人QQ
    "flag":"验证字段",
    "comment":"验证消息"
}
```
## GroupRequestEvent
群申请
```json
{
    "postType":"",//表示该上报的类型, 消息, 请求, 通知, 或元事件
    "selfId":123456,//收到事件的机器人的 QQ 号
    "time":1708412910,//事件发生的时间戳
    "subType":"",
    "noticeType":"",
    "requestType":"请求类型",
    "groupId":12345678,//加入群号
    "userId":123456,//申请QQ
    "flag":"验证字段",
    "comment":"验证消息"
}
```

## FriendRequestEvent
好友申请
```json
{
    "postType":"",//表示该上报的类型, 消息, 请求, 通知, 或元事件
    "selfId":123456,//收到事件的机器人的 QQ 号
    "time":1708412910,//事件发生的时间戳
    "subType":"",
    "noticeType":"",
    "requestType":"请求类型",
    "userId":123456,//申请QQ
    "flag":"验证字段",
    "comment":"验证消息"
}
```