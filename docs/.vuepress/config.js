

module.exports = {
    title: "YukiRobot",
    description: "LuaDocument",
    dest:'./dist',
    head:[
        [
            'link',
            {rel:'icon',href:'/logo.png'}
        ]
    ],
    themeConfig: {
        nav: [
            { text: 'API', link: '/api/' },
			{ text: 'Event', link: '/event/' },
        ],
        sidebar: {
            '/api/':["CQ","Db","api","cron","image","redis","req","socket","sys","task","util"],
            '/event/':['group_event','group_module','group_custom_event','private_event','queue_event','robot_event','cron']
        }
    }
}

