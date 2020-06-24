// .vuepress/config.js
module.exports = {
    base:'/dita-sys-docs/',
    title: '数据聚合平台对外开放接口文档',
    description: '数据聚合平台对外开放接口文档',

    themeConfig: {
        lastUpdated: 'Last Updated',
        nav: [
            
        ],
        sidebar: [
            ['/', '主页'],
            {
                title: '基础数据',
                collapsable: false,
                children: [
                    ['/基础数据/小区管理', '小区管理'],
                    ['/基础数据/停车场管理', '停车场管理']
                ]
            },
            {
                title: '数据上报',
                collapsable: false,
                children: [
                    ['/数据上报/人员出入记录', '人员出入记录'],
                    ['/数据上报/车辆出入记录', '车辆出入记录'],
                    ['/数据上报/智感安防区数据上报', '智感安防区数据上报'],
                    ['/数据上报/门禁设备数据上报', '门禁设备数据上报'],
                    ['/数据上报/门禁轨迹上报', '门禁轨迹上报'],
                    ['/数据上报/实有房屋数据上报', '实有房屋数据上报'],
                    ['/数据上报/实有人口数据上报', '实有人口数据上报']                  
                ]
            },
            ['/通用字典', '通用字典'],
        ]
    }

}