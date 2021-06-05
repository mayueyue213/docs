(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{505:function(t,a,s){"use strict";s.r(a);var e=s(23),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"http-缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-缓存"}},[t._v("#")]),t._v(" HTTP 缓存")]),t._v(" "),s("p",[t._v("HTTP 缓存相关的请求头，所谓的强缓存，协商缓存，一些注意事项。")]),t._v(" "),s("h2",{attrs:{id:"有效性判断"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#有效性判断"}},[t._v("#")]),t._v(" 有效性判断")]),t._v(" "),s("p",[t._v("在缓存处理中，一个关键的问题是："),s("strong",[t._v("我们如何判断一个缓存是否是有效的？")])]),t._v(" "),s("p",[t._v("这个问题又可以转换为："),s("strong",[t._v("如何判断一个文件是否更新？")])]),t._v(" "),s("p",[t._v("HTTP 中缓存，都是根据以下三类情况判断一致性：")]),t._v(" "),s("ul",[s("li",[t._v("根据文件最后修改时间")]),t._v(" "),s("li",[t._v("根据文件内容为文件生成 hash")]),t._v(" "),s("li",[t._v("直接约定一段时间有效，不做一致性比较")])]),t._v(" "),s("h2",{attrs:{id:"关于强弱缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于强弱缓存"}},[t._v("#")]),t._v(" 关于强弱缓存")]),t._v(" "),s("ul",[s("li",[t._v("强缓存：对于缓存下来的文件是能用则用，不轻易去麻烦服务器。由于是在浏览器进行比较，强缓存其实压根就不对文件一致性做校验，只是直接约定了一段时间都有效。")]),t._v(" "),s("li",[t._v("协商缓存：问一问服务器缓存的文件是不是最新的，是就直接用，不是就给我新的")])]),t._v(" "),s("p",[t._v("强缓存和协商缓存的概念，已经深入人心，但我不再采用这样的方式去理解，理由如下")]),t._v(" "),s("ul",[s("li",[t._v("不管何种缓存，都是一种协商，只不过是协商的频率，协商之后的策略不同而已。")]),t._v(" "),s("li",[t._v("我们无法根据强缓存，弱缓存的概念，去对缓存相关的 HTTP 头部字段做划分。")])]),t._v(" "),s("p",[t._v("比如 Cache-Control，如果脱离具体的值去说强缓存还是弱缓存，就没有意义，它是全能型选手。而且 Cache-Control 的作用也不仅仅体现在这个所谓的强弱上。")]),t._v(" "),s("p",[s("txt",{attrs:{bold:""}},[t._v("我觉得协商缓存这个概念，比较有用，而强缓存这个对于理解就助益不大。本文后面并不完全按照强缓存，弱缓存这样的分类去组织说明。")])],1),t._v(" "),s("h2",{attrs:{id:"pragma"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pragma"}},[t._v("#")]),t._v(" Pragma")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("响应头")]),t._v(" "),s("th",[t._v("可选值")]),t._v(" "),s("th",[t._v("HTTP 版本")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Pragma")]),t._v(" "),s("td",[t._v("no-cache")]),t._v(" "),s("td",[t._v("1.0")])])])]),t._v(" "),s("p",[t._v("只有一个可选值，我认为目前已经没有使用的必要了。"),s("code",[t._v("Pragma: no-cache")]),t._v(" 等价于 "),s("code",[t._v("Cache-Control: no-cache")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"expires"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#expires"}},[t._v("#")]),t._v(" Expires")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("响应头")]),t._v(" "),s("th",[t._v("可选值")]),t._v(" "),s("th",[t._v("HTTP 版本")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Expires")]),t._v(" "),s("td",[t._v("no-cache")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[t._v("这个 1.0 增加的响应头，指定的是一个具体的时刻，表示在这个时间之前都别问服务器了。\n这里的问题非常明显，客户端时间和服务器时间是不一致的。")]),t._v(" "),s("h2",{attrs:{id:"last-modified-if-modified-since"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#last-modified-if-modified-since"}},[t._v("#")]),t._v(" Last-Modified / If-Modified-Since")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("响应头")]),t._v(" "),s("th",[t._v("请求头")]),t._v(" "),s("th",[t._v("HTTP 版本")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Last-Modified")]),t._v(" "),s("td",[t._v("If-Modified-Since "),s("br"),t._v(" If-Unmodified-since")]),t._v(" "),s("td",[t._v("1.0")])])])]),t._v(" "),s("p",[t._v("根据 "),s("strong",[t._v("最后修改时间")]),t._v(" 进行一致性的比较。")]),t._v(" "),s("h2",{attrs:{id:"etag-if-match"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#etag-if-match"}},[t._v("#")]),t._v(" ETag / If-Match")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("响应头")]),t._v(" "),s("th",[t._v("请求头")]),t._v(" "),s("th",[t._v("HTTP 版本")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("ETag")]),t._v(" "),s("td",[t._v("If-Match "),s("br"),t._v(" If-None-Match")]),t._v(" "),s("td",[t._v("1.1")])])])]),t._v(" "),s("p",[t._v("ETag 全称是 Entity Tag(实体标签)，是"),s("code",[t._v("content hash")]),t._v(" 一样的存在，文件变了也相应的改变，文件不变计算得到的 ETag 也应当不变。HTTP 规范中并未指定 ETag 的计算方式，只要能够满足条件即可。在 Nginx 中设置 "),s("code",[t._v("etag: on;")]),t._v(" 之后，一个结果示例如下")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('ETag: "60a23b54-180"\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Nginx 中默认的 ETag 计算方式可参考 "),s("a",{attrs:{href:"https://github.com/nginx/nginx/blob/master/src/http/ngx_http_core_module.c#L1673",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("，伪代码可以表示为")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("etag = file.lastModifiedTime.toString(16) + file.length.toString(16);\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("这是一个结合最后修改时间和文件内容长度而生成的指纹。")]),t._v(" "),s("h2",{attrs:{id:"cache-control"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cache-control"}},[t._v("#")]),t._v(" Cache-Control")]),t._v(" "),s("p",[t._v("Cache-Control 是一个综合性的缓存配置字段。")]),t._v(" "),s("h3",{attrs:{id:"max-age"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#max-age"}},[t._v("#")]),t._v(" max-age")]),t._v(" "),s("p",[t._v("当使用 max-age 时，Cache-Control 与 Expires 的作用类似，不过 max-age 使用的是一个相对时间，相对于请求时间。示例如下")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("cache-control: max-age=31536000, public\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("在有效期内，会直接使用本地缓存的内容，失效后，退化为使用协商的方式。相比于 Expires，通过使用相对时间，解决了时间同步的问题。")]),t._v(" "),s("h3",{attrs:{id:"不同的缓存策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不同的缓存策略"}},[t._v("#")]),t._v(" 不同的缓存策略")]),t._v(" "),s("p",[t._v("Cache-Control 的返回值中，大多数情况下有以下两类指令")]),t._v(" "),s("ul",[s("li",[t._v("可缓存性指令：no-store, no-cache, private, public")]),t._v(" "),s("li",[t._v("到期指令：max-age, s-max-age 等")])]),t._v(" "),s("p",[t._v("这里体现了一个重要的设计思想，"),s("strong",[t._v("针对于代理服务器共享缓存和客户端私有缓存，缓存策略是不同的")]),t._v("。而针对于缓存代理，又有 "),s("code",[t._v("Age")]),t._v(" 等头部进行进一步的设置。")]),t._v(" "),s("h2",{attrs:{id:"注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),s("p",[t._v("Last-Modified 和 ETag，都使用了最后修改时间来进行比较，要确保最后修改时间和文件修改的一致性。比如当我们使用负载均衡在多台服务器上复制文件时，要注意别改变最后修改时间。可以做个简单的试验")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" a.txt\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1 mins later")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" a.txt b.txt\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# another 1 mins later")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" -p b.txt c.txt\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# list")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -ltr\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v("结果如下")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("06")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("06")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("06")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("需要通过一些参数进行处理的，不能直接默认的方式拷贝。总之，就是要确保最后修改时间和文件修改的一致性。")]),t._v(" "),s("h2",{attrs:{id:"no-cache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#no-cache"}},[t._v("#")]),t._v(" no-cache")]),t._v(" "),s("p",[t._v("no-cache 和 no-store 的区别基本上所有人都会注意到，但是 no-cache 本身代表的内容，却往往被忽略。no-cache 既然是所谓的协商缓存，就意味着是依赖于某些条件去判断的，这个条件其实就是 If-Modified-Since 带上的最后修改时间。")]),t._v(" "),s("p",[t._v("这个条件就是 Last-Modified，如果在 Nginx 中设置")]),t._v(" "),s("div",{staticClass:"language-nginx line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if_modified_since")]),t._v(" off"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("在请求时就不会带上 If-Modified-Since 请求头，客户端请求时没有带上能用以比较的信息，所谓的 no-cache 也就无从谈起了。很多人只将 "),s("strong",[t._v("需要与服务器验证缓存是否新鲜")]),t._v(" 记了下来，却忽略了验证的前提。")]),t._v(" "),s("h2",{attrs:{id:"总结与参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结与参考"}},[t._v("#")]),t._v(" 总结与参考")]),t._v(" "),s("p",[t._v("主要就是三个类型的缓存头")]),t._v(" "),s("ul",[s("li",[t._v("Last-Modified：使用最后修改时间来判断文件一致性")]),t._v(" "),s("li",[t._v("ETag：使用文件的指纹来确定文件一致性")]),t._v(" "),s("li",[t._v("Cache-Control：综合性的缓存设置")])]),t._v(" "),s("p",[t._v("而 Expires，Pragma 需要逐渐退出历史舞台了。")]),t._v(" "),s("p",[s("ref",{attrs:{links:["[MDN Cache-Control](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/cache-control)","[W3C HTTP/1.1](https://www.w3.org/Protocols/rfc2616/rfc2616.html)","[W3C HTTP/1.0](https://www.w3.org/Protocols/HTTP/1.0/spec.html)"]}})],1)])}),[],!1,null,null,null);a.default=r.exports}}]);