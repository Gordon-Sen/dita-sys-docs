(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{169:function(t,a,v){"use strict";v.r(a);var _=v(0),s=Object(_.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("div",{staticClass:"content"},[v("h1",{attrs:{id:"数据聚合平台对外开放接口文档"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据聚合平台对外开放接口文档","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据聚合平台对外开放接口文档")]),t._v(" "),v("h2",{attrs:{id:"前言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),v("p",[t._v("本文档主要用于数据聚合平台对外开放接口所提供的接口进行说明，主要用于相关终端与本系统的对接。")]),t._v(" "),v("h3",{attrs:{id:"请求说明"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#请求说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 请求说明")]),t._v(" "),v("p",[t._v("以下是对接口的请求进行一些通用规则说明")]),t._v(" "),v("h4",{attrs:{id:"服务器地址"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#服务器地址","aria-hidden":"true"}},[t._v("#")]),t._v(" 服务器地址")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("地址名称")]),t._v(" "),v("th",[t._v("url")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("本地")]),t._v(" "),v("td",[t._v("http://127.0.0.1:8080")])]),t._v(" "),v("tr",[v("td",[t._v("测试环境")]),t._v(" "),v("td",[t._v("http://wetime520.com:6006/")])])])]),t._v(" "),v("h4",{attrs:{id:"请求方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#请求方式","aria-hidden":"true"}},[t._v("#")]),t._v(" 请求方式")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("GET / POST\n")])])]),v("h4",{attrs:{id:"请求体类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#请求体类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 请求体类型")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("名称")]),t._v(" "),v("th",[t._v("类型")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("表单")]),t._v(" "),v("td",[t._v("application/x-www-form-urlencoded")])]),t._v(" "),v("tr",[v("td",[t._v("JSON")]),t._v(" "),v("td",[t._v("application/json;charset=UTF-8")])])])]),t._v(" "),v("h4",{attrs:{id:"其他"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#其他","aria-hidden":"true"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),v("h5",{attrs:{id:"分页"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分页","aria-hidden":"true"}},[t._v("#")]),t._v(" 分页")]),t._v(" "),v("p",[t._v("一些支持分页的接口，通用的分页参数如下")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("参数名称")]),t._v(" "),v("th",[t._v("参数值示例")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("是否可空")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("pageIndex")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("Integer")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("页码")])]),t._v(" "),v("tr",[v("td",[t._v("itemCount")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("Integer")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("记录总数")])]),t._v(" "),v("tr",[v("td",[t._v("pageSize")]),t._v(" "),v("td",[t._v("10")]),t._v(" "),v("td",[t._v("Integer")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("每页记录数")])]),t._v(" "),v("tr",[v("td",[t._v("onPage")]),t._v(" "),v("td",[t._v("true")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("是")]),t._v(" "),v("td",[t._v("是否进行分页，如为fasle则查询所有记录")])])])]),t._v(" "),v("h5",{attrs:{id:"身份验证"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#身份验证","aria-hidden":"true"}},[t._v("#")]),t._v(" 身份验证")]),t._v(" "),v("p",[t._v("所有的接口文档调用时必须在请求头上加上授权参数，授权参数请联系系统管理员获取。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("请求头参数名")]),t._v(" "),v("th",[t._v("参数值示例")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("是否可空")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("appCode")]),t._v(" "),v("td",[t._v("9357cf831f7b410db354b7b2dd293293")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("应用标识")])]),t._v(" "),v("tr",[v("td",[t._v("secret")]),t._v(" "),v("td",[t._v("xxasass222")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("否")]),t._v(" "),v("td",[t._v("开发密钥")])])])]),t._v(" "),v("h3",{attrs:{id:"响应说明"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#响应说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 响应说明")]),t._v(" "),v("p",[t._v("接口的响应结果格式为JSON，是经过一定的规范进行组织的，下面是一个常见的接口返回数据的大体结构")]),t._v(" "),v("div",{staticClass:"language-javascript extra-class"},[v("pre",{pre:!0,attrs:{class:"language-javascript"}},[v("code",[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"status"')]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//请求响应状态码")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("   "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//详情结果业务数据")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"desc"')]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"操作成功！"')]),t._v(" "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//响应文字信息")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),v("h4",{attrs:{id:"响应状态码对照表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#响应状态码对照表","aria-hidden":"true"}},[t._v("#")]),t._v(" 响应状态码对照表")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("状态码")]),t._v(" "),v("th",[t._v("含义")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("200")]),t._v(" "),v("td",[t._v("请求成功")])]),t._v(" "),v("tr",[v("td",[t._v("400")]),t._v(" "),v("td",[t._v("参数校验错误")])]),t._v(" "),v("tr",[v("td",[t._v("404")]),t._v(" "),v("td",[t._v("资源无法访问或不存在")])]),t._v(" "),v("tr",[v("td",[t._v("403")]),t._v(" "),v("td",[t._v("未授权")])]),t._v(" "),v("tr",[v("td",[t._v("500")]),t._v(" "),v("td",[t._v("服务器出错")])])])])])}],!1,null,null,null);a.default=s.exports}}]);