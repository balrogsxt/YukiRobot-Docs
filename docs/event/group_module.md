# 群命令模块
- 事件目录: `/script/group_module/`

群命令模块需要在`/script/group_module`目录下建立lua脚本,名称无限制。以下是创建实例

> /script/group_module/help.lua
```lua
plugin = {
    -- 设置表达式,通过mode格式来定义
    exp = "^help$",
    -- 表达式模式regex=正则表达式,prefix=前缀匹配,suffix=后缀匹配,default=包含匹配
    mode = "regex",
    disable = false,-- 是否禁用该模块
    -- 允许调用命令的群组,留空则为所有群允许,如果填写了则忽略ignore_group
    allowGroup = {},
    -- 允许调用命令的用户,留空则为全部允许,如果填写了则忽略ignore_user
    allowUser = { 123456 },
    -- 忽略调用命令的群组
    ignoreGroup = {},
    -- 忽略命令调用的用户
    ignoreUser = {},
    
    userCooling = 5, -- 命中后用户对于该模块的冷却时间
    groupCooling = 10, -- 命中后群组对于该模块的冷却时间
    -- 冷却时间需要调用event.cooling()进行设置冷却,否则不会默认生效

    -- 扩展exp模式,支持多表达式命中区分,可与exp共存
    exps = {
        {
            tag = "a",
            exp = "^help-1$",
            mode = "regex"
        },
        {
            tag = "b",
            exp = "帮助" -- mode留空使用默认包含匹配
        },
        -- exp变量 %userId% 可替换为当前机器人QQ
        {
            tag = "c",
            exp = "[CQ:at,qq=%userId%]"
        } 
    }
}

function exec(event,value,args)
    -- 使用table.dump打印消息结构
    event.sendMsg(table.dump(event))
    -- 如果命中了exps的表达式,可以通过event.TAG获取对应的命中tag,否则为空
    event.sendMsg("命中TAG: "..event.TAG)
    -- 提取表达式获取的文字
    -- 如果使用正则表达式可以通过第三个参数args来获取
    event.sendMsg(table.dump(args))
    

    event.cooling() -- 设置冷却时间,通过userCooling与groupCooling > 0生效
end

```