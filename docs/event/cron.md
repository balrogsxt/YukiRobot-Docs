# 任务计划
- 事件目录: `/script/cron/`

任务计划需要在`/script/cron`目录下建立lua脚本,名称无限制。以下是创建实例

> /script/cron/test.lua
```lua
plugin = {
    exp = "0 0 */1 * * ?" -- 设置cron表达式,1小时触发一次任务
    disable = false -- 任务开关
}

function exec()
    print("触发任务了",util.date("Y-m-d H:i:s"))
end

```