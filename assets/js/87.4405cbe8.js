(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{460:function(t,s,a){"use strict";a.r(s);var n=a(23),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"web-安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-安全"}},[t._v("#")]),t._v(" Web 安全")]),t._v(" "),a("h2",{attrs:{id:"同源与跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同源与跨域"}},[t._v("#")]),t._v(" 同源与跨域")]),t._v(" "),a("p",[t._v("谈到跨域的时候，基本上都是说的如何合法跨域访问的问题。")]),t._v(" "),a("h3",{attrs:{id:"同源策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同源策略"}},[t._v("#")]),t._v(" 同源策略")]),t._v(" "),a("p",[t._v("同源策略(Same origin policy) 是浏览器最基础的安全功能。\n简单来说，同源策略就是一个“自家人”认证，不是自家人，有些事情不能做。")]),t._v(" "),a("p",[t._v("同源：域名，协议，端口相同")]),t._v(" "),a("p",[t._v("限制的操作：")]),t._v(" "),a("ul",[a("li",[t._v("限制 DOM 操作")]),t._v(" "),a("li",[t._v("限制 XHR 等异步请求")]),t._v(" "),a("li",[t._v("限制 Cookie 等数据读取")])]),t._v(" "),a("p",[t._v("场景的解决跨越问题的方案有")]),t._v(" "),a("ul",[a("li",[t._v("CORS(跨越资源共享)：客户端和服务器通过 HTTP 头部进行协商，CORS的关键取决于服务器。CORS 又有所谓的简单请求，非简单请求，非简单请求有预检请求等。")]),t._v(" "),a("li",[t._v("服务器代理")]),t._v(" "),a("li",[t._v("image pings：比如场景的一些用户行为统计")]),t._v(" "),a("li",[t._v("JSONP：通过 src 去获取资源，然后提供 callback 给服务器，服务器解析封装到 callback 里面。")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleCallback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("result")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'handle callback'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" jsonp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ele "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'demo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\njsonp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/javascript'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\njsonp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:3000/api/list?callback=handleCallback'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nele"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("jsonp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nele"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("jsonp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("而服务器端需要返回一个使用 "),a("code",[t._v("handleCallback")]),t._v("封装的函数调用")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"handleCallback()"')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("JSONP 需要服务器配合，且返回内容会直接被执行，现在都已经不怎么用了。")]),t._v(" "),a("h2",{attrs:{id:"xss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss"}},[t._v("#")]),t._v(" XSS")]),t._v(" "),a("p",[t._v("XSS 全称 Cross Site Scripting，中文叫做跨站脚本攻击，这个名称是历史原因，理解为网页脚本注入攻击即可。")]),t._v(" "),a("p",[t._v("XSS 基本流程是一样的，都是下面这样的流程：")]),t._v(" "),a("ul",[a("li",[t._v("利用网站漏洞，形成带恶意脚本的新页面；")]),t._v(" "),a("li",[t._v("新页面触达其他用户；")]),t._v(" "),a("li",[t._v("恶意脚本执行；")])]),t._v(" "),a("p",[t._v("关于 XSS，一篇比较好的文章是 "),a("a",{attrs:{href:"https://tech.meituan.com/2018/09/27/fe-security.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端安全系列（一）：如何防止XSS攻击？"),a("OutboundLink")],1),t._v(" ，讲的比较到位了。")]),t._v(" "),a("p",[t._v("我只做一个简单的总结：")]),t._v(" "),a("ul",[a("li",[t._v("反射：不存储，但是能根据URL请求实时渲染；")]),t._v(" "),a("li",[t._v("存储：数据先存在服务器，然后再提取出来；")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("分类")]),t._v(" "),a("th",[t._v("恶意代码注入时机")]),t._v(" "),a("th",[t._v("恶意数据是否存储")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("反射型")]),t._v(" "),a("td",[t._v("Server")]),t._v(" "),a("td",[t._v("否")])]),t._v(" "),a("tr",[a("td",[t._v("存储型")]),t._v(" "),a("td",[t._v("Server")]),t._v(" "),a("td",[t._v("是")])]),t._v(" "),a("tr",[a("td",[t._v("DOM Based")]),t._v(" "),a("td",[t._v("Client")]),t._v(" "),a("td",[t._v("-")])])])]),t._v(" "),a("p",[t._v("所谓反射型，存储型，是恶意脚本来源的不同，存储型就是多了一个中间存储的过程；")]),t._v(" "),a("p",[t._v("所谓 DOM 型，不过是恶意代码注入的环节在客户端，由前端代码产生，与是否存储无关。DOM型既可能是反射型，也可能是存储型。")]),t._v(" "),a("p",[a("strong",[t._v("为什么说存储型的危害比较大")]),t._v("：对于存储型XSS，在正常业务逻辑，正常的页面访问行为都可能发生，并不需要攻击者发送链接给用户，诱导用户点击链接")]),t._v(" "),a("p",[a("strong",[t._v("XSS的防范")]),t._v("：概括来说就是 "),a("strong",[t._v("输入过滤，输出转义")]),t._v("。谨慎使用 "),a("code",[t._v("innerHTML")]),t._v(" 和 "),a("code",[t._v("location.href")]),t._v(" 等内容，确保数据可信。可以采用HttpOnly和CSP等。")]),t._v(" "),a("h2",{attrs:{id:"csrf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csrf"}},[t._v("#")]),t._v(" CSRF")]),t._v(" "),a("p",[t._v("CSRF，Cross Site Request Forgery，中文是跨站点请求伪造。CSRF是真的跨站了，不像XSS那样，说跨站又不跨站，不成样子。CSRF 的基本流程如下")]),t._v(" "),a("ul",[a("li",[t._v("用户登录a.com，并保留了登录凭证 Cookie")]),t._v(" "),a("li",[t._v("攻击者引诱受害者访问了b.com")]),t._v(" "),a("li",[t._v("b.com 向 a.com 发送请求，浏览器会默认携带 a.com 的 Cookie")]),t._v(" "),a("li",[t._v("a.com接收到请求后，误以为是用户发送的正常请求，按照正常逻辑处理，但是这并不是真实用户期望的")])]),t._v(" "),a("p",[t._v("CSRF的关键在于“伪造请求”，伪造请求并不一定是第三方网站的，只是第三方网站更容易被攻击者掌握，更普遍而已。伪造能够实现的原因是 b.com 向 a.com 请求的时候，会带上 a.com 的 cookie。那么只要用户同时访问了正常网站和第三方攻击网站，攻击就有可能发生。")]),t._v(" "),a("p",[a("strong",[t._v("CSRF的防范")]),t._v("：抓住两个关键点 "),a("strong",[t._v("第三方网站")]),t._v("，"),a("strong",[t._v("cookie")]),t._v("。有以下防范方案")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("方案")]),t._v(" "),a("th",[t._v("原理")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("同源检测")]),t._v(" "),a("td",[t._v("利用 Referer和Origin检查判断请求来源")])]),t._v(" "),a("tr",[a("td",[t._v("CSRF Token")]),t._v(" "),a("td",[t._v("第三方网站无法直接读取cookie")])]),t._v(" "),a("tr",[a("td",[t._v("双重 cookie")]),t._v(" "),a("td",[t._v("第三方网站无法直接读取cookie")])]),t._v(" "),a("tr",[a("td",[t._v("Samesite Cookie")]),t._v(" "),a("td",[t._v("从源头上解决，限制第三方网站利用cookie")])])])]),t._v(" "),a("p",[t._v("csrf 可参考"),a("a",{attrs:{href:"https://tech.meituan.com/2018/10/11/fe-security-csrf.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端安全系列（二）：如何防止CSRF攻击？"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);