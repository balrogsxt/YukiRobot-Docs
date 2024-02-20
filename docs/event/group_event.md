# 群组事件
- 事件目录: `/script/group_event/`
- 事件参数: `event`
:::tip
以下事件均需要在`/script/group_event/`目录下创建对应lua脚本,例如`GroupRedPackLuckyKingEvent`需要创建为`GroupRedPackLuckyKingEvent.lua`

以下示例均为JSON格式,实际为LuaTable类型,事件参数均注入到`event`中调用,示例调用获取发生时间戳`event.time`
:::
## GroupRedPackLuckyKingEvent
群红包运气王
```json
{
    "postType":"",//表示该上报的类型, 消息, 请求, 通知, 或元事件
    "selfId":123456,//收到事件的机器人的 QQ 号
    "time":1708412910,//事件发生的时间戳
    "subType":"",
    "noticeType":"",
    "groupId":12345678,//群号
    "groupName":"群名称",
    "targetId":123456,//运气王QQ
    "userId":123456//发红包的QQ
}
```
## GroupMemberTitleUpdateEvent
群头衔更新
```json
{
    "postType":"",//表示该上报的类型, 消息, 请求, 通知, 或元事件
    "selfId":123456,//收到事件的机器人的 QQ 号
    "time":1708412910,//事件发生的时间戳
    "subType":"",
    "noticeType":"",
    "groupId":12345678,//群号
    "groupName":"群名称",
    "title":"头衔名称",
    "userId":123456//获取人QQ
}
```
## GroupHonorUpdateEvent
群荣誉更新
```json
{
    "postType":"",//表示该上报的类型, 消息, 请求, 通知, 或元事件
    "selfId":123456,//收到事件的机器人的 QQ 号
    "time":1708412910,//事件发生的时间戳
    "subType":"",
    "noticeType":"",
    "groupId":12345678,//群号
    "groupName":"群名称",
    "honorType":"talkative", //荣誉类型,talkative:龙王 performer:群聊之火 emotion:快乐源泉
    "userId":123456//获取人QQ
}
```
## GroupPokeEvent
群内戳一戳
```json
{
    "postType":"",//表示该上报的类型, 消息, 请求, 通知, 或元事件
    "selfId":123456,//收到事件的机器人的 QQ 号
    "time":1708412910,//事件发生的时间戳
    "subType":"",
    "noticeType":"",
    "groupId":12345678,//群号
    "groupName":"群名称",
    "targetId":123456,//被戳的人QQ
    "userId":123456//发送者QQ
}
```

## GroupMessageRecallEvent
群消息撤回
```json
{
    "postType":"",//表示该上报的类型, 消息, 请求, 通知, 或元事件
    "selfId":123456,//收到事件的机器人的 QQ 号
    "time":1708412910,//事件发生的时间戳
    "subType":"",
    "noticeType":"",
    "groupId":12345678,//群号
    "groupName":"群名称",
    "msgId":123,//消息ID
    "userId":123456,//消息发送者QQ
    "operatorId":123456//撤回操作者QQ
}
```
## GroupBanEvent
群禁言
```json
{
    "postType":"",//表示该上报的类型, 消息, 请求, 通知, 或元事件
    "selfId":123456,//收到事件的机器人的 QQ 号
    "time":1708412910,//事件发生的时间戳
    "subType":"",
    "noticeType":"group_ban",//group_ban=禁言,lift_ban=取消禁言
    "groupId":12345678,//群号
    "groupName":"群名称",
    "operatorId":123,//操作者 QQ 号
    "userId":123456,//被禁言 QQ 号 (为全员禁言时为0)
    "duration":123456//禁言时长, 单位秒 (为全员禁言时为-1)
}
```
## GroupIncreaseEvent
群成员增加
```json
{
    "postType":"",//表示该上报的类型, 消息, 请求, 通知, 或元事件
    "selfId":123456,//收到事件的机器人的 QQ 号
    "time":1708412910,//事件发生的时间戳
    "subType":"",
    "noticeType":"group_ban",//group_ban=禁言,lift_ban=取消禁言
    "groupId":12345678,//群号
    "groupName":"群名称",
    "operatorId":123,//操作者QQ,如果是管理员邀请，这里貌似是0
    "userId":123456//加入者QQ
}
```
## GroupDecreaseEvent
群成员减少
```json
{
    "postType":"",//表示该上报的类型, 消息, 请求, 通知, 或元事件
    "selfId":123456,//收到事件的机器人的 QQ 号
    "time":1708412910,//事件发生的时间戳
    "subType":"",
    "noticeType":"group_ban",//group_ban=禁言,lift_ban=取消禁言
    "groupId":12345678,//群号
    "groupName":"群名称",
    "operatorId":123,//操作者 QQ 号 ( 如果是主动退群, 则和 user_id 相同 )
    "userId":123456//退出者QQ
}
```
## GroupFileUploadEvent
群文件上传
```json
{
    "postType":"",//表示该上报的类型, 消息, 请求, 通知, 或元事件
    "selfId":123456,//收到事件的机器人的 QQ 号
    "time":1708412910,//事件发生的时间戳
    "subType":"",
    "noticeType":"group_ban",//group_ban=禁言,lift_ban=取消禁言
    "groupId":12345678,//群号
    "groupName":"群名称",
    "userId":123456,//退出者QQ
    "file":{
        "busid":1,//未知
        "id":"id",//文件ID
        "name":"文件名称",
        "size":1024,//文件大小,单位:子节
        "url":"http://*****"//下载链接
    },
    //同上
    "fileBusid":"",
    "fileId":"id",
    "fileName":"文件名称",
    "fileUrl":"http://*****",
    "fileSize":1024
}
```

## GroupAdminChangeEvent
群管理变动
```json
{
    "postType":"",//表示该上报的类型, 消息, 请求, 通知, 或元事件
    "selfId":123456,//收到事件的机器人的 QQ 号
    "time":1708412910,//事件发生的时间戳
    "subType":"",
    "noticeType":"group_ban",//set=设置管理以,unset=取消管理以
    "groupId":12345678,//群号
    "groupName":"群名称",
    "userId":123456//变动QQ
}
```
